import { Box, Text, Flex, Input } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import Header from "../components/Header";
import { useState } from "react";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";

export const Account = () => {
  const navigate = useNavigate();
  const { address } = useAccount();
  const [showFlag, setShowFlag] = useState<boolean>(false);

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
              Account settings
            </Text>

            <Text fontSize="lg" fontWeight="bold" mt={4}>
              Profile
            </Text>
            <Flex width="full" mb={4}>
              <Box flex="1" mr={4}>
                <Text>Name</Text>
                <Input value="251501367707963392" readOnly />
              </Box>
              <Box flex="1" mr={4}>
                <Text>Email</Text>
                <Input value="-" readOnly />
              </Box>
              <Box flex="1">
                <Text>Joined Date</Text>
                <Input value="2024-11-24" readOnly />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    );
  else navigate("/");
};
