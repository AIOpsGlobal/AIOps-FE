import { Box, Text, Flex, Input } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import Header from "../components/Header";
import { useState } from "react";
import { Table } from "@chakra-ui/react";

export const Organization = () => {
  const [showFlag, setShowFlag] = useState<boolean>(false);

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
        >
          <Text fontSize="2xl" fontWeight="bold">
            Organization settings
          </Text>

          <Text fontSize="lg" fontWeight="bold" mt={4}>
            General
          </Text>
          <Flex width="full" mb={4}>
            <Box flex="1" mr={4}>
              <Text>Organization ID</Text>
              <Input value="251501367707963392" readOnly />
            </Box>
            <Box flex="1" mr={4}>
              <Text>Organization Name</Text>
              <Input value="-" readOnly />
            </Box>
            <Box flex="1">
              <Text>Create Time</Text>
              <Input value="2024-11-24" readOnly />
            </Box>
          </Flex>

          {/* Members Section */}
          <Text fontSize="lg" fontWeight="bold" mt={4}>
            Members
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

          {/* Service Quota Section */}
          <Text fontSize="lg" fontWeight="bold" mt={4}>
            Service Quota
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
        </Box>
      </Box>
    </Box>
  );
};
