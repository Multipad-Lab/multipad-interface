export type AccountType = {
  address: string
  createdAt: string
  id: string
  isKYC: AccountKYC
  point: number
  role: AccountRole
  tier: AccountTier
  totalStaking: number
  updatedAt: "2024-02-16T15:42:20.219Z"
}

export enum AccountRole {
  ADMIN = 0,
  USER = 1
}

export enum AccountKYC {
  IS_KYC = 0,
  IS_NOT_KYC = 1
}

export enum AccountTier {
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4
}
