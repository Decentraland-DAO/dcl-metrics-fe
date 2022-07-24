import {
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
} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { FiLink } from "react-icons/fi"
import { fetchResult } from "../../../lib/hooks/fetch"
import { convertSeconds } from "../../../lib/hooks/utils"
import GridBox from "../GridBox"
import Loading from "../Loading"
import Pagination from "../Pagination"

const TopUsersTimeSpentComponent2 = ({ box, isLoading, setIsLoading }) => {
  const dataArr = {
    "0xa3621b00120fa3841beae8194b95156cbf07c7e8": 209173,
    "0xd01fba641d1bb4b3ddbad909b2db0d2ef35fa284": 168723,
    "0xbac5a5aaa197ec9d596c8c3c2f04a48d4c456d64": 165690,
    "0x9aff609d2205c3ad6c3c6e712c7dc1e0470f9438": 161184,
    "0x455c5da86fb5b55f1fb7aca4cc5fdad450cfa137": 157798,
    "0x46c273aa2067964e8a2768c3b89068974f2ba13d": 157797,
    "0x1a0ad114aafcdea1aa0ec8f760ad103cba4c818a": 144127,
    "0x73ba4c06de454dc7bc1b00b4f9aae00c0b8866c2": 130076,
    "0x5a1e0d4c19e3cb275ca8b9e42ab532ce2441a346": 128076,
    "0x5df4345c04826ab6dab380f1906d3fb3988ceb60": 126959,
    "0xaae62de95862ec8bcb8187685cfc4d4c11adb9ad": 121459,
    "0x3d9ade456e6636d7551696f71b250a2ed7209fda": 85041,
    "0x0df2e1ecf1b1baf817b4698001cd276be8b4594b": 84989,
    "0x7796a00a9c43b24ea84e73bdbc3813e17921e702": 84888,
    "0x60e7357de5ec8c3b07f8efb3a8c1325811eb7db0": 84738,
    "0xef8d977d01ff6b866f2e35a84faecbc01cfc7dc9": 84508,
    "0x8e85898966bcf2934d8ffbd38a4c7edd6a1e5241": 84485,
    "0xbac8a9289c6f3af853e1e941c7617727904d0774": 84332,
    "0xfa3de40f90f89c7fd45ff85e55ab910664fde922": 84248,
    "0xeff5ad0632e7020133e41e77219d25eadf9daab9": 84206,
    "0x86c54bdf7a23c1c5e844fc6b621dc603327b776b": 84156,
    "0x6eb828a35325fae552a9451074cf4acab0bdff72": 84053,
    "0xb2f4ab49b866f0f206ebdd888e218d72368f1ba3": 84053,
    "0xae793d544690fe916be8e4fa879a1253b30334e9": 83889,
    "0xd2d00fdeaae98399e1f982124799a5cedde5963c": 83749,
    "0x7d2d9efcc66bc09a4d7605ebd655ea8228974f45": 83699,
    "0x8136c16e5ccbe225edb33f5ced6406e269364dee": 83626,
    "0xc7a80b060fbe8182c1675ec13a1b6fa700a8957d": 83464,
    "0x7f65e775195db43551e6d1149e0e08e5df598f0c": 83358,
    "0x7666bae30169a91e889fbbfa98b31b729e0fc763": 83293,
    "0xefb4d7e68ff65171cb6df764ab6839c99241ea76": 83179,
    "0x996beba01e9e36c9e7917212a8d2764a98b00acf": 83168,
    "0xfad5c786dc8df99d1cacabd3936066a9d4eb0e22": 83168,
    "0x0730c787985ae261f9a9fa0bdc0839b1836f9edd": 83168,
    "0x916cf54f752b9047ed4487ed9853f39070a4dd07": 83121,
    "0xcab1d12a6228da35980663ffd2b120985512e4e6": 83104,
    "0xf972308a51d71e28d0749701f77cb4c0c32c60da": 83066,
    "0xeb21bd50688a03e8eefe68eee232c3d93fd3aa02": 82944,
    "0x803f25c1d4a80f9fd20a514384eef997d54e795e": 82872,
    "0x487d60311588c00f8885ab9c4d0a14c999c53bae": 82802,
    "0xb4bcfaa6c7940d897511cdd95899b0e0a2f1301f": 82798,
    "0x4bd3548d6a0f1cb969a2688887104aa7889943b0": 82678,
    "0xfc3c07f5ed04ca681b33bfa4243c2b860aa6f892": 82648,
    "0x292040783818d2c52831fa78ea06ee3223c7b7f7": 82640,
    "0x2b53830a523decc4eeda5accec1754ee20dfe504": 82490,
    "0xf1929c263daa1d5c0835f92e330e80d497837a2c": 82490,
    "0x858bd24baffaa54e9da114f77441a8b4a9981a1d": 82420,
    "0x660158986ebc50785dcc16981c18fca577ae64b5": 82411,
    "0xa89d82bd305726b15700d6d87c6cd11bc99c98fa": 82046,
    "0xfb1b60d34e9d40b18518c72cda7bcf5ee6173dba": 57378,
    "0x4d47306c5dd5a1ff574675be707ed80bb1f5dad3": 56999,
    "0x4f53acece848f0c4998676c4c8978975c713289b": 55794,
    "0xc676c6e3a27b781e1457a603c40a3c0abe27406e": 55647,
    "0x020eb9965b9e1b30231c5c46d949e40f2f743f4c": 55523,
    "0xf6c97b2686084dc92e3bf1dae9384a4c8b69e543": 55342,
    "0x5f7d1b375c9e4140972e9b01c00b22adeced891a": 54743,
    "0x7cf260863b10196122cfd9f900fe78da8fa2f958": 54565,
    "0xe170fd37b085eac916657b612f28d4d59c38ebdb": 54210,
    "0x5b8c9b17b6435ba390d1a6f5e141f2a36520c767": 53832,
    "0x5b8c9b17b6435ba390d1a6f5e141f2a36520c761": 53832,
  }

  const [timeSpent, setTimeSpent] = useState([])
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const pages = Math.ceil(Object.keys(dataArr).length / rowsPerPage)

  // // TODO fix static fetching
  // useEffect(() => {
  //   setIsLoading(true)
  //   // const url = "https://dclund.herokuapp.com/api/user_stats/time_spent/daily"
  //   const staticUrl = "time_spent.json"
  //   fetchResult(staticUrl).then((data) => {
  //     setTimeSpent(data)
  //   })
  //   setIsLoading(false)
  //   // eslint-disable-next-line
  // }, [])

  const TableComponent = () => {
    return (
      <TableContainer m="2" mt="12" whiteSpace="nowrap">
        <Table variant="simple" size="sm" overflowX="scroll">
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Address</Th>
              <Th>Time Spent</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.keys(dataArr)
              .slice((page - 1) * 10, page * 10)
              .map((item, index) => {
                return (
                  <Tr
                    key={index}
                    style={{
                      background: `linear-gradient(90deg, #61CDBB50 ${
                        // FIXME convert to 100&
                        dataArr[item] / 2000
                      }%, #ffffff 0)`,
                    }}
                  >
                    <Td>
                      <Text color="gray.500">
                        {index + 1 + page * rowsPerPage - rowsPerPage}
                      </Text>
                    </Td>
                    <Td>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://etherscan.io/address/${item}`}
                      >
                        <Text color="gray.600">
                          {item + " "}
                          <Box display="inline-block">
                            <FiLink size="10" />
                          </Box>
                        </Text>
                      </a>
                    </Td>
                    <Td>{convertSeconds(dataArr[item])}</Td>
                  </Tr>
                )
              })}
          </Tbody>
        </Table>
        <Center>
          <Pagination page={page} pages={pages} setPage={setPage} />
        </Center>
      </TableContainer>
    )
  }

  return (
    <GridBox box={box}>
      {!isLoading ? (
        <>
          <Box position="absolute" m="2" ml="4">
            <Text fontSize="xl">
              <b>Top Address Time Spent</b>
            </Text>
          </Box>
          <TableComponent />
        </>
      ) : (
        <Loading />
      )}
    </GridBox>
  )
}

export default TopUsersTimeSpentComponent2
