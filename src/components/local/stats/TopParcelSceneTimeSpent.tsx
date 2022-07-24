import { Box, Text } from "@chakra-ui/react"
import GridBox from "../GridBox"
import Loading from "../Loading"

const TopParcelSceneTimeSpentComponent = ({ box, isLoading, setIsLoading }) => {
  return (
    <GridBox box={box}>
      {!isLoading ? (
        <>
          <Box position="absolute" m="2" ml="4">
            <Text fontSize="xl">
              <b>Top Parcels/Scenes Time Spent</b>
            </Text>
          </Box>
        </>
      ) : (
        <Loading />
      )}
    </GridBox>
  )
}

export default TopParcelSceneTimeSpentComponent

// top parcels scene time spent
const data = {
  "2022-07-18": [
    {
      address: "0x762afac551163d39125cabc84b008494471a2a42",
      time_spent: null,
      parcels_visited: 50,
    },
    {
      address: "0x2509dea66db55699381bcd84d6e4158f747e3281",
      time_spent: null,
      parcels_visited: 41,
    },
    {
      address: "0xcef2ba5df37a8b2b8e377b24d68c1d0de4246439",
      time_spent: null,
      parcels_visited: 40,
    },
    {
      address: "0x0506d39effcaefbc632cbe72c36c4d64759a665f",
      time_spent: null,
      parcels_visited: 39,
    },
    {
      address: "0xdb760099f0f3359131e08716848f23c014d35b9e",
      time_spent: null,
      parcels_visited: 38,
    },
    {
      address: "0xfe79d6694dc62fd3e685b3a699e6ccdbd447260a",
      time_spent: null,
      parcels_visited: 37,
    },
    {
      address: "0x0fadbbd58ebe1b2b5043127dba097c4ce1bf7a84",
      time_spent: null,
      parcels_visited: 36,
    },
    {
      address: "0xf2c86508ed9d7f74207ee39979ddf8b9692ef7d3",
      time_spent: null,
      parcels_visited: 34,
    },
    {
      address: "0x4656bfe8891787438dd6c4fe7db993a8bce54fc4",
      time_spent: null,
      parcels_visited: 32,
    },
    {
      address: "0xe0dd93e8f6bbe7133642cde68f5235cd412ee448",
      time_spent: null,
      parcels_visited: 31,
    },
  ],
  "2022-07-19": [
    {
      address: "0x0506d39effcaefbc632cbe72c36c4d64759a665f",
      time_spent: null,
      parcels_visited: 54,
    },
    {
      address: "0x6093fcdf78d2ed282c01d1e38ff06836ebe8adc2",
      time_spent: null,
      parcels_visited: 50,
    },
    {
      address: "0x0fadbbd58ebe1b2b5043127dba097c4ce1bf7a84",
      time_spent: null,
      parcels_visited: 48,
    },
    {
      address: "0xdcfc8796564a50b1c670e92687d2bb0e83719f95",
      time_spent: null,
      parcels_visited: 46,
    },
    {
      address: "0x515291ce056e30ec061f95c465506a9ff679d7f0",
      time_spent: null,
      parcels_visited: 44,
    },
    {
      address: "0x599df8cbe5aadebbeefe85950c8f65311665b8c0",
      time_spent: null,
      parcels_visited: 42,
    },
    {
      address: "0xeaf8ea8a310ef36565078fc7416662349fc59ba1",
      time_spent: null,
      parcels_visited: 42,
    },
    {
      address: "0x528af8e0fea2ddca8f66884c722a234190ea39c9",
      time_spent: null,
      parcels_visited: 42,
    },
    {
      address: "0xdef65502729ee54873553c26b4617e4289e5acb5",
      time_spent: null,
      parcels_visited: 41,
    },
    {
      address: "0xb3832a2b15cb9aea67b58a7fbe2b4d4c35d3694f",
      time_spent: null,
      parcels_visited: 41,
    },
  ],
  "2022-07-20": [
    {
      address: "0xde8736f2439db342ae4df7a80da4cd2f59bcffcf",
      time_spent: null,
      parcels_visited: 160,
    },
    {
      address: "0xdcfc8796564a50b1c670e92687d2bb0e83719f95",
      time_spent: null,
      parcels_visited: 66,
    },
    {
      address: "0xe0dd93e8f6bbe7133642cde68f5235cd412ee448",
      time_spent: null,
      parcels_visited: 63,
    },
    {
      address: "0xf3ac1664a7589f1e2b18c61f7ee1050466a9e23c",
      time_spent: null,
      parcels_visited: 60,
    },
    {
      address: "0xeaf8ea8a310ef36565078fc7416662349fc59ba1",
      time_spent: null,
      parcels_visited: 60,
    },
    {
      address: "0x75f78fc1ea8d522f90ccbe761b7e484672474d59",
      time_spent: null,
      parcels_visited: 54,
    },
    {
      address: "0x25644ad9948cc83a5cd02f629b069ad0a033fa41",
      time_spent: null,
      parcels_visited: 54,
    },
    {
      address: "0x0506d39effcaefbc632cbe72c36c4d64759a665f",
      time_spent: null,
      parcels_visited: 50,
    },
    {
      address: "0x97ff7c37150d01e897e5e2525964ec94d814aae4",
      time_spent: null,
      parcels_visited: 45,
    },
    {
      address: "0xdef65502729ee54873553c26b4617e4289e5acb5",
      time_spent: null,
      parcels_visited: 45,
    },
  ],
  "2022-07-21": [
    {
      address: "0xde8736f2439db342ae4df7a80da4cd2f59bcffcf",
      time_spent: null,
      parcels_visited: 209,
    },
    {
      address: "0xdef65502729ee54873553c26b4617e4289e5acb5",
      time_spent: null,
      parcels_visited: 104,
    },
    {
      address: "0xe0dd93e8f6bbe7133642cde68f5235cd412ee448",
      time_spent: null,
      parcels_visited: 82,
    },
    {
      address: "0xf142593fe5a6000309414c168f2b29ba6a978c1a",
      time_spent: null,
      parcels_visited: 81,
    },
    {
      address: "0x196bb73dabc6465f7f8cd8d26c5c7383a395694e",
      time_spent: null,
      parcels_visited: 81,
    },
    {
      address: "0xf3ac1664a7589f1e2b18c61f7ee1050466a9e23c",
      time_spent: null,
      parcels_visited: 74,
    },
    {
      address: "0x0506d39effcaefbc632cbe72c36c4d64759a665f",
      time_spent: null,
      parcels_visited: 68,
    },
    {
      address: "0xb6d2ae193e5cdbeb3a431950e7123889df43ee53",
      time_spent: null,
      parcels_visited: 67,
    },
    {
      address: "0xeaf8ea8a310ef36565078fc7416662349fc59ba1",
      time_spent: null,
      parcels_visited: 64,
    },
    {
      address: "0xf70e17b5afdf83899f9f4cb7c7f9d56867d138c7",
      time_spent: null,
      parcels_visited: 58,
    },
  ],
  "2022-07-22": [
    {
      address: "0xde8736f2439db342ae4df7a80da4cd2f59bcffcf",
      time_spent: null,
      parcels_visited: 208,
    },
    {
      address: "0x0da278ed2e3b614f942f2cebeabe194e44bff38f",
      time_spent: null,
      parcels_visited: 86,
    },
    {
      address: "0xf605e3257c5662406b8baa9e6040dc393d05922f",
      time_spent: null,
      parcels_visited: 80,
    },
    {
      address: "0xdef65502729ee54873553c26b4617e4289e5acb5",
      time_spent: null,
      parcels_visited: 70,
    },
    {
      address: "0x9cf55bfcc379673511ffbb1de419b5705ea3426d",
      time_spent: null,
      parcels_visited: 58,
    },
    {
      address: "0x97ff7c37150d01e897e5e2525964ec94d814aae4",
      time_spent: null,
      parcels_visited: 57,
    },
    {
      address: "0x196bb73dabc6465f7f8cd8d26c5c7383a395694e",
      time_spent: null,
      parcels_visited: 57,
    },
    {
      address: "0xeaf8ea8a310ef36565078fc7416662349fc59ba1",
      time_spent: null,
      parcels_visited: 53,
    },
    {
      address: "0x0506d39effcaefbc632cbe72c36c4d64759a665f",
      time_spent: null,
      parcels_visited: 53,
    },
    {
      address: "0x29fb0d1b0836f9963f963b0bb07c49d2d61370b4",
      time_spent: null,
      parcels_visited: 51,
    },
  ],
  "2022-07-23": [
    {
      address: "0xde8736f2439db342ae4df7a80da4cd2f59bcffcf",
      time_spent: null,
      parcels_visited: 245,
    },
    {
      address: "0x9ac0476d96f780cf99f6e538957a70c8e8c284e1",
      time_spent: null,
      parcels_visited: 189,
    },
    {
      address: "0x0da278ed2e3b614f942f2cebeabe194e44bff38f",
      time_spent: null,
      parcels_visited: 181,
    },
    {
      address: "0x53f5dfc33e7cc4b66f5d5086038dfe338e60dd59",
      time_spent: null,
      parcels_visited: 88,
    },
    {
      address: "0xf605e3257c5662406b8baa9e6040dc393d05922f",
      time_spent: null,
      parcels_visited: 78,
    },
    {
      address: "0x4f12a0855d407a835f8fe750eaeeb8929ef3fa6d",
      time_spent: null,
      parcels_visited: 71,
    },
    {
      address: "0xdef65502729ee54873553c26b4617e4289e5acb5",
      time_spent: null,
      parcels_visited: 67,
    },
    {
      address: "0xeaf8ea8a310ef36565078fc7416662349fc59ba1",
      time_spent: null,
      parcels_visited: 67,
    },
    {
      address: "0x3acd25590624adcec3075140467ba92d24060039",
      time_spent: null,
      parcels_visited: 60,
    },
    {
      address: "0x5b30e644401e71dce391717ced621c9b2ae99224",
      time_spent: null,
      parcels_visited: 56,
    },
  ],
}
