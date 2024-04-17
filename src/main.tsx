// import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import ContextProvider from "./utils/ContextProvider"
import App from "./App.tsx"
import WagmiProvider from "./WagmiProvider.tsx"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import initRequest from "./utils/services/initRequest.ts"
import "./assets/styles/Main.css"

initRequest()

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ContextProvider>
    <BrowserRouter>
      <WagmiProvider>
        <>
          <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='dark'
          />
          <App />
        </>
      </WagmiProvider>
    </BrowserRouter>
  </ContextProvider>
  // </React.StrictMode>
)
