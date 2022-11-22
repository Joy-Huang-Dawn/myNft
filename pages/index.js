import { Flex, Text, Button, Tabs, TabList, Tab, TabPanels, TabPanel, Box } from "@chakra-ui/react";
import Head from "next/head";
import { useMoralis } from "react-moralis";
import Balance from "../home/Balance";
import Header from "../home/Header";
import Nft from "../home/Nft";
import Profile from "../home/Profile";

export default function Home() {
  const {isAuthenticated, user, isAuthenticating, authenticate, logout, isLoggingOut} = useMoralis()
  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Login | NFT work2</title>
        </Head>
        <Flex direction="column" justifyContent="center" alignItems="center" width="100vw" height="100vh" bgGradient="linear(to-br, teal.400, blue.300)">
          <Text fontSize="5xl" fontWeight="bold" color="white">NFT work2</Text>
          
          <Button colorScheme="blue" size="lg" mt="6" onClick={() => authenticate({
            signingMessage: "Sign required to login in NFT work"
          })} disabled={isAuthenticating}>Login with Metamask</Button>
        </Flex>
      </>
    )
  }
  return (
    <>
    <Head>
      <title>NFT work2</title>
    </Head>
    <Flex direction="column" width="100vw" height="100vh">
      <Header isAuthenticated={isAuthenticated} isAuthenticating={isAuthenticating} user={user} authenticate={authenticate} logout={logout} isLoggingOut={isLoggingOut} />
      <Box flex="1" bg="blue.100" px="52" py="20">
      
        <Tabs size="lg" colorScheme="blue" align="center" variant="enclosed">
          <TabList>
            <Tab fontWeight="bold">账户资料</Tab>
            <Tab fontWeight="bold">账户余额</Tab>
            <Tab fontWeight="bold">NFT列表</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Profile user={user}/>
            </TabPanel>
            <TabPanel>
              <Balance user={user} />
            </TabPanel>
            <TabPanel>
              <Nft user={user}/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
   </>
  )
}