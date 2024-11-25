import { Box, Button, Text, Flex, Input } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import Header from "../components/Header";
import { useState } from "react";
import { Table } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../components/ui/pagination";

export const Billing = () => {
  const [showFlag, setShowFlag] = useState<boolean>(false);
  const [balance, setBalance] = useState(0);
  const [creditAmount, setCreditAmount] = useState("");

  const handleAddCredits = () => {
    const amount = parseFloat(creditAmount);
    if (!isNaN(amount)) {
      setBalance(balance + amount);
      setCreditAmount(""); // Clear input after adding credits
    }
  };

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
          overflow="auto"
        >
          <Text fontSize="2xl" fontWeight="bold">
            Billing
          </Text>
          <Text fontSize="lg">Balance</Text>
          <Text fontSize="3xl" fontWeight="bold">
            {balance.toFixed(2)}
          </Text>

          <Text fontSize="lg">Add Credits</Text>
          <Flex gap={2} mb={4}>
            <Button
              onClick={() => setBalance(balance + 25)}
              bg="#EDF2F7"
              color="#000000"
              border="1px solid #1c4eff"
            >
              $25
            </Button>
            <Button
              onClick={() => setBalance(balance + 50)}
              bg="#EDF2F7"
              color="#000000"
              border="1px solid #1c4eff"
            >
              $50
            </Button>
            <Button
              onClick={() => setBalance(balance + 100)}
              bg="#EDF2F7"
              color="#000000"
              border="1px solid #1c4eff"
            >
              $100
            </Button>
            <Input
              placeholder="$ other"
              value={creditAmount}
              onChange={(e) => setCreditAmount(e.target.value)}
              width="100px"
              bg="#EDF2F7"
              color="#000000"
              border="1px solid #1c4eff"
            />
            <Button
              onClick={handleAddCredits}
              colorScheme="blue"
              bg="#3F51F1"
              boxShadow="rgba(155, 155, 155, 0.25) 0px 6px 6px 0px"
            >
              Pay Now
            </Button>
          </Flex>

          <Text fontSize="lg" fontWeight="bold">
            Top Up Transactions
          </Text>
          <Table.Root size="sm">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Data</Table.ColumnHeader>
                <Table.ColumnHeader>Amount</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end">
                  Currency
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body></Table.Body>
          </Table.Root>

          <PaginationRoot
            count={20}
            pageSize={2}
            defaultPage={1}
            display="flex"
            width="full"
            justifyContent="center"
          >
            <HStack>
              <PaginationPrevTrigger />
              <PaginationItems />
              <PaginationNextTrigger />
            </HStack>
          </PaginationRoot>
          {/* Add transaction data here */}

          <Text fontSize="lg" fontWeight="bold">
            Billing History
          </Text>
          <Table.Root size="sm">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Data</Table.ColumnHeader>
                <Table.ColumnHeader>Amount</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end">
                  Currency
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body></Table.Body>
          </Table.Root>

          <PaginationRoot
            count={20}
            pageSize={2}
            defaultPage={1}
            display="flex"
            width="full"
            justifyContent="center"
          >
            <HStack>
              <PaginationPrevTrigger />
              <PaginationItems />
              <PaginationNextTrigger />
            </HStack>
          </PaginationRoot>
        </Box>
      </Box>
    </Box>
  );
};
