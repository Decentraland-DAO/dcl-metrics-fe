import {
  Flex,
  Divider,
  Box,
  Text,
  VStack,
  Spacer,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  List,
  ListItem,
  UnorderedList,
  useBreakpointValue,
  Center,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tr,
  useToast,
} from "@chakra-ui/react"
import CountUp from "react-countup"
import BoxTitle from "../../../layout/local/BoxTitle"
import BoxWrapper from "../../../layout/local/BoxWrapper"
import { useRouter } from "next/router"
import Link from "next/link"
import ToolTip from "../../../layout/local/ToolTip"
import moment from "moment"
import UserDAOActivityCollection from "./partial/UserDAOActivityCollection"
import UserDAOActivityDelegators from "./partial/UserDAOActivityDelegators"
import UserActivityGrantPopOver from "./partial/UserActivityGrantPopOver"
import UserDAOAvtivityDelegate from "./partial/delegate/UserDAOAvtivityDelegate"
import UserDAOActivityGrant from "./partial/grant/UserDAOActivityGrant"

const UserDAOActivity = ({ data }) => {
  const {
    name,
    title,
    total_vp,
    votes,
    active_dao_committee_member,
    address,
    collection_creator,
    collections,
    delegate,
    delegated_vp,
    delegators,
    grants,
    proposals,
    teams,
  } = data

  return (
    <BoxWrapper colSpan={[1, 1, 1, 2, 2]}>
      <BoxTitle
        name="DAO Activity"
        description={`${name}'s DAO activity`}
        date=""
        avgData={[]}
        slicedData={{}}
        color={{}}
        line={false}
        setLine={{}}
      />
      <Flex direction="column" w="auto" m="4" mx="5">
        <Box w="100%">
          <VStack align="stretch" spacing={[2, 2, 2, 5, 5]}>
            <Flex w="100%" h="100%">
              <Box>Title</Box>
              <Spacer />
              <Box>
                <Text>
                  <b>{title ? title : "N/A"}</b>
                </Text>
              </Box>
            </Flex>
            <Flex w="100%" h="100%">
              <Box>Total VP</Box>
              <Spacer />
              <Box>
                <b>
                  <CountUp
                    end={total_vp ? total_vp : "N/A"}
                    duration={0.5}
                    decimals={0}
                  />
                </b>
              </Box>
            </Flex>
            <Flex w="100%" h="100%">
              <Box>Delegated VP</Box>
              <Spacer />
              <Box>
                <b>
                  <CountUp
                    end={delegated_vp ? delegated_vp : "N/A"}
                    duration={0.5}
                    decimals={0}
                  />
                </b>
              </Box>
            </Flex>
            {votes && (
              <>
                <Flex w="100%" h="100%">
                  <Box>Total Votes</Box>
                  <Spacer />
                  <Box>
                    <b>
                      <CountUp
                        end={votes.total_votes ? votes.total_votes : 0}
                        duration={0.5}
                        decimals={0}
                      />
                    </b>
                  </Box>
                </Flex>
                <Flex w="100%" h="100%">
                  <Box>First Vote</Box>
                  <Spacer />
                  <Box>
                    <Text as="kbd">
                      <b>{votes.first_vote_cast_at}</b>
                    </Text>
                  </Box>
                </Flex>
                <Flex w="100%" h="100%">
                  <Box>Latest Vote</Box>
                  <Spacer />
                  <Box>
                    <Text as="kbd">
                      <b>{votes.latest_vote_cast_at}</b>
                    </Text>
                  </Box>
                </Flex>
              </>
            )}
            <Flex w="100%" h="100%">
              <Box>Active DAO Committee Member</Box>
              <Spacer />
              <Box>
                <Text color={active_dao_committee_member ? "green" : "red"}>
                  <b>{active_dao_committee_member ? "Yes" : "No"}</b>
                </Text>
              </Box>
            </Flex>
            <Flex w="100%" h="100%">
              <Box>Collection Creator</Box>
              <Spacer />
              <Box>
                <Text color={collection_creator ? "green" : "red"}>
                  <b>{collection_creator ? "Yes" : "No"}</b>
                </Text>
              </Box>
            </Flex>
            <UserDAOActivityCollection name={name} collections={collections} />
            <UserDAOAvtivityDelegate
              name={name}
              delegate={delegate}
              delegators={delegators}
            />
            <UserDAOActivityGrant name={name} grants={grants} />
            {/*<UserDAOActivityCollection
              collections={collections}
              delegators={delegators}
            />*/}
            {/*<Flex w="100%" h="100%">
              <Box>Delegate</Box>
              <Spacer />
              <Box>
                <Text color={delegate ? "green" : "red"}>
                  <b>{delegate ? "Yes" : "No"}</b>
                </Text>
              </Box>
            </Flex>
            <UserDAOActivityDelegators delegators={delegators} />
            <UserActivityGrantPopOver grants={grants} />*/}
          </VStack>
        </Box>
      </Flex>
    </BoxWrapper>
  )
}

export default UserDAOActivity
