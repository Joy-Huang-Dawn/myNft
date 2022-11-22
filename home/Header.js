import {Center,Flex,Text,Button} from "@chakra-ui/react";

export default function Header({user,logout,isLoggingOut}) {
    return (
        <header>
            <Flex px="10" py="6" justifyContent="space-between" bg="blue.400" color="white">
                <Center>
                    <Text fontSize="xl" fontWeight="bold">nft work2</Text>
                </Center>
                <Center>
                    <Text>{user.getUsername()}</Text>
                    <Button ml="4" colorScheme="blue" onClick={logout} disabled={isLoggingOut}>Logout</Button>
                </Center>
            </Flex>
        </header>
    )
}