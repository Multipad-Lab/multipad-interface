// import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import "@rainbow-me/rainbowkit/styles.css"
import {
  AuthenticationStatus,
  createAuthenticationAdapter,
  darkTheme,
  getDefaultWallets,
  RainbowKitAuthenticationProvider,
  RainbowKitProvider
} from "@rainbow-me/rainbowkit"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import { bscTestnet } from "wagmi/chains"
import { useEffect, useState } from "react"
import { SiweMessage } from "siwe"
import { useModal } from "./utils/ModalContext"
import { getAccountInfo } from "./apis/account"
import { useLocation, useNavigate } from "react-router-dom"
import { routesName } from "./const/routes"
import { VITE_API_DOMAIN, VITE_PROJECT_ID, VITE_SIWE_DOMAIN } from "./const/env"

const { chains, publicClient } = configureChains(
  [bscTestnet],
  [
    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
)

const { connectors } = getDefaultWallets({
  appName: "Multipad",
  projectId: VITE_PROJECT_ID,
  chains
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

const WagmiProvider = ({ children }: { children: JSX.Element }) => {
  const [status, setStatus] = useState<AuthenticationStatus>("unauthenticated")
  const { handleAccountConnect } = useModal()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const access_token = localStorage.getItem("access_token")

    if (!access_token) return
    else setStatus("authenticated")
  }, [])

  const authenticationAdapter = createAuthenticationAdapter({
    getNonce: async () => {
      const response = await fetch(`https://${VITE_API_DOMAIN}/auth/nonce`)
      const nonce = await response.json()
      return nonce.data
    },
    createMessage: ({ nonce, address, chainId }) => {
      return new SiweMessage({
        domain: VITE_SIWE_DOMAIN,
        address,
        statement: "Sign in with Ethereum to the app.",
        uri: window.location.origin,
        version: "1",
        chainId,
        nonce
      })
    },
    getMessageBody: ({ message }) => {
      return message.prepareMessage()
    },
    verify: async ({ message, signature }) => {
      try {
        const verifyRes = await fetch(`https://${VITE_API_DOMAIN}/auth/verify`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message, signature })
        })

        if (verifyRes.ok) {
          const dataJSON = await verifyRes.json()

          setStatus("authenticated")
          getAccountInfo({ access_token: dataJSON.data.accessToken }).then(async (res) => {
            if (res.ok && !localStorage.getItem("access_token")) {
              const userInfoDataJSON = await res.json()
              handleAccountConnect(userInfoDataJSON.data)
              localStorage.setItem("access_token", JSON.stringify(dataJSON.data.accessToken))
            }
          })
        }

        return Boolean(verifyRes.ok)
      } catch (error) {
        return false
      }
    },
    signOut: async () => {
      localStorage.removeItem("access_token")
      localStorage.removeItem("confirmUuids")
      handleAccountConnect(undefined)
      setStatus("unauthenticated")

      await fetch(`https://${VITE_API_DOMAIN}/auth/logout`)
      if (pathname.includes("admin")) {
        navigate(routesName.ROOT)
      }
    }
  })

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitAuthenticationProvider adapter={authenticationAdapter} status={status}>
        <RainbowKitProvider initialChain={bscTestnet} chains={chains} theme={darkTheme()} modalSize='compact'>
          {children}
        </RainbowKitProvider>
      </RainbowKitAuthenticationProvider>
    </WagmiConfig>
  )
}

export default WagmiProvider
