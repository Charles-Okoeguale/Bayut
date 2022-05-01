import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsFilter } from "react-icons/bs";
import Property from "./components/Property";
import SearchFilters from "./components/SearchFilters";
import { useSearchParams } from "react-router-dom";


const Search = () => {


   const [searchFilters, setSearchFilters] = useState(false)
   const [searchParams, setSearchParams] = useSearchParams()
  
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
                {[].map((property) => <Property property={property}/>)}
            </Flex>
            <Flex flexWrap='wrap'>
                {[].length === 0 && (
                    <Text>No Property Found</Text>
                )}
            </Flex>
        </Box>
    )
}

export default Search;


