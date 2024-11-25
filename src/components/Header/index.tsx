import { Box, Flex, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { IconButton } from "@chakra-ui/react";
import { MenuIcon } from "../../utils";
import { Button } from "../ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";

interface HeaderProps {
  showFlag: boolean;
  setShowFlag: any;
}
const Header = ({ showFlag, setShowFlag }: HeaderProps) => {
  const location = useLocation();
  const pathName = location.pathname.replace("/", "");
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
            Open
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="new-txt">New Text File</MenuItem>
          <MenuItem value="new-file">Sign Out</MenuItem>
        </MenuContent>
      </MenuRoot>
    </Flex>
  );
};
export default Header;
