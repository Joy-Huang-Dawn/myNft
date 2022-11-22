import CustomContainer from "./CustomContainer";
import {Text,FormControl,Button,FormLabel,Input} from "@chakra-ui/react";
import {useState} from "react";
import {useMoralis} from "react-moralis";


export default function Profile({user}) {
    const [input,setInput] = useState('')
    // console.log(input)
    const {setUserData,isUserUpdating} = useMoralis()
    return (
        <CustomContainer>
            <Text><b>moralis用户名:</b>{user.getUsername()}</Text>
            <Text><b>钱包地址:</b>{user.get('ethAddress')}</Text>
            <form onSubmit={e => {
                e.preventDefault()
                if(input.trim() !== '') {
                    setUserData({
                        username:input
                    }).then(() => setInput(''))
                }
            }}>
                <FormControl>
                    <FormLabel htmlFor="username">更换用户名：</FormLabel>
                    <Input id="username" type="text" placeholder="ex. huangfuyan" value={input} onChange={e => setInput(e.target.value)}/>
                </FormControl>
                <Button type="submit" colorScheme="blue" disabled={isUserUpdating}>更换</Button>
            </form>
        </CustomContainer>
    )
}