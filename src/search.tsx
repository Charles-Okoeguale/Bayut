/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsFilter } from "react-icons/bs";
import Property from "./components/Property";
import SearchFilters from "./components/SearchFilters";
import { useSearchParams } from "react-router-dom";
import axios from "axios";



const Search = () => {

   const [searchFilters, setSearchFilters] = useState(false)
   const [searchParams, setSearchParams] = useSearchParams()
   const [searchData, setSearchData] = useState([])


   const purpose = searchParams.get('purpose') || 'for-rent'
   const rentFrequency = searchParams.get('rentFrequency') || 'yearly'
   const minPrice = searchParams.get('minPrice') || '0'
   const maxPrice = searchParams.get('maxPrice') || '1000000'
   const roomsMin = searchParams.get('roomsMin') || '0'
   const bathsMin = searchParams.get('bathsMin') || '0'
   const sort = searchParams.get('sort') || 'price-desc'
   const areaMax = searchParams.get('areaMax') || '35000'
   const locationExternalIDs = searchParams.get('locationExternalIDs') || '5002,6020'
   const categoryExternalID = searchParams.get('categoryExternalIDs') || '4'

    const option3 = {
        method: 'GET',
        url: `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`,
        headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': 'b7e66f7592msh9aa44d24501c2dep1cbc93jsn87c00024e668'
        }
    };
   
   useEffect(() => {
    axios.request(option3)
    .then((res) => {
        const properties = res.data['hits']
       setSearchData(properties)
       console.log(properties)
    })
   }, [])
  
    return (
        <Box>
            <Flex
                cursor='pointer'
                bg='gray.200'
                borderBottom='1px'
                borderColor='gray.200'
                p='2'
                fontWeight='black'
                fontSize='lg'
                justifyContent='center'
                alignItems='center'
                onClick={() => setSearchFilters((prevFilter: any) => !prevFilter)}
            >
                <Text>Search Property By Filter</Text>
                <Icon paddingLeft='2' w='7' as={BsFilter} />
            </Flex>
            {searchFilters && <SearchFilters/> }
            <Text fontSize='2xl' p='4' fontWeight='bold'>
                properties {searchParams.get('purpose')}
            </Text>
            <Flex flexWrap='wrap'>
                {searchData.map((property: any) => <Property property={property} key={property.id}/>)}
            </Flex>
            <Flex flexWrap='wrap'>
                {searchData.length === 0 && (
                    <Text>No Property Found</Text>
                )}
            </Flex>
        </Box>
    )
}

export default Search;


