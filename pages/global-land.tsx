import { useState } from "react"
import dynamic from "next/dynamic"
import type { NextPage } from "next"
import { Grid, useBreakpointValue } from "@chakra-ui/react"
import Layout from "../src/components/layout/layout"

const MarathonUsers = dynamic(
  () => import("../src/components/local/stats/MarathonUsers"),
  { ssr: false }
)
const TopParcelsTimeSpentComponent = dynamic(
  () => import("../src/components/local/stats/TopParcelsTimeSpent"),
  { ssr: false }
)
const UniqueVisitors = dynamic(
  () => import("../src/components/local/stats/UniqueVisitors"),
  { ssr: false }
)
const Explorers = dynamic(
  () => import("../src/components/local/stats/Explorers"),
  { ssr: false }
)
const RecentExplorers = dynamic(
  () => import("../src/components/local/stats/RecentExplorers"),
  { ssr: false }
)
const TotalVisitedParcels = dynamic(
  () => import("../src/components/local/stats/TotalVisitedParcels"),
  { ssr: false }
)
const RecentMarathonUsers = dynamic(
  () => import("../src/components/local/stats/RecentMarathonUsers"),
  { ssr: false }
)
// const RecentMarathonUsers = dynamic(
//   () => import("../src/components/local/stats/TempRecentMarathonUsers"),
//   { ssr: false }
// )

const GlobalPage: NextPage = () => {
  const gridColumn = useBreakpointValue({ md: 1, lg: 2, xl: 2 })
  const [isLoading, setIsLoading] = useState(false)

  // const box = {
  //   h: "600",
  //   w: "100%",
  //   bg: "white",
  // }

  return (
    <Layout>
      <Grid templateColumns={`repeat(${gridColumn}, 1fr)`} gap={4} mb="20">
        {/* marathon user */}
        <MarathonUsers isLoading={isLoading} setIsLoading={setIsLoading} />
        <RecentMarathonUsers
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <UniqueVisitors isLoading={isLoading} setIsLoading={setIsLoading} />
        <TotalVisitedParcels
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <Explorers isLoading={isLoading} setIsLoading={setIsLoading} />
        <RecentExplorers isLoading={isLoading} setIsLoading={setIsLoading} />
        <TopParcelsTimeSpentComponent
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </Grid>
    </Layout>
  )
}

export default GlobalPage
