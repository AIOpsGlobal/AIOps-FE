import {
  Box,
  Button,
  Text,
  Group,
  Image,
  Input,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { Avatar } from "../components/ui/avatar";
import { Navbar } from "../components/Navbar";
import Header from "../components/Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../components/ui/menu";
import { Grid } from "@chakra-ui/react";

export const Marketplace = () => {
  const [showFlag, setShowFlag] = useState<boolean>(false);

  return (
    <Box display="flex" width="100vw" height="100vh" flexDirection="row">
      <Navbar showFlag={showFlag} />
      <Box flex="1" bg="#F6F6F6" p={6}>
        <Header showFlag={showFlag} setShowFlag={setShowFlag} />
        <Box
          mt={5}
          display="flex"
          flexDirection="column"
          flex={1}
          justifyContent="flex-start"
          alignItems="flex-start"
          spaceY={6}
          p={6}
          rounded="3xl"
        >
          <Group position="relative" width="375px">
            <Box
              position="absolute"
              left="0px"
              top="0px"
              width="2.5rem"
              height="2.5rem"
              fontSize="sm"
              display="flex"
              alignItems="center"
              justifyContent="center"
              zIndex="2"
            >
              <Image src="./assets/search.svg" width="24px" />
            </Box>
            <Input
              placeholder="Search"
              width="full"
              height="2.5rem"
              fontSize="sm"
              paddingInlineStart="2.5rem"
              paddingInlineEnd="0.75rem"
              borderRadius="8px"
              outline="transparent solid 3px"
              position="relative"
              appearance="none"
              fontWeight="medium"
              color="#1c1c1c"
              paddingTop="0.625rem"
              paddingBottom="0.625rem"
              transition="0.3s"
              boxShadow="none"
              background="#FFFFFF"
              border="none"
            />
          </Group>
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
            width="full"
          >
            <Box display="flex" gap={4} flexDirection="row">
              <Group display="inline-flex">
                <Button
                  className="marketplaceButton"
                  _focus={{ outline: "none" }}
                >
                  All
                </Button>
                <Button
                  className="marketplaceButton"
                  _focus={{ outline: "none" }}
                >
                  Text
                </Button>
              </Group>
              <Group display="inline-flex">
                <Button
                  className="marketplaceButton"
                  _focus={{ outline: "none" }}
                >
                  All
                </Button>
                <Button
                  className="marketplaceButton"
                  _focus={{ outline: "none" }}
                >
                  Meta
                </Button>
                <Button
                  className="marketplaceButton"
                  _focus={{ outline: "none" }}
                >
                  Mistral
                </Button>
                <Button
                  className="marketplaceButton"
                  _focus={{ outline: "none" }}
                >
                  Google
                </Button>
              </Group>
            </Box>
            <MenuRoot>
              <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Popularity
                </Button>
              </MenuTrigger>
              <MenuContent>
                <MenuItem value="new-txt">Popularity</MenuItem>
                <MenuItem value="new-file">Latest Updates</MenuItem>
              </MenuContent>
            </MenuRoot>
          </Box>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap="4"
          >
            <ChakraLink href="/models/detail">
              <Card.Root className="cardStyle">
                <Card.Body gap="2">
                  <Box display="flex" gap={2}>
                    <Avatar
                      src="./assets/icon-meta.png"
                      name="Nue Camp"
                      size="lg"
                      shape="rounded"
                    />
                    <Box display="flex" flexDirection="column">
                      <Card.Title fontSize="16px" fontWeight="bold">
                        Llama 3.1 8B Instruct
                      </Card.Title>
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
                  <Card.Description>
                    <Text className="cardText">
                      The Meta Llama 3.1 collection of multilingual large
                      language models (LLMs) is a collection of pretrained and
                      instruction-tuned generative models in 8B, 70B, and 405B
                      sizes (text in/text out). The Llama 3.1 instruction-tuned
                      text-only models (8B, 70B, 405B) are optimized for
                      multilingual dialogue use cases and outperform many of the
                      available open-source and closed chat models on common
                      industry benchmarks.
                    </Text>
                  </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="space-between" alignItems="center">
                  <Text fontSize="12px" color="#1c1c1c" opacity={0.5}>
                    6591850
                  </Text>
                  <Text fontSize="12px" color="#1c1c1c" opacity={0.5}>
                    Update 2024-09-25
                  </Text>
                </Card.Footer>
              </Card.Root>
            </ChakraLink>
            <ChakraLink href="/models/detail">
              <Card.Root className="cardStyle" as={Link}>
                <Card.Body gap="2">
                  <Box display="flex" gap={2}>
                    <Avatar
                      src="./assets/icon-meta.png"
                      name="Nue Camp"
                      size="lg"
                      shape="rounded"
                    />
                    <Box display="flex" flexDirection="column">
                      <Card.Title fontSize="16px" fontWeight="bold">
                        Llama 3.2 8B Instruct
                      </Card.Title>
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
                  <Card.Description>
                    <Text className="cardText">
                      The Meta Llama 3.2 collection of multilingual large
                      language models (LLMs) is a collection of pretrained and
                      instruction-tuned generative models in 1B and 3B sizes
                      (text in/text out). The Llama 3.2 instruction-tuned text
                      only models are optimized for multilingual dialogue use
                      cases, including agentic retrieval and summarization
                      tasks. They outperform many of the available open source
                      and closed chat models on common industry benchmarks.
                    </Text>
                  </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="space-between" alignItems="center">
                  <Text fontSize="12px" color="#1c1c1c" opacity={0.5}>
                    967160
                  </Text>
                  <Text fontSize="12px" color="#1c1c1c" opacity={0.5}>
                    Update 2024-10-24
                  </Text>
                </Card.Footer>
              </Card.Root>
            </ChakraLink>
            <ChakraLink href="/models/detail">
              <Card.Root className="cardStyle" as={Link}>
                <Card.Body gap="2">
                  <Box display="flex" gap={2}>
                    <Avatar
                      src="./assets/icon-mistral.png"
                      name="Nue Camp"
                      size="lg"
                      shape="rounded"
                    />
                    <Box display="flex" flexDirection="column">
                      <Card.Title fontSize="16px" fontWeight="bold">
                        Mistral 7B Instruct
                      </Card.Title>
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
                          Mistral
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                  <Card.Description>
                    <Text className="cardText">
                      The Mistral-7B-v0.1 Large Language Model (LLM) is a
                      pretrained generative text model with 7 billion
                      parameters. Mistral-7B-v0.1 outperforms Llama 2 13B on all
                      benchmarks we tested.
                    </Text>
                  </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="space-between" alignItems="center">
                  <Text fontSize="12px" color="#1c1c1c" opacity={0.5}>
                    6591850
                  </Text>
                  <Text fontSize="12px" color="#1c1c1c" opacity={0.5}>
                    Update 2024-09-25
                  </Text>
                </Card.Footer>
              </Card.Root>
            </ChakraLink>
            <ChakraLink href="/models/detail">
              <Card.Root className="cardStyle" as={Link}>
                <Card.Body gap="2">
                  <Box display="flex" gap={2}>
                    <Avatar
                      src="./assets/icon-google.png"
                      name="Nue Camp"
                      size="lg"
                      shape="rounded"
                    />
                    <Box display="flex" flexDirection="column">
                      <Card.Title fontSize="16px" fontWeight="bold">
                        Gemma 2 9B
                      </Card.Title>
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
                          Google
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                  <Card.Description>
                    <Text className="cardText">
                      Gemma is a family of lightweight, state-of-the-art open
                      models from Google, built from the same research and
                      technology used to create the Gemini models. They are
                      text-to-text, decoder-only large language models,
                      available in English, with open weights for both
                      pre-trained variants and instruction-tuned variants. Gemma
                      models are well-suited for a variety of text generation
                      tasks, including question answering, summarization, and
                      reasoning. Their relatively small size makes it possible
                      to deploy them in environments with limited resources such
                      as a laptop, desktop or your own cloud infrastructure,
                      democratizing access to state of the art AI models and
                      helping foster innovation for everyone.
                    </Text>
                  </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="space-between" alignItems="center">
                  <Text fontSize="12px" color="#1c1c1c" opacity={0.5}>
                    6591850
                  </Text>
                  <Text fontSize="12px" color="#1c1c1c" opacity={0.5}>
                    Update 2024-09-25
                  </Text>
                </Card.Footer>
              </Card.Root>
            </ChakraLink>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
