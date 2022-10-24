// @ts-nocheck
import {
  Flex,
  Box,
  Center,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react"
import Loading from "../../Loading"
import { useMemo, useState } from "react"
import { useTable, useSortBy, usePagination } from "react-table"
import TableMap from "../partials/TableMap"
import SceneDateRange from "../daterange/SceneDateRange"
import GridBox from "../../GridBox"
import TruncateName from "../partials/TruncatedName"

const ScenesLogout = ({ res, isSceneLoading }) => {
  const box = {
    // h: "630",
    h: "auto",
    w: "100%",
    bg: useColorModeValue("white", "gray.800"),
  }

  const [dateRange, setDateRange] = useState("yesterday")
  const data = Object.entries(res)
  const dataArr = []
  const dateRangeArr = []
  for (const [key] of Object.entries(data)) {
    dateRangeArr.push(data[key][0])
  }
  const findDateRange = (arg) => {
    for (const [key] of Object.entries(dateRangeArr)) {
      if (dateRangeArr[key] === arg) {
        return data[key][1]
      }
    }
  }
  const selectedData = findDateRange(dateRange).logouts
  for (const [key, value] of Object.entries(selectedData)) {
    dataArr.push({
      name: key,
      mapUrl: value.map_url,
      logouts: value.total_logouts,
    })
  }
  dataArr.sort((a, b) => b.logouts - a.logouts)

  const COLUMNS = [
    {
      Header: "Scene Map",
      accessor: "mapUrl",
      disableSortBy: true,
      Cell: ({ value }) => {
        return <TableMap mapUrl={value + "&size=9"} />
      },
    },
    {
      Header: "Name",
      accessor: "name",
      disableSortBy: true,
      Cell: ({ value }) => {
        return <Text>{TruncateName(value)}</Text>
      },
    },
    {
      Header: "Logouts",
      accessor: "logouts",
      Cell: ({ value }) => {
        return (
          <Text as="kbd" fontWeight="bold">
            {Number(value)}
          </Text>
        )
      },
    },
  ]

  // eslint-disable-next-line
  const columns = useMemo(() => COLUMNS, [])
  // eslint-disable-next-line
  const memoizedData = useMemo(() => dataArr, [dateRange])

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    useTable(
      {
        columns: columns,
        data: memoizedData,
        initialState: {
          pageSize: 5,
        },
      },
      useSortBy,
      usePagination
    )

  const TableComponent = () => {
    return (
      <>
        <TableContainer mt="2" borderColor="gray.400" whiteSpace="nowrap">
          <Table
            {...getTableProps()}
            overflowX="hidden"
            colorScheme="gray"
            size="sm"
            // height="520"
            variant="striped"
          >
            <Thead>
              {headerGroups.map((headerGroup, i) => (
                <Tr {...headerGroup.getHeaderGroupProps()} key={i}>
                  {headerGroup.headers.map((column, j) => (
                    <Th
                      key={j}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row)
                return (
                  <Tr {...row.getRowProps()} key={i}>
                    {row.cells.map((cell, j) => {
                      return (
                        <Td key={j} {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </Td>
                      )
                    })}
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </>
    )
  }

  return (
    <>
      <GridBox box={box}>
        <Flex pos="relative" mt="4" mx="5">
          <Flex w="100%">
            <Box>
              <Text fontSize="2xl">
                <b>Scenes with Most Logouts</b>
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Box ml="6">
          <Text color="gray.500" fontSize="sm">
            Scenes with the most logouts in the last period
          </Text>
        </Box>
        <SceneDateRange dateRange={dateRange} setDateRange={setDateRange} />
        {dataArr.length > 0 && !isSceneLoading && (
          <Box mb="8" mx="4">
            <TableComponent />
          </Box>
        )}
        {dataArr.length === 0 && !isSceneLoading && (
          <Center h="450px">Not Available</Center>
        )}
        {isSceneLoading && (
          <Center h="100%">
            <Loading />
          </Center>
        )}
      </GridBox>
    </>
  )
}

export default ScenesLogout
