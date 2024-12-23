import { Box, Text, Flex, Input, Button } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import Header from "../components/Header";
import { useState } from "react";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";

export const AccessKey = () => {
  const navigate = useNavigate();
  const { address } = useAccount();
  const [showFlag, setShowFlag] = useState<boolean>(false);
  const apiKey = "********************************"; // Replace with actual API key
  const publicKey = "ssh-ed25519 AAAAC3NzaC1lZD..."; // Replace with actual public key
  //   const privateKey = "-----BEGIN PRIVATE KEY-----\n..."; // Replace with actual private key

  //   const handleCopy = (key: string) => {
  //     navigator.clipboard.writeText(key);
  //   };

  if (address)
    return (
      <Box display="flex" width="100vw" height="100vh" flexDirection="row">
        <Navbar showFlag={showFlag} />
        <Box flex="1" display="flex" flexDirection="column" bg="#F6F6F6" p={6}>
          <Header showFlag={showFlag} setShowFlag={setShowFlag} />
          <Box
            mt={5}
            display="flex"
            flexDirection="column"
            bg="#FFFFFF"
            flex={1}
            justifyContent="flex-start"
            alignItems="flex-start"
            spaceY={6}
            p={6}
            rounded="3xl"
          >
            <Text fontSize="2xl" fontWeight="bold">
              API Keys
            </Text>
            <Text fontSize="14px" fontWeight="medium" color="#1c1c1c80">
              API Keys allow users to interact with Yotta Cloud through an HTTP
              API. Learn more about API keys in our docs page.
            </Text>
            <Input value={apiKey} readOnly />
            <Flex>
              {/* <IconButton
              icon={<CopyIcon />}
              onClick={() => handleCopy(apiKey)}
              aria-label="Copy API Key"
              variant="outline"
              mr={2}
            />
            <IconButton
              icon={<DownloadIcon />}
              aria-label="Download API Key"
              variant="outline"
            /> */}
            </Flex>

            <Text fontSize="2xl" fontWeight="bold" mt={6}>
              SSH Keys
            </Text>
            <Flex alignItems="center">
              <Text
                fontSize="14px"
                fontWeight="medium"
                textWrap="nowrap"
                mr={2}
              >
                Public key:
              </Text>
              <Input value={publicKey} readOnly />
              {/* <IconButton
              icon={<CopyIcon />}
              onClick={() => handleCopy(publicKey)}
              aria-label="Copy Public Key"
              variant="outline"
              ml={2}
            /> */}
            </Flex>
            <Flex alignItems="center" mt={4}>
              <Text fontWeight="bold" mr={2}>
                Private key:
              </Text>
              <Button
                colorScheme="blue"
                onClick={() => {
                  /* Logic to download private key */
                }}
              >
                Download
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    );
  else navigate("/");
};
