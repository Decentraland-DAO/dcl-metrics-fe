import { Box } from "@chakra-ui/react"
import LandPicker from "../src/components/global/map/LandPicker"
import Layout from "../src/components/layout/layout"
import staticParcel from "../public/data/cached_parcel.json"
import {
  isDev,
  isLocal,
  isProd,
  parcelURL,
  time,
} from "../src/lib/data/constant"
import { getData, getDataWithProxy } from "../src/lib/data/fetch"

export async function getStaticProps() {
  if (isProd) {
    const parcelRes = await getDataWithProxy(
      parcelURL,
      "/parcels/all",
      staticParcel
    )
    const result = { parcelRes }
    return {
      props: result,
      revalidate: time,
    }
  } else if (isDev && !isLocal) {
    const parcelRes = await getData(parcelURL, "/parcels/all", staticParcel)
    const result = { parcelRes }
    return {
      props: result,
      revalidate: time,
    }
  } else if (isLocal) {
    const parcelRes = staticParcel
    const result = { parcelRes }
    return {
      props: result,
      revalidate: time,
    }
  }
}

const MapPage = (props: Props) => {
  const { parcelRes } = props
  return (
    <Layout>
      <Box mb="4" mx={[-4, 0, 0, 0]}>
        <LandPicker parcelData={parcelRes} isPage={true} />
      </Box>
    </Layout>
  )
}

export default MapPage
