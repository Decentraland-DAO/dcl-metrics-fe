import { useBreakpointValue, Grid, useColorModeValue } from "@chakra-ui/react"
import Layout from "../src/components/layout/layout"
import GridBox from "../src/components/local/GridBox"
import Changelog from "../src/components/local/change/changelog/Changelog"
import RoadMap from "../src/components/local/change/roadmap/RoadMap"
import { useAtom } from "jotai"
import { DataAtom } from "../src/lib/hooks/atoms"

const Users = () => {
  const box = {
    h: "auto",
    w: "100%",
    bg: useColorModeValue("white", "gray.800"),
  }

  const gridColumn = useBreakpointValue({ md: 1, lg: 1, xl: 2 })
  const [data] = useAtom(DataAtom)

  return (
    <Layout>
      <Grid gap={4} templateColumns={`repeat(${gridColumn}, 1fr)`}>
        {JSON.stringify(data)}
      </Grid>
    </Layout>
  )
}

export default Users
