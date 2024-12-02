"use client"
import { useAuth } from "@/components/Providers";
import { Container, Flex, Button, Center } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Home = () => {
    const { signIn } = useAuth();

    return <Flex
        justify="center"
        align="center"
        height="100vh"
        width="100vw"
        bg="gray.100"
    >
        <Container w="40vw" h="40vh" border="2px solid black" bg="white">
            <Center h="100%">
                <Button onClick={() => signIn("google")}>Google</Button>
            </Center>
        </Container>
    </Flex>
};

export default Home;
