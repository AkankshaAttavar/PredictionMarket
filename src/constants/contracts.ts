import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";

export const contractAddress = "0x258e29e0402fE49500aFEf6Dd83BD63592F91771";
export const tokenAddress = "0xF9227B8F870B0bEB722fb238866A96Be4c36e367";

export const contract = getContract({
    client: client,
    chain: baseSepolia,
    address: contractAddress
});

export const tokenContract = getContract({
    client: client,
    chain: baseSepolia,
    address: tokenAddress
});