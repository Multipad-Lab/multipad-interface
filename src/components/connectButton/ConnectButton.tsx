import { ConnectButton as ConnectButtonRainbow } from "@rainbow-me/rainbowkit"
import Button from "../button"
import connectIcon from "src/assets/images/icons/connect.png"
import { ConnectedButtonStyled } from "./ConnectButton.style"

const ConnectButton = ({ isMobile }: { isMobile?: boolean }) => {
  return (
    <ConnectButtonRainbow.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
        const ready = mounted && authenticationStatus !== "loading"
        const connected =
          ready && account && chain && (!authenticationStatus || authenticationStatus === "authenticated")

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none"
              }
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button className={isMobile ? "btn-connect-mb" : ""} sm variant='white' onClick={openConnectModal}>
                    <img src={connectIcon} alt='icon' />
                    Connect
                  </Button>
                )
              }

              if (chain.unsupported) {
                return (
                  <Button sm variant='dark' onClick={openChainModal}>
                    Wrong network
                  </Button>
                )
              }

              return (
                <ConnectedButtonStyled>
                  <Button
                    className='btn-chains'
                    sm
                    variant='outline'
                    style={{ width: 50 }}
                    width={30}
                    onClick={openChainModal}
                  >
                    {chain.hasIcon ? (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 32,
                          height: 32,
                          borderRadius: "100%",
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center"
                        }}
                      >
                        {chain.iconUrl && (
                          <img alt={chain.name ?? "Chain icon"} src={chain.iconUrl} style={{ width: 32, height: 32 }} />
                        )}
                      </div>
                    ) : (
                      chain.name
                    )}
                  </Button>

                  <Button
                    sm
                    variant='white'
                    className={`display_name ${isMobile ? "btn-connect-mb" : ""}`}
                    onClick={openAccountModal}
                  >
                    <img src={connectIcon} alt='icon' />
                    {account.displayName}
                  </Button>
                </ConnectedButtonStyled>
              )
            })()}
          </div>
        )
      }}
    </ConnectButtonRainbow.Custom>
  )
}

export default ConnectButton
