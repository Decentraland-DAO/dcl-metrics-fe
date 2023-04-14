/* eslint-disable react-hooks/rules-of-hooks */
// @ts-nocheck
import {
  Button,
  Center,
  Flex,
  Text,
  Box,
  Table,
  Tr,
  Td,
  Tbody,
  useToast,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react"
import SceneProfilePicture from "./SceneProfilePicture"
import TableLink from "../TableLink"
import TruncateName from "../TruncatedName"
import moment from "moment"
import momentDurationFormatSetup from "moment-duration-format"
import ToolTip from "../../../../layout/local/ToolTip"
import Link from "next/link"

const SceneMarathonUsers = ({ data }) => {
  momentDurationFormatSetup(moment)

  const toast = useToast()
  const handleToast = async (value) => {
    try {
      await navigator.clipboard.writeText(value)
    } catch (e) {
      console.log(e)
    } finally {
      toast({
        description: "Address has been copied to the clipboard.",
        duration: 4000,
        isClosable: true,
        position: "bottom-right",
        status: "success",
        variant: "subtle",
      })
    }
  }

  const dataArr = Object.entries(data)

  const addressWidth = useBreakpointValue({
    base: 25,
    sm: 25,
    md: 35,
    lg: 50,
  })

  const MarathonUserTable = () => {
    const responsiveStr = useBreakpointValue({
      xs: 5,
      sm: 5,
      md: 20,
      lg: 20,
      xl: 30,
      base: 10,
    })
    const truncateName = (name: string) => {
      const nameLength = responsiveStr
      if (name && name.length > nameLength) {
        return name.slice(0, nameLength) + ".."
      }
      return name
    }
    return (
      <Box
        overflowY="hidden"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.600")}
        borderRadius="xl"
        shadow="md"
      >
        <Table h="480px" colorScheme="blackAlpha" size="sm" variant="striped">
          <Tbody>
            {dataArr.map((item, index) => (
              <Tr key={index}>
                <Td>
                  <Flex w="50px" h="30px">
                    <Center w="10px">{index + 1}</Center>
                    <Box display="inline-block" ml="4">
                      <SceneProfilePicture
                        address={item[1].avatar_url}
                        verified={item[1].verified_user}
                        guest={item[1].guest_user}
                      />
                    </Box>
                  </Flex>
                </Td>
                <Td>
                  <Link href={`/users/${item[1].address}`} rel="_blank">
                    <Text fontWeight="bold">
                      {item[1].name ? TruncateName(item[1].name) : "N/A"}
                    </Text>
                  </Link>
                </Td>
                <Td
                  onClick={() =>
                    handleToast(item[1].address ? item[1].address : "")
                  }
                >
                  <Button size="xs" variant="link">
                    <Text
                      as="kbd"
                      _hover={{ color: "gray.600", cursor: "pointer" }}
                    >
                      {item[1].address ? truncateName(item[1].address) : "N/A"}
                    </Text>
                  </Button>
                </Td>
                <Td isNumeric>
                  <Text wordBreak="keep-all">
                    {moment
                      .duration(item[1].time_spent, "minutes")
                      .format("dd:hh:mm:ss")}
                  </Text>
                </Td>
                <Td>
                  <TableLink address={item[1].address ? item[1].address : ""} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    )
  }
  return (
    <Box
      h="520px"
      bg={useColorModeValue("gray.100", "gray.700")}
      border="2px solid"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      borderRadius="xl"
      shadow="md"
    >
      <ToolTip label="This table shows the top 10 users who have spent the most time in the scene">
        <Box p="4">
          <MarathonUserTable />
        </Box>
      </ToolTip>
    </Box>
  )
}

export default SceneMarathonUsers
