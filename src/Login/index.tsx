import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { Box, Image, Text, Stack } from "@chakra-ui/react";
import MetamaskSvg from "../components/common/MetamaskSvg";
import { useEffect } from "react";
import axios from "axios";

const Login = () => {
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  const navigate = useNavigate();

  useEffect(() => {
    const connectWallet = async () => {
      try {
        await axios.post(
          "https://intelliphy-api.onrender.com/api/users/register",
          { address }
        );
      } catch (error) {
        console.error({ error });
      }
    };

    if (address) {
      connectWallet();
      navigate("/instances");
    }
  }, [address]);

  const onConnect = () => {
    open?.();
  };

  return (
    <Box
      bg="black"
      display="flex"
      minH="100vh"
      minW="100vw"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        width="300px"
        mx="auto"
        mt="100px"
        p={6}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        marginBlockStart="0"
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDirection="column"
        bg="white"
      >
        <Image src="./assets/logo.png" width="50px" height="50px" />
        <Stack textAlign="center" mt={6}>
          <Text fontSize="xl">Welcome</Text>
          <Text fontSize="md">Log in to continue to Yotta Platform.</Text>
        </Stack>
        <div className="mt-6 flex flex-col items-center w-full gap-3">
          <button
            className="rounded-lg border border-[#F7FF98] flex items-center justify-center gap-2 w-full py-[10px] bg-[#F7FF98] hover:bg-[#262626] hover:text-white group transition-all duration-300 ease-in-out"
            onClick={onConnect}
          >
            <MetamaskSvg />
            <div className="SpaceMono text-[#1C1C1C] leading-7 text-[16px] sm:text-[16px] font-bold group-hover:text-[#F7FF98] transition-all duration-300 ease-in-out">
              Connect Wallet
            </div>
          </button>
        </div>
      </Box>
    </Box>
  );
};

export default Login;
