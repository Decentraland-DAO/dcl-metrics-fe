import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
} from "@chakra-ui/react"
import moment from "moment"

const TooltipTable = ({ date, count, degraded }) => {
  return (
    <TableContainer>
      <Table size="sm" variant="simple">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th isNumeric>Count</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{moment(date).format("YYYY MMMM Do")}</Td>
            <Td
              color={degraded && "red"}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              isNumeric
            >
              <Text as="kbd">
                <b>
                  {count} {degraded && "(Degraded)"}
                </b>
              </Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default TooltipTable
