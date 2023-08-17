import { Signer, ethers } from "ethers";
import contractData from "~/eth/build/contracts/aiverseNFT.json";
import { useEthers } from "vue-dapp";

export const useContract = () => {
  const { contractAddress } = useRuntimeConfig().public;
  const { signer, address } = useEthers();
  const contract = new ethers.Contract(
    contractAddress,
    contractData.abi,
    signer.value!
  );
  return { contract, address, signer  };
};
