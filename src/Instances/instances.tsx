import { Box, Button, Text, Image } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import Header from "../components/Header";
import { useState } from "react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

import { Input } from "@chakra-ui/react";
import { Field } from "../components/ui/field";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";

export const Instances = () => {
  const navigate = useNavigate();
  const { address } = useAccount();

  const [showFlag, setShowFlag] = useState<boolean>(false);
  if (address)
    return (
      <Box display="flex" width="100vw" height="100vh" flexDirection="row">
        <Navbar showFlag={showFlag} />
        <Box flex="1" display="flex" flexDirection="column" p={6} bg="#F6F6F6">
          <Header showFlag={showFlag} setShowFlag={setShowFlag} />
          <Box
            mt={5}
            display="flex"
            flex={1}
            flexDirection="column"
            bg="#FFFFFF"
            justifyContent="center"
            alignItems="center"
            spaceY={6}
            padding="2rem"
            rounded="3xl"
            overflowY="auto"
          >
            <Image src="./assets/logo1.svg" />
            <Text fontSize="16px">
              We’re currently testing our latest features, and we'd love for you
              to join us. If you're interested in Instances, sign up for the
              waitlist, and you'll be among the first to get access. We'll keep
              you updated and reach out as soon as it's available. Thanks for
              your support!
            </Text>
            <DialogRoot>
              <DialogTrigger asChild>
                <Button bg="#1C4EFF" _focus={{ outline: "none" }}>
                  Request Access
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Join waitlist</DialogTitle>
                </DialogHeader>
                <DialogBody spaceY={4}>
                  <Field label="Name">
                    <Input placeholder="Enter your name" />
                  </Field>
                  <Field label="Email">
                    <Input placeholder="Enter your email" />
                  </Field>
                  <Field label="Reason">
                    <Input placeholder="Enter your reason" height="100px" />
                  </Field>
                </DialogBody>
                <DialogFooter>
                  <DialogActionTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogActionTrigger>
                  <Button bg="#1A49F0">Ok</Button>
                </DialogFooter>
                <DialogCloseTrigger />
              </DialogContent>
            </DialogRoot>
          </Box>
        </Box>
      </Box>
    );
  else navigate("/");
};
