"use client"
import { Container, Flex, Button, Center } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Home = () => {
    const [loading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>();

    const signIn = async (providerName: "google" | "github"): Promise<void> => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ providerName }),
            });

            if (!response.ok) {
                throw new Error("Login failed");
            }

            console.log("Logged in successfully");
            setError(null);
        } catch (error) {
            console.error(error);
            setError("Login failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

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
