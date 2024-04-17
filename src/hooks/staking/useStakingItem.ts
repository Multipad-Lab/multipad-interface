import { StakeFilter } from "src/apis/stake/getStakeFilter"
import { useAccount, useContractReads } from "wagmi"
import myTokenContract from "src/abis/myToken.json"
import multipadStaking from "src/abis/multipadStaking.json"
import { TOKEN_DECIMAL } from "src/const/common"

export const useStakingItem = ({ stake }: { stake: StakeFilter }) => {
  const { address } = useAccount()
  const myTokenContractWagmi = {
    address: stake?.stakeToken,
    abi: myTokenContract.abi as any
  }

  const multipadStakingContractWagmi = {
    address: stake?.address,
    abi: multipadStaking.abi as any
  }

  const { data, refetch } = useContractReads({
    contracts: [
      {
        ...myTokenContractWagmi,
        functionName: "balanceOf",
        args: [address]
      },
      {
        ...myTokenContractWagmi,
        functionName: "allowance",
        args: [address, stake?.address]
      },
      {
        ...multipadStakingContractWagmi,
        functionName: "tiers",
        args: [stake?.idOnChain]
      },
      {
        ...multipadStakingContractWagmi,
        functionName: "amountByIdTier",
        args: [address, stake?.idOnChain]
      }
    ],
    enabled: !!stake
  })

  const balanceOf = data?.[0]?.status === "success" ? Number(data?.[0]?.result) : 0
  const balance = data?.[0]?.status === "success" ? Number(data?.[0]?.result) / TOKEN_DECIMAL : 0
  const allowance = data?.[1]?.status === "success" ? Number(data?.[1]?.result) : 0
  const tvlData = data?.[2]?.status === "success" ? data?.[2]?.result?.[9] : undefined
  const amountStakedData = data?.[3]?.status === "success" ? data?.[3]?.result : undefined

  return {
    tvl: tvlData ? Number(tvlData) / TOKEN_DECIMAL : 0,
    amountStaked: amountStakedData ? Number(amountStakedData) / TOKEN_DECIMAL : 0,
    balance,
    balanceOf,
    allowance,
    refetch
  }
}
