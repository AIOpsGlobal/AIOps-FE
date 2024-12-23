import { Box, VStack, Text, Link as ChakraLink } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import {
  ClusterIcon,
  InstanceIcon,
  InterfaceIcon,
  ModelsIcon,
} from "../../utils";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "../ui/accordion";
import { PiBrainThin } from "react-icons/pi";
import { TbPigMoney } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

interface NavbarProps {
  showFlag: boolean;
}

export const Navbar = ({ showFlag }: NavbarProps) => {
  const location = useLocation();
  return (
    <Box
      display={!showFlag ? "flex" : "none"}
      width="236px"
      bg="white"
      boxShadow="md"
      padding={6}
      height="100vh"
      flexDirection="column"
      overflowY="auto"
    >
      {/* <LogoIcon /> */}
      <div className="text-xl font-semibold mt-5">Intelliphy Labs</div>
      <VStack align="start" gap={4} mt={16}>
        <ChakraLink
          href="/instances"
          style={{ width: "100%" }}
          border="none"
          _focus={{ outline: "none" }}
        >
          <Box
            px={4}
            py={2}
            bg={location.pathname === "/instances" ? "#1c4eff1a" : "white"}
            color={location.pathname === "/instances" ? "#1C4EFF" : "black"}
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            width="full"
            _hover={{ bg: "#1c4eff1a" }}
            gap={3}
          >
            <Box
              bg={location.pathname === "/instances" ? "#1c4eff" : "white"}
              borderRadius={6}
              width="24px"
              height="24px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <InstanceIcon
                color={location.pathname === "/instances" ? "#FFFFFF" : "black"}
              />
            </Box>
            <Text textAlign="center" fontSize="sm">
              Instances
            </Text>
          </Box>
        </ChakraLink>
        <ChakraLink
          href="/clusters"
          style={{ width: "100%" }}
          border="none"
          _focus={{ outline: "none" }}
        >
          <Box
            px={4}
            py={2}
            bg={location.pathname === "/clusters" ? "#1c4eff1a" : "white"}
            color={location.pathname === "/clusters" ? "#1C4EFF" : "black"}
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            width="full"
            _hover={{ bg: "#1c4eff1a" }}
            gap={3}
          >
            <Box
              bg={location.pathname === "/clusters" ? "#1c4eff" : "white"}
              borderRadius={6}
              width="24px"
              height="24px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <ClusterIcon
                color={location.pathname === "/clusters" ? "#FFFFFF" : "black"}
              />
            </Box>
            <Text textAlign="center" fontSize="sm">
              Clusters
            </Text>
          </Box>
        </ChakraLink>
        <AccordionRoot
          size="lg"
          collapsible
          defaultValue={["b"]}
          _focus={{ outline: "none" }}
          color={
            location.pathname === "/market/marketplace" ? "#1C4EFF" : "black"
          }
        >
          <AccordionItem
            value="Market"
            _focus={{ outline: "none" }}
            border="none"
          >
            <AccordionItemTrigger
              _focus={{ outline: "none" }}
              px={4}
              py={2}
              bg={
                location.pathname === "/market/marketplace"
                  ? "#1c4eff1a"
                  : "white"
              }
              borderRadius={6}
              justifyContent="center"
              alignItems="center"
              _hover={{ bg: "#1c4eff1a" }}
              border="none"
            >
              <Box
                bg={
                  location.pathname === "/market/marketplace"
                    ? "#1c4eff"
                    : "white"
                }
                borderRadius={6}
                width="24px"
                height="24px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <ModelsIcon
                  color={
                    location.pathname === "/market/marketplace"
                      ? "#FFFFFF"
                      : "black"
                  }
                />
              </Box>
              <Text textAlign="center" fontSize="sm">
                Model
              </Text>
            </AccordionItemTrigger>
            <AccordionItemContent border="none">
              <ChakraLink
                href="/market/marketplace"
                border="none"
                _focus={{ outline: "none" }}
                color={
                  location.pathname === "/market/marketplace"
                    ? "#1C4EFF"
                    : "black"
                }
                style={{ borderLeft: "1px dashed #c0c0c0", paddingLeft: 26 }}
              >
                <Text textAlign="center" fontSize="sm">
                  Marketplace
                </Text>
              </ChakraLink>
            </AccordionItemContent>
          </AccordionItem>
        </AccordionRoot>
        <AccordionRoot
          size="lg"
          collapsible
          defaultValue={["b"]}
          _focus={{ outline: "none" }}
          color={location.pathname === "/aiexplorer" ? "#1C4EFF" : "black"}
        >
          <AccordionItem
            value="Market"
            _focus={{ outline: "none" }}
            border="none"
          >
            <AccordionItemTrigger
              _focus={{ outline: "none" }}
              px={4}
              py={2}
              bg={location.pathname === "/aiexplorer" ? "#1c4eff1a" : "white"}
              borderRadius={6}
              justifyContent="center"
              alignItems="center"
              _hover={{ bg: "#1c4eff1a" }}
              border="none"
            >
              <Box
                bg={location.pathname === "/aiexplorer" ? "#1c4eff" : "white"}
                borderRadius={6}
                width="24px"
                height="24px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <PiBrainThin />
                {/* <AiExplorerIcon
                  color={
                    location.pathname === "/aiexplorer" ? "#FFFFFF" : "black"
                  }
                /> */}
              </Box>
              <Text textAlign="center" fontSize="sm">
                AI Explorer
              </Text>
            </AccordionItemTrigger>
            <AccordionItemContent border="none">
              <ChakraLink
                href="/aiexplorer/text"
                border="none"
                _focus={{ outline: "none" }}
                color={
                  location.pathname === "/aiexplorer/text" ? "#1C4EFF" : "black"
                }
                style={{ borderLeft: "1px dashed #c0c0c0", paddingLeft: 26 }}
              >
                <Text textAlign="start" fontSize="sm">
                  Text {" "}
                </Text>
              </ChakraLink>
            </AccordionItemContent>
            <AccordionItemContent border="none">
              <ChakraLink
                href="/aiexplorer/image"
                border="none"
                _focus={{ outline: "none" }}
                color={
                  location.pathname === "/aiexplorer/image"
                    ? "#1C4EFF"
                    : "black"
                }
                style={{ borderLeft: "1px dashed #c0c0c0", paddingLeft: 26 }}
              >
                <Text textAlign="start" fontSize="sm">
                  Image
                </Text>
              </ChakraLink>
            </AccordionItemContent>
            <AccordionItemContent border="none">
              <ChakraLink
                href="/aiexplorer/audio"
                border="none"
                _focus={{ outline: "none" }}
                color={
                  location.pathname === "/aiexplorer/audio"
                    ? "#1C4EFF"
                    : "black"
                }
                style={{ borderLeft: "1px dashed #c0c0c0", paddingLeft: 26 }}
              >
                <Text textAlign="start" fontSize="sm">
                  Audio
                </Text>
              </ChakraLink>
            </AccordionItemContent>
          </AccordionItem>
        </AccordionRoot>
        <ChakraLink
          href="/interface"
          style={{ width: "100%" }}
          border="none"
          _focus={{ outline: "none" }}
        >
          <Box
            px={4}
            py={2}
            bg={location.pathname === "/interface" ? "#1c4eff1a" : "white"}
            color={location.pathname === "/interface" ? "#1C4EFF" : "black"}
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            width="full"
            _hover={{ bg: "#1c4eff1a" }}
            gap={3}
          >
            <Box
              bg={location.pathname === "/interface" ? "#1c4eff" : "white"}
              borderRadius={6}
              width="24px"
              height="24px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <InterfaceIcon
                color={location.pathname === "/interface" ? "#FFFFFF" : "black"}
              />
            </Box>
            <Text textAlign="center" fontSize="sm">
              Interface
            </Text>
          </Box>
        </ChakraLink>
        <ChakraLink
          href="/billing"
          style={{ width: "100%" }}
          border="none"
          _focus={{ outline: "none" }}
        >
          <Box
            px={4}
            py={2}
            bg={location.pathname === "/billing" ? "#1c4eff1a" : "white"}
            color={location.pathname === "/billing" ? "#1C4EFF" : "black"}
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            width="full"
            _hover={{ bg: "#1c4eff1a" }}
            gap={3}
          >
            <Box
              bg={location.pathname === "/billing" ? "#1c4eff" : "white"}
              borderRadius={6}
              width="24px"
              height="24px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <TbPigMoney />
              {/* <BillingIcon
                color={location.pathname === "/billing" ? "#FFFFFF" : "black"}
              /> */}
            </Box>
            <Text textAlign="center" fontSize="sm">
              Billing
            </Text>
          </Box>
        </ChakraLink>
        <AccordionRoot
          size="lg"
          collapsible
          defaultValue={["b"]}
          _focus={{ outline: "none" }}
          color={location.pathname === "/Settings" ? "#1C4EFF" : "black"}
        >
          <AccordionItem
            value="Settings"
            _focus={{ outline: "none" }}
            border="none"
          >
            <AccordionItemTrigger
              _focus={{ outline: "none" }}
              px={4}
              py={2}
              bg={location.pathname === "/settings" ? "#1c4eff1a" : "white"}
              borderRadius={6}
              justifyContent="center"
              alignItems="center"
              _hover={{ bg: "#1c4eff1a" }}
              border="none"
            >
              <Box
                bg={location.pathname === "/settings" ? "#1c4eff" : "white"}
                borderRadius={6}
                width="24px"
                height="24px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                {/* <SettingsIcon
                color={
                  location.pathname === "/settings" ? "#FFFFFF" : "black"
                }
                /> */}
                <IoSettingsOutline />
              </Box>
              <Text textAlign="center" fontSize="sm">
                Settings
              </Text>
            </AccordionItemTrigger>
            <AccordionItemContent border="none">
              <ChakraLink
                href="/settings/organization"
                border="none"
                _focus={{ outline: "none" }}
                color={
                  location.pathname === "/settings/organization"
                    ? "#1C4EFF"
                    : "black"
                }
              >
                <Text textAlign="center" fontSize="sm">
                  Organization
                </Text>
              </ChakraLink>
            </AccordionItemContent>
            <AccordionItemContent border="none">
              <ChakraLink
                href="/settings/account"
                border="none"
                _focus={{ outline: "none" }}
                color={
                  location.pathname === "/settings/account"
                    ? "#1C4EFF"
                    : "black"
                }
              >
                <Text textAlign="center" fontSize="sm">
                  Account
                </Text>
              </ChakraLink>
            </AccordionItemContent>
            <AccordionItemContent border="none">
              <ChakraLink
                href="/settings/accesskey"
                border="none"
                _focus={{ outline: "none" }}
                color={
                  location.pathname === "/settings/accesskey"
                    ? "#1C4EFF"
                    : "black"
                }
              >
                <Text textAlign="center" fontSize="sm">
                  Access Keys
                </Text>
              </ChakraLink>
            </AccordionItemContent>
          </AccordionItem>
        </AccordionRoot>
      </VStack>
    </Box>
  );
};
