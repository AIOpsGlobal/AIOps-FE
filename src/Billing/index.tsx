import { Box, Button, Text, Flex } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Table } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../components/ui/pagination";
import {
  BaseError,
  useAccount,
  usePublicClient,
  useWalletClient,
  useWriteContract,
} from "wagmi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { PAYMENT_CONTRACT, TOKEN_CONTRACT } from "../web3/constants";
import { PaymentABI, TokenABI } from "../web3/abi";
import { parseEther } from "viem";

export const Billing = () => {
  const navigate = useNavigate();
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();
  const { writeContractAsync } = useWriteContract();
  const { address } = useAccount();
  const [showFlag, setShowFlag] = useState<boolean>(false);
  const [balance, setBalance] = useState(0);
  const [user, setUser] = useState<any>(null);
  const [billings, setBillings] = useState<any>(null);

  console.log({ user, billings });

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.post("https://intelliphy-api.onrender.com/api/users", {
        address,
      });

      setUser(data.user);
      setBillings(data.billings);
    };

    if (address) {
      getUser();
    }
  }, [address]);

  const handleAddCredits = async () => {
    try {
      if (!balance || !publicClient || !address || !walletClient) {
        toast.error("Please check your wallet connection");
        return;
      }

      let hash;

      let allowance = await publicClient?.readContract({
        address: TOKEN_CONTRACT,
        abi: TokenABI,
        functionName: "allowance",
        args: [address, PAYMENT_CONTRACT],
      });

      console.log(allowance, parseEther(balance.toString()));

      if (BigInt(Number(allowance)) < parseEther(balance.toString())) {
        hash = await writeContractAsync({
          address: TOKEN_CONTRACT,
          abi: TokenABI,
          functionName: "approve",
          args: [PAYMENT_CONTRACT, parseEther(balance.toString())],
        });

        await publicClient?.waitForTransactionReceipt({ hash });
      }

      allowance = await publicClient?.readContract({
        address: TOKEN_CONTRACT,
        abi: TokenABI,
        functionName: "allowance",
        args: [address, PAYMENT_CONTRACT],
      });

      if (BigInt(Number(allowance)) >= parseEther(balance.toString())) {
        hash = await writeContractAsync({
          address: PAYMENT_CONTRACT,
          abi: PaymentABI,
          functionName: "deposit",
          args: [parseEther(balance.toString())],
        });

        await publicClient?.waitForTransactionReceipt({ hash });

        // Save billing
        const { data } = await axios.post("https://intelliphy-api.onrender.com/api/billing", {
          address,
          amount: balance,
        });
        setBillings(data.billings);
        setUser(data.user);
        toast.success("Deposit Success!");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error instanceof BaseError ? error.shortMessage : JSON.stringify(error)
      );
    }
  };

  if (address)
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
              {user ? Number(user.balance).toFixed(2) : "0.00"}
            </Text>

            <Text fontSize="lg">Add Credits</Text>
            <Flex gap={2} mb={4}>
              <Button
                onClick={() => setBalance(25)}
                bg="#EDF2F7"
                color="#000000"
                border="1px solid #1c4eff"
              >
                $25
              </Button>
              <Button
                onClick={() => setBalance(50)}
                bg="#EDF2F7"
                color="#000000"
                border="1px solid #1c4eff"
              >
                $50
              </Button>
              <Button
                onClick={() => setBalance(100)}
                bg="#EDF2F7"
                color="#000000"
                border="1px solid #1c4eff"
              >
                $100
              </Button>
              {/* <Input
                placeholder="$ other"
                value={creditAmount}
                onChange={(e) => setCreditAmount(e.target.value)}
                width="100px"
                bg="#EDF2F7"
                color="#000000"
                border="1px solid #1c4eff"
              /> */}
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
                  <Table.ColumnHeader>Date</Table.ColumnHeader>
                  <Table.ColumnHeader>Amount</Table.ColumnHeader>
                  <Table.ColumnHeader textAlign="end">
                    Currency
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {billings &&
                  billings.length > 0 &&
                  billings.map((billing: any, idx: number) => (
                    <Table.Row key={idx}>
                      <Table.Cell textAlign="start">
                        {billing.created_at}
                      </Table.Cell>
                      <Table.Cell textAlign="start">
                        {billing.amount}
                      </Table.Cell>
                      <Table.Cell textAlign="end">USDT</Table.Cell>
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table.Root>

            <PaginationRoot
              count={billings && billings.length > 0 ? billings.length : 0}
              pageSize={5}
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

            {/* <Text fontSize="lg" fontWeight="bold">
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
            </PaginationRoot> */}
          </Box>
        </Box>
      </Box>
    );
  else navigate("/");
};
