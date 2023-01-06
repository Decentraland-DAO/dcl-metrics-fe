import { Box, Text, Flex, Spacer, color } from "@chakra-ui/react"
import AvgStat from "../../local/stats/partials/AvgStat"

const BoxTitle = ({ name, date, avgData, slicedData, color }) => {
  return (
    <Flex direction={["column", "column", "row", "row"]}>
      <Box>
        <Flex direction="column" mt="4" mx="5">
          <Box>
            <Text fontSize="2xl">
              <b>{name}</b>
            </Text>
          </Box>
          <Box>
            <Text color="gray.500" fontSize="sm">
              {name} from {date.first} to {date.last}
            </Text>
          </Box>
        </Flex>
      </Box>
      <Spacer />
      <Box mt={[2, 0, 4, 4]} mr="4" ml="5">
        <AvgStat avgData={avgData} data={slicedData} color={color} />
      </Box>
    </Flex>
  )
}

export default BoxTitle
