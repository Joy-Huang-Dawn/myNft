import { Button, Divider, Text } from "@chakra-ui/react";
import Moralis from "moralis-v1";
import { useMoralisWeb3Api, useERC20Balances } from "react-moralis";
import CustomContainer from "./CustomContainer";
import React from "react";

export default function Balance({ user }) {
    const [ethBalance, setEthBalance] = React.useState(0)
    const Web3Api = useMoralisWeb3Api()

    const { fetchERC20Balances, data } = useERC20Balances()

    const fetchBalance = async () => {
        const result = await Web3Api.account.getNativeBalance({
            chain: "goerli",
            address: user.get('ethAddress')
        }).catch(e => console.log(e))
        console.log("result ==> " + result);
        if (result.balance) {
            setEthBalance(Moralis.Units.FromWei(result.balance))
        }
    }

    React.useEffect(() => {
        fetchBalance()
        fetchERC20Balances({
            params: {
                chain: "goerli",
                address: user.get('ethAddress')
            }
        })
    }, [])

    return (
        <CustomContainer>
            <Text mb="6" fontSize="xl" fontWeight="bold" textAlign="left">账户余额</Text>
            {ethBalance && <Text>余额：&nbsp; {ethBalance} <b>ETH</b></Text>}
            <Divider />
            {data && data.map(token => (
                <div key={token.symbol}>
                    <Text>其他资产：&nbsp; {Moralis.Units.FromWei(token.balance)} <b>{token.symbol}</b></Text>
                    <Divider />
                </div>
            ))}
            <Button mt="4" colorScheme="blue" onClick={() => {fetchBalance();  fetchERC20Balances({
            params: {
                chain: "goerli",
                address: user.get('ethAddress')
            }
        }) }}>&nbsp; 刷新</Button>
        </CustomContainer>
    )
}
