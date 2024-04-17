import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { VITE_API_DOMAIN } from "src/const/env"
// import { VITE_API_DOMAIN } from "src/const/env"

export type IConfig = AxiosRequestConfig & {
  showSpin?: boolean
}

type IAxiosResponse = AxiosError & {
  config: {
    showSpin?: boolean
  }
}

const requestConfig: IConfig = {
  baseURL: `https://${VITE_API_DOMAIN}/`,
  showSpin: false,
  headers: {
    "content-type": "application/json"
  }
}

export const axiosInstance = axios.create(requestConfig)

export default function initRequest() {
  axiosInstance.interceptors.request.use(
    (config: IConfig) => {
      // add x-auth-token
      const accessToken = localStorage.getItem("access_token")

      if (config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${JSON.parse(accessToken)}`
      }

      return config
    },
    (error: IAxiosResponse) => {
      return Promise.reject(error)
    }
  )

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse): Promise<any> => {
      const { data } = response

      return data
    },
    (error: IAxiosResponse) => {
      // handle errors
      switch (error.response?.status) {
        case 401: {
          break
        }
        case 403: {
          break
        }
        case 500: {
          break
        }
        default:
          break
      }

      return Promise.reject(error.response?.data)
    }
  )
}
