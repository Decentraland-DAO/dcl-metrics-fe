import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { fetchResult } from "../../../lib/hooks/fetch"
import GridBox from "../GridBox"
import staticData from "../../../../public/data/marathon-users.json"
import Loading from "../Loading"
import PopupModal from "../PopupModal"
import BarChartComponent from "../../chart/BarChartComponent"

const RecentMarathonUsers = ({ isLoading, res }) => {
  const box = {
    h: "600",
    w: "100%",
    bg: "white",
  }
  const data = Object.entries(res)

  const dateArr = []
  data.forEach(([key, value]) => {
    dateArr.push(key)
  })
  const valueArr = []
  data.forEach(([key, value]) => {
    valueArr.push(value)
  })

  const [currentDate, setCurrentDate] = useState(valueArr.length - 1)

  const DateSelector = () => {
    return (
      <Box w="100">
        <Select
          variant="flushed"
          size="sm"
          onChange={(e) => {
            setCurrentDate(Number(e.target.value))
          }}
          value={currentDate}
        >
          {dateArr.map((date, index) => {
            return (
              <option key={index} value={index}>
                {date}
              </option>
            )
          })}
        </Select>
      </Box>
    )
  }

  return (
    <GridBox box={box}>
      <Box position="relative" mt="4">
        <Box>
          <Box>
            <Text fontSize="xl" mb="1" ml="5">
              <b>Recent Marathon Users</b>
              <Text fontSize="sm" color="gray.500">
                Users with most online time yesterday
              </Text>
            </Text>
          </Box>
        </Box>

        {data.length > 0 && !isLoading ? (
          <Box>
            <BarChartComponent data={valueArr[valueArr.length - 1]} />
            {/* <Box mx="6">
              <DateSelector />
            </Box> */}
          </Box>
        ) : (
          <Center h={box.h}>
            <Loading />
          </Center>
        )}
      </Box>
    </GridBox>
  )
}

export default RecentMarathonUsers
