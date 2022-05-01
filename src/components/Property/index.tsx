import { Avatar, Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { PropertyFeatures } from "../../types";
import {CheckCircleIcon} from '@chakra-ui/icons'
import { BsGridFill } from "react-icons/bs"
import {FaBath, FaBed} from "react-icons/fa"
import millify from "millify";




const Property = ({property: {coverPhoto, price, rentFrequency,rooms, title, baths, area, agency, isVerified, externalId }}: PropertyFeatures ) => {
    return (
        <Link href={`/property ${externalId}`}>
           <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0' justifyContent='flex-start' cursor='pointer'>
                <Box>
                    <Image src={coverPhoto ? coverPhoto.url : ''} width={400} height={260} alt="house" />
                </Box>
                <Box w='full'>
                    <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
                        <Flex alignItems='center'>
                            <Box paddingRight='3' color='green.300'>{isVerified && <CheckCircleIcon/>}</Box>
                            <Text fontWeight='bold' fontSize='lg'>AED {millify(area)}{rentFrequency && `/${rentFrequency}`}</Text>
                        </Flex>
                        <Box>
                            <Avatar size='sm' src={agency?.logo?.url}/>
                        </Box>
                    </Flex>
                    <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='teal'>
                        {rooms} <FaBed/> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill/>
                    </Flex>
                    <Text fontSize='lg'>
                        {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                    </Text>
                </Box>
           </Flex>
        </Link>
    )
}
export default Property;
