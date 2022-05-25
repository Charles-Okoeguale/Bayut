import { Box, Flex, Select } from "@chakra-ui/react";
import {useState} from "react";
import { getFilterValues, filterData } from "../../utils/filterData";
import { useLocation, useNavigate} from "react-router-dom"
import queryString from 'query-string'


const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData)
    const { pathname, search} = useLocation()
    const navigate = useNavigate()

    const searchProperties = (filterValues: any) => {
        console.log(search)
      const values = getFilterValues(filterValues)
      values.forEach((item) => {
       
      })

      navigate(search)

    }
    return (
       <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
           {filters.map((filter) => (
               <Box key={filter.queryName}>
                   <Select 
                    placeholder={filter.placeholder}
                    w='fit-content'
                    p='2'
                    onChange={(e) => searchProperties({ [filter.queryName] : e.target.value })}
                   >
                       {filter?.items?.map((item) => (
                           <option value={item.value} key={item.value}>
                               {item.name}
                           </option>
                       ))}
                   </Select>
               </Box>
           ))}
       </Flex>
    )
}

export default SearchFilters;