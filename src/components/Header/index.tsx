import { Box, Flex, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { IconButton } from "@chakra-ui/react";
import { MenuIcon } from "../../utils";
import { Button } from "../ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";
import { useAccount, useDisconnect } from "wagmi";

interface HeaderProps {
  showFlag: boolean;
  setShowFlag: any;
}

const shortenAddress = (address: string, chars: number) => {
  if (address) return `${address.slice(0, chars)}...${address.slice(-chars)}`;
};

const Header = ({ showFlag, setShowFlag }: HeaderProps) => {
  const { address } = useAccount();
  const { disconnectAsync } = useDisconnect();
  const location = useLocation();
  const pathName = location.pathname.replace("/", "");

  const onDisconnect = async () => {
    await disconnectAsync();
  };

  return (
    <Flex as="header" align="center" justify="space-between" paddingX="6">
      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        <IconButton
          width="40px"
          height="40px"
          _focus={{ outline: "none" }}
          _hover={{ bg: "#EDF2F7" }}
          border="none"
          bg="transparent"
          onClick={() => setShowFlag(!showFlag)}
        >
          <MenuIcon color={showFlag ? "#000000" : "#1c4eff"} />
        </IconButton>
        <Text fontSize="xs" color="#1c1c1c80">
          {pathName}
        </Text>
      </Box>
      <MenuRoot>
        <MenuTrigger asChild _focus={{ outline: "none" }}>
          <Button variant="outline" size="sm">
            {address ? shortenAddress(address, 5) : "U"}
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="disconnect" onClick={() => onDisconnect()}>
            Disconnect
          </MenuItem>
        </MenuContent>
      </MenuRoot>
    </Flex>
  );
};
export default Header;
