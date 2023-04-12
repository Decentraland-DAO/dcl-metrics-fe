import BoxWrapper from "../../../layout/local/BoxWrapper"
import { Box, Center, Flex, Image, useColorModeValue } from "@chakra-ui/react"

const UserProfile = ({ data }) => {
  const { avatar_url, name } = data

  return (
    <BoxWrapper colSpan={[1, 1, 1, 2, 2]}>
      <Flex
        direction={["column", "column", "column", "row"]}
        mb={[-4, 0, 0, 0, 0]}
      >
        <Center
          w={["auto", "auto", "auto", "100%", "100%"]}
          m={[4, 4, 4, 2, 2]}
          bg={useColorModeValue("gray.200", "gray.600")}
          border="1px solid"
          borderColor={useColorModeValue("gray.300", "gray.500")}
          borderRadius="xl"
          shadow="md"
        >
          <Box overflow="hidden" m="4" borderRadius="xl">
            <Image
              alt={name}
              src={avatar_url ? avatar_url : "/images/blank_profile.png"}
            />
          </Box>
        </Center>
      </Flex>
    </BoxWrapper>
  )
}

export default UserProfile
