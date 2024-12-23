import { Box, Text } from "@chakra-ui/react";
import { Navbar } from "../Navbar";
import { useState } from "react";
import Header from "../Header";
import { Avatar } from "../../components/ui/avatar";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";

export const CardDetails = () => {
  const navigate = useNavigate();
  const { address } = useAccount();
  const [showFlag, setShowFlag] = useState<boolean>(false);
  const cardData = {
    title: "Llama 3.1 8B Instruct",
    description:
      "The Meta Llama 3.1 collection of multilingual large language models (LLMs) is a collection of pretrained and instruction-tuned generative models in 8B, 70B, and 405B sizes (text in/text out).",
    inference: "$0.08 Per 1M Tokens",
    fineTune: "$0.96 Per 1M Tokens",
    updateDate: "2024-09-25",
  };
  if (address)
    return (
      <Box display="flex" width="100vw" height="100vh" flexDirection="row">
        <Navbar showFlag={showFlag} />
        <Box flex="1" display="flex" flexDirection="column" p={6} bg="#F6F6F6">
          <Header showFlag={showFlag} setShowFlag={setShowFlag} />
          <Box p={6} bg="white" borderRadius="md" boxShadow="md">
            <Box display="flex" gap={2}>
              <Avatar
                src="./assets/icon-meta.png"
                name="Nue Camp"
                size="lg"
                shape="rounded"
              />
              <Box display="flex" flexDirection="column">
                <Text fontSize="16px" fontWeight="bold">
                  Llama 3.1 8B Instruct
                </Text>
                <Box display="flex" flexDirection="row" gap={2}>
                  <Text
                    color="#1c1c1c"
                    bg="#1c1c1c0d"
                    fontSize="12px"
                    fontWeight="normal"
                  >
                    Text
                  </Text>
                  <Text
                    color="#1c1c1c"
                    bg="#1c1c1c0d"
                    fontSize="12px"
                    fontWeight="normal"
                  >
                    Meta
                  </Text>
                </Box>
              </Box>
            </Box>
            <Text fontSize="sm" color="gray.500" mt={2}>
              License: {cardData.title}
            </Text>
            <Text mt={4} textAlign="left">
              {cardData.description}
            </Text>
            <Box
              display="flex"
              gap={4}
              justifyContent="center"
              alignItems="center"
            >
              <Box mt={4}>
                <Text fontWeight="bold">Inference:</Text>
                <Text>{cardData.inference}</Text>
              </Box>
              <Box mt={4}>
                <Text fontWeight="bold">Fine-tune:</Text>
                <Text>{cardData.fineTune}</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  else navigate("/");
};
