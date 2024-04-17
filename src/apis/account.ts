import { VITE_API_DOMAIN } from "src/const/env"

export const getAccountInfo = async ({ access_token }: { access_token: string }) => {
  return await fetch(`https://${VITE_API_DOMAIN}/auth/user_info`, {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${access_token}` }
  })
}
