// @ts-nocheck
import {
  Box,
  Text,
  useColorModeValue,
  useBreakpointValue,
  Center,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"
import { useMemo, useState } from "react"
import { useTable, useSortBy, usePagination } from "react-table"
import GridBox from "../../GridBox"
import Loading from "../../Loading"
import SceneDateRange from "../daterange/SceneDateRange"
import TableMap from "../partials/TableMap"
import TruncateName from "../partials/TruncatedName"

const TopScenesVisitors = ({ res, isSceneLoading }) => {
  const box = {
    h: "auto",
    w: "100%",
    bg: useColorModeValue("white", "gray.800"),
  }

  // 0 yesterday 1 last_week 2 last_month 3 last_quarter
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
  const selectedData = findDateRange(dateRange).visitors
  for (const [key, value] of Object.entries(selectedData)) {
    dataArr.push({
      name: key,
      mapUrl: value.map_url,
      unique_address: value.unique_addresses,
    })
  }

  dataArr.sort((a, b) => b.unique_address - a.unique_address)

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
      Header: "Visit Count",
      accessor: "unique_address",
      width: 200,
      Cell: ({ value }) => {
        return (
          <Text as="kbd" fontWeight="bold">
            {value}
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
                <b>Scenes with Most Unique Visitors</b>
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Box ml="6">
          <Text color="gray.500" fontSize="sm">
            Scenes with the most unique visits in the last period
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

export default TopScenesVisitors