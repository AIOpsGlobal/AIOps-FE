import {
  Box,
  Button,
  Input,
  Image,
  Text,
  Link,
  Stack,
  Fieldset,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/instances");
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
        <Stack textAlign="center" mt={4}>
          <Text fontSize="lg">Welcome</Text>
          <Text fontSize="xs">
            Sign Up to yottalabs to continue to Yotta Platform.
          </Text>
        </Stack>
        <Fieldset.Root size="lg" maxW="lg" onSubmit={() => handleSubmit()}>
          <Input type="email" placeholder="Email address" mt="4" />
          <Input type="password" placeholder="Password" mt="2" />
          <Link
            color="blue.500"
            mt={3}
            display="block"
            textAlign="left"
            fontSize="xs"
          >
            Forgot password?
          </Link>
          <Button
            colorScheme="blue"
            width="full"
            mt={4}
            bg="#1C4EFF"
            fontSize="small"
            borderRadius="0"
            onClick={() => handleSubmit()}
          >
            Continue
          </Button>
        </Fieldset.Root>
        <Text mt={4} fontSize="xs" textAlign="left" width="full">
          Don’t have an account? <Link color="blue.500"> Sign up</Link>
        </Text>
        <Text textAlign="center" mt={4} fontSize="11px">
          OR
        </Text>
        <Button
          variant="outline"
          colorScheme="blue"
          width="full"
          mt={2}
          fontSize={"sm"}
          fontStyle="normal"
        >
          Continue with Metamask
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
