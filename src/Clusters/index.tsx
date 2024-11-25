import { Box, Button, Text, Image, Grid } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Table } from "@chakra-ui/react";
import { Checkbox } from "../components/ui/checkbox";
import { ProgressBar, ProgressRoot } from "../components/ui/progress";

import { createListCollection } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../components/ui/select";

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

export const Clusters = () => {
  const [showFlag, setShowFlag] = useState<boolean>(false);
  const [items, setItems] = useState<any>([]);
  const [selectedFramework, setSelectedFramework] = useState<string[]>([]);
  const [selectedGPUCount, setSelectedGPUCount] = useState<string[]>([]);
  const [progress, setProgress] = useState<number>(25);

  const handleNext = () => {
    if (selectedFramework || selectedGPUCount) {
      setProgress((prev) => Math.min(prev + 25, 100));
    }
  };

  const frameworks = createListCollection({
    items: [
      { label: "Nvidia H100s", value: "nvidia_h100" },
      { label: "Nvidia A100s", value: "nvidia_a100" },
    ],
  });

  useEffect(() => {
    setItems([]);
  }, []);
  const frameworks_gpu = createListCollection({
    items: [
      { label: "16-32", value: "16_32" },
      { label: "32-64", value: "32_64" },
      { label: "64-128", value: "64_128" },
      { label: "128-256", value: "128_256" },
      { label: "256-512", value: "256_512" },
      { label: "512+", value: "512" },
    ],
  });

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
          alignItems="center"
          spaceY={6}
          p={6}
          rounded="3xl"
        >
          <Box display="flex" justifyContent="space-between" width="full">
            <Text fontWeight="bold" fontSize="xl">
              Cluster
            </Text>

            <DialogRoot>
              <DialogTrigger asChild>
                <Button bg="#1C4EFF" _focus={{ outline: "none" }}>
                  Request
                </Button>
              </DialogTrigger>
              <DialogContent style={{ zIndex: 100 }}>
                <DialogHeader
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                >
                  <DialogTitle>Request Cluster</DialogTitle>
                </DialogHeader>
                <DialogBody spaceY={4}>
                  <ProgressRoot
                    size="sm"
                    marginBottom="1rem"
                    defaultValue={progress}
                    value={progress}
                  >
                    <ProgressBar />
                  </ProgressRoot>
                  {progress <= 25 && (
                    <Box spaceY={2}>
                      <Text>Select Instance type</Text>
                      <SelectRoot
                        collection={frameworks}
                        size="sm"
                        width="full"
                        value={selectedFramework}
                        onValueChange={(e) => setSelectedFramework(e.value)}
                      >
                        <SelectLabel>
                          Which Types of GPUs Are You Interested In*
                        </SelectLabel>
                        <SelectTrigger>
                          <SelectValueText placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent zIndex={9000} width="full">
                          {frameworks.items.map((movie) => (
                            <SelectItem item={movie} key={movie.value}>
                              {movie.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </SelectRoot>
                      <SelectRoot
                        collection={frameworks_gpu}
                        size="sm"
                        width="full"
                        value={selectedGPUCount}
                        onValueChange={(e) => setSelectedGPUCount(e.value)}
                      >
                        <SelectLabel>
                          How many GPUs are you looking for*
                        </SelectLabel>
                        <SelectTrigger>
                          <SelectValueText placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent zIndex={9000}>
                          {frameworks_gpu.items.map((movie) => (
                            <SelectItem item={movie} key={movie.value}>
                              {movie.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </SelectRoot>
                    </Box>
                  )}
                  {progress > 26 && progress <= 50 && (
                    <Box spaceY={2}>
                      <Text fontSize="md">Rental Period</Text>
                      <Text fontSize="sm">
                        For how long do you want to rent the cluster?
                      </Text>
                      <Grid
                        templateColumns={{
                          base: "repeat(1, 1fr)",
                          md: "repeat(2, 1fr)",
                        }}
                        gap={4}
                        mt={4}
                      >
                        <Button variant="outline">On Demand</Button>
                        <Button variant="outline">~7 Days</Button>
                        <Button variant="outline">~14 Days</Button>
                        <Button variant="outline">~1 Month</Button>
                        <Button variant="outline">~3 Months</Button>
                        <Button variant="outline">~1 Year</Button>
                        <Button variant="outline">~2 Years</Button>
                      </Grid>
                    </Box>
                  )}
                  {progress > 51 && progress <= 75 && (
                    <Box spaceY={2}>
                      <Text fontSize="md">Delivery Time</Text>
                      <Text fontSize="sm">
                        When do you want the cluster to be ready?
                      </Text>
                      <Grid
                        templateColumns={{
                          base: "repeat(1, 1fr)",
                          md: "repeat(2, 1fr)",
                        }}
                        gap={4}
                        mt={4}
                      >
                        <Button variant="outline">Next 7 Days</Button>
                        <Button variant="outline">ASAP</Button>
                        <Button variant="outline">In 3 Months</Button>
                        <Button variant="outline">Next 3-12 months</Button>
                        <Button variant="outline">Next 14 Days</Button>
                        <Button variant="outline">In 2 Months</Button>
                        <Button variant="outline">In 1 Month</Button>
                      </Grid>
                    </Box>
                  )}
                  {progress > 76 && progress <= 100 && (
                    <Box spaceY={2}>
                      <Text fontSize="md">Confirmation</Text>
                      <Text fontSize="sm">
                        When do you want the cluster to be ready?
                      </Text>
                      <Box
                        mt={4}
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                      >
                        <Text fontSize="sm" fontWeight="bold">
                          GPUs
                        </Text>
                        <Text fontSize="sm">Nvidia H100s</Text>
                      </Box>

                      <Box
                        mt={2}
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                      >
                        <Text fontSize="sm" fontWeight="bold">
                          Quantity
                        </Text>
                        <Text fontSize="sm">32-64</Text>
                      </Box>

                      <Box
                        mt={2}
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                      >
                        <Text fontSize="sm" fontWeight="bold">
                          Rental Period
                        </Text>
                        <Text fontSize="sm">On Demand</Text>
                      </Box>

                      <Box
                        mt={2}
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                      >
                        <Text fontSize="sm" fontWeight="bold">
                          When
                        </Text>
                        <Text fontSize="sm">Next 7 Days</Text>
                      </Box>
                    </Box>
                  )}
                </DialogBody>
                <DialogFooter>
                  <DialogActionTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogActionTrigger>
                  <Button
                    bg="#1A49F0"
                    onClick={handleNext}
                    disabled={!selectedFramework && !selectedGPUCount}
                  >
                    Next
                  </Button>
                </DialogFooter>
                <DialogCloseTrigger />
              </DialogContent>
            </DialogRoot>
          </Box>
          <Table.Root size="sm">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>
                  <Checkbox fontSize="sm" color="#1c1c1c80">
                    Name
                  </Checkbox>
                </Table.ColumnHeader>
                <Table.ColumnHeader>
                  <Text fontSize="sm" color="#1c1c1c80">
                    Region
                  </Text>
                </Table.ColumnHeader>
                <Table.ColumnHeader>
                  <Text fontSize="sm" color="#1c1c1c80">
                    Nodes
                  </Text>
                </Table.ColumnHeader>
                <Table.ColumnHeader>
                  <Text fontSize="sm" color="#1c1c1c80">
                    CPUs
                  </Text>
                </Table.ColumnHeader>
                <Table.ColumnHeader>
                  <Text fontSize="sm" color="#1c1c1c80">
                    Status
                  </Text>
                </Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end">
                  <Text fontSize="sm" color="#1c1c1c80">
                    Cloud IDE
                  </Text>
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {items.length > 1 &&
                items.map((item: any) => (
                  <Table.Row key={item.id}>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.category}</Table.Cell>
                    <Table.Cell textAlign="end">{item.price}</Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table.Root>
          {items.length === 0 && (
            <Box
              position="relative"
              width="full"
              paddingTop={30}
              overflow="hidden"
              paddingBottom={20}
            >
              <Image
                src="./assets/empty_list_bg.png"
                zIndex={1}
                position="absolute"
                top={0}
                left="50%"
                transform="translate(-50%)"
                width="1200px"
                maxWidth="1200px"
              />
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                gap="2rem"
                maxWidth="595px"
                marginInline="auto"
                position="relative"
                zIndex={10}
              >
                <Image src="./assets/empty_state.png"></Image>
                <Text>No records found</Text>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
