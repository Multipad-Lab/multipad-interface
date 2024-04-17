import { useAccount, useContractRead } from "wagmi"
import multipadStaking from "src/abis/multipadStaking.json"
import { HistoryStake } from "src/apis/stake/getHistoryStake"
import { TOKEN_DECIMAL } from "src/const/common"

export const useRewardStake = ({ history }: { history: HistoryStake }) => {
  const { address } = useAccount()

  const { data: rewardData, refetch: refetchReward } = useContractRead({
    address: history.stakeContract,
    abi: multipadStaking.abi,
    functionName: "getCurrentRewardByIdStake",
    args: [address, history.idOnChain]
  })

  return {
    reward: Number(rewardData) / TOKEN_DECIMAL,
    refetchReward
  }
}
