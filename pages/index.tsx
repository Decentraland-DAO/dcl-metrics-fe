import { Center, Box, Text, Button, Image, VStack } from "@chakra-ui/react"
import type { NextPage } from "next"
import Link from "next/link"
import image from "../public/images/image.png"
import background from "../public/images/background.png"
import { motion } from "framer-motion"

const Index: NextPage = () => {
  return (
    <Box w="100vw" h="100vh" maxW="100%">
      <Center w="100vw" h="100vh" maxW="100%" css={{ overflow: "hidden" }}>
        <Box className="outer">
          <Background />
        </Box>
        <Card />
      </Center>
    </Box>
  )
}

export default Index

const Background = () => {
  return (
    <Box
      h="100%"
      w="100%"
      position="absolute"
      top="0"
      left="0"
      zIndex="-1"
      css={{ filter: "brightness(0.25) " }}
      display="inline-block"
      overflow="hidden"
    >
      <Image
        src={background.src}
        alt="background image"
        h="100%"
        w="100%"
        display="block"
        transition="0.3s ease-in-out"
        objectFit="cover"
        css={{ transform: "scale(1.2)" }}
      />
    </Box>
  )
}

const Card = () => {
  return (
    <VStack bg="gray.100" p="2" borderRadius="2rem" boxShadow="xl">
      <Box>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Image
            src={image.src}
            alt="background image"
            borderRadius="1rem"
            border="2px solid"
            borderColor="gray.300"
            boxSize="200px"
            mt="8"
            mx="8"
            boxShadow="xl"
          />
        </motion.div>
      </Box>
      <Box py="2">
        <Text
          fontSize="30px"
          fontWeight="extrabold"
          css={{
            textShadow: `0px 2px 2px rgba(0,0,0,0.2),
       0px 8px 13px rgba(0,0,0,0.1),
       0px 18px 23px rgba(0,0,0,0.1);`,
          }}
        >
          DCL Metrics
        </Text>
      </Box>
      <Box pt="0" pb="8">
        <ToHome />
      </Box>
    </VStack>
  )
}

const ToHome = () => {
  return (
    <Link href="/home">
      <Button
        width="170px"
        boxShadow="md"
        rounded="xl"
        size={"lg"}
        fontWeight={"normal"}
        colorScheme={"red"}
        bg={"red.400"}
        _hover={{ bg: "red.500" }}
      >
        Get started
      </Button>
    </Link>
  )
}
