import {
  Text,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Button,
  Box,
  useColorModeValue,
  Flex,
  Center,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Spacer,
} from "@chakra-ui/react"

const MapMenu = ({
  properties,
  selectedProp,
  setSelectedProp,
  btnBg,
  textColor,
}) => {
  const formatName = (name) => {
    return name
      .replace(/_/g, " ")
      .replace("intensity", "")
      .replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
  }

  const HeatmapLegend = () => {
    const heatmapGradient =
      "linear-gradient(90deg, rgba(0,3,255,1) 0%, rgba(3,255,0,1) 50%, rgba(255,0,0,1) 100%)"
    return (
      <Popover>
        <PopoverTrigger>
          <Button
            zIndex="banner"
            w="40"
            h="auto"
            mr="2"
            bg={useColorModeValue("gray.200", "gray.900")}
            borderRadius="xl"
            shadow="md"
            size="sm"
          >
            <Center w="100%">
              <Box
                w="100%"
                h="3"
                px="2"
                bg={heatmapGradient}
                borderRadius="xl"
                shadow="sm"
              />
            </Center>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          bg={useColorModeValue("gray.200", "gray.900")}
          borderRadius="xl"
        >
          <PopoverArrow />
          <PopoverBody>
            <Box>
              <Center pb="2">
                <Text fontSize="xs">Heatmap Intensity Level</Text>
              </Center>
              <Center w="100%">
                <Box
                  w="100%"
                  h="3"
                  bg={heatmapGradient}
                  borderRadius="xl"
                  shadow="sm"
                />
              </Center>
              <Flex as="kbd" w="100%" pl="1" fontSize="xs" dir="row">
                <Box>0</Box>
                <Spacer />
                <Box>25</Box>
                <Spacer />
                <Box>50</Box>
                <Spacer />
                <Box>75</Box>
                <Spacer />
                <Box>100(%)</Box>
              </Flex>
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    )
  }

  const MapMenuList = () => {
    return (
      <>
        {properties.map((property, index) => {
          return (
            <MenuItem
              key={property.name}
              justifyContent="flex-end"
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("gray.50", "gray.900")}
              onClick={() => {
                setSelectedProp(property)
              }}
            >
              {formatName(property.name)}
            </MenuItem>
          )
        })}
      </>
    )
  }

  return (
    <Flex dir="row">
      <HeatmapLegend />
      <Menu isLazy={true}>
        <MenuButton
          as={Button}
          bg={btnBg}
          borderRadius="xl"
          aria-label="Options"
          size="sm"
          variant="solid"
        >
          {formatName(selectedProp.name)}
        </MenuButton>
        <MenuList bg={useColorModeValue("gray.50", "gray.900")} border="none">
          <MapMenuList />
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default MapMenu
