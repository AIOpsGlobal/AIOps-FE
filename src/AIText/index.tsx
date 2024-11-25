import { Box, Text, Button, Input, Textarea } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { useState } from "react";
import Header from "../components/Header";
import { Avatar } from "../components/ui/avatar";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../components/ui/select";

import { createListCollection } from "@chakra-ui/react";

export const AiText = () => {
  const [showFlag, setShowFlag] = useState<boolean>(false);
  const [message, setMessage] = useState("");
  //   const [model, setModel] = useState("");
  const [systemPrompt, setSystemPrompt] = useState("");

  const handleSendMessage = () => {
    console.log("Message sent:", message);
    setMessage(""); // Clear input after sending
  };
  const frameworks = createListCollection({
    items: [
      { label: "React.js", value: "react" },
      { label: "Vue.js", value: "vue" },
      { label: "Angular", value: "angular" },
      { label: "Svelte", value: "svelte" },
    ],
  });

  return (
    <Box display="flex" width="100vw" height="100vh" flexDirection="row">
      <Navbar showFlag={showFlag} />
      <Box flex="1" display="flex" flexDirection="column" p={6} bg="#F6F6F6">
        <Header showFlag={showFlag} setShowFlag={setShowFlag} />
        <Box
          p={6}
          mt={5}
          display="flex"
          flexDirection="row"
          flex={1}
          justifyContent="flex-start"
          alignItems="center"
          gap={6}
        >
          <Box
            width="full"
            display="flex"
            flexDirection="column"
            bg="white"
            p={2}
            rounded="lg"
            height="full"
          >
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
            <Box mb={4}>
              <Text fontWeight="bold">S</Text>
              <Text bg="gray.100" p={2} borderRadius="md">
                what can I help you?
              </Text>
            </Box>
            <Box
              flex="1"
              overflowY="auto"
              mb={4}
              p={2}
              border="1px"
              borderColor="gray.200"
              borderRadius="md"
            >
              {/* Chat messages will be displayed here */}
            </Box>
            <Input
              placeholder="Your sentence here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <Button onClick={handleSendMessage} colorScheme="blue" mt={2}>
              Send
            </Button>
          </Box>
          <Box
            width="348px"
            display="flex"
            flexDirection="column"
            bg="white"
            rounded="lg"
            height="full"
          >
            <Box width="300px" borderRadius="md" padding={4}>
              <Text fontWeight="bold" mb={2} textAlign="left">
                Model
              </Text>
              <SelectRoot collection={frameworks} size="sm" width="full">
                <SelectTrigger>
                  <SelectValueText placeholder="Select movie" />
                </SelectTrigger>
                <SelectContent>
                  {frameworks.items.map((movie) => (
                    <SelectItem item={movie} key={movie.value}>
                      {movie.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectRoot>

              <Text fontWeight="bold" mt={6} textAlign="left">
                System Prompt
              </Text>
              <Textarea
                placeholder="Input Something..."
                value={systemPrompt}
                onChange={(e) => setSystemPrompt(e.target.value)}
                mt={2}
              />

              <Text fontWeight="bold">Parameters</Text>
              {/* Add parameter inputs here if needed */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
