import {
  Text,
  Box,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Td,
  Th,
  Tr,
  Center,
  Button,
  Tfoot,
} from "@chakra-ui/react"
import { useMemo } from "react"
import { useTable, useSortBy } from "react-table"
import staticMarathonUsers from "../../../../../public/data/marathon-users.json"
import { COLUMNS } from "./Columns"

export const HookTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const memoizedData = useMemo(() => staticMarathonUsers, [])

  const data = Object.entries(memoizedData)
  const dataArr = []
  for (let i = 0; i < data.length; i++) {
    //  @ts-ignore
    for (let j = 0; j < data[i][1].length; j++) {
      dataArr.push({
        date: data[i][0],
        timeSpent: data[i][1][j].time_spent,
        address: data[i][1][j].address,
      })
    }
  }

  // no pagination
  const tempData = data[0][1]

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data: tempData,
    },
    useSortBy
  )

  return (
    <TableContainer mx="4" whiteSpace="nowrap">
      <Table
        {...getTableProps()}
        size="sm"
        variant="simple"
        overflowX="hidden"
        maxW="100%"
        height="490px"
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
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                  </span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
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
  )
}
