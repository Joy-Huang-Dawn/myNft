import { Box, Image, Text } from "@chakra-ui/react";
import { useNFTBalances } from "react-moralis";
import CustomContainer from "./CustomContainer";
import React from "react";

export default function Nft({ user }) {
    const { getNFTBalances, data } = useNFTBalances();

    React.useEffect(() => {
        getNFTBalances({
            params: {
                chain: "goerli",
                address: user.get('ethAddress')
            }
        })
    }, [])
    return (
        <CustomContainer>
            <Text fontSize="xl" fontWeight="bold">NFT列表</Text>
            {data && data.result.map(nft => (
                <Box mt="4" px="2" py="2" borderWidth="1px" borderRadius="md" key={nft.token_uri}>
                    
                    <b>NFT :  {nft.name}</b>
                    {nft.image && <Image src={nft.image} />}
                    <p>token Id：{nft.token_id}</p>
                    <p>合约类型：{nft.contract_type}</p>
                    <p>nft持有者：{nft.owner_of}</p>
                    <p>数量：{nft.amount}</p>
                    <p>图像uri:{nft.token_uri}</p>
                </Box>
            ))}
        </CustomContainer>
    )
}