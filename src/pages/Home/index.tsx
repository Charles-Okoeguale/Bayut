import { Box, Flex } from "@chakra-ui/react";
import Banner from "../../components/Banner";
import {useEffect, useState} from "react";
import axios from "axios";
import { option1, option2 } from "../../apiData";
import Property from "../../components/Property";

const Home = () => {   
   
const [propertiesForSale, setPropertiesForSale] = useState([])
const [propertiesForRent, setPropertiesForRent] = useState([])
    useEffect(() => {  
            axios.all([
                axios.request(option1),
                axios.request(option2)
            ])
            .then((responseArr) => {
                setPropertiesForSale(responseArr[0].data['hits'])
                setPropertiesForRent(responseArr[1].data['hits'])
                console.log(propertiesForRent, propertiesForSale)
                console.log(propertiesForRent, propertiesForSale)
            })
    }, []) 

    return (
        <Box>
            <Banner 
                imageUrl='https://bit.ly/2Z4KKcF' 
                imageAlt='Rear view of modern home with pool'  
                beds={3} 
                baths={2}
                title='Modern home in city center in the heart of historic Los Angeles'
                purpose='RENT A HOME'
                formattedPrice= {1900}
                reviewCount= {34}
                linkName='/search?purpose=for-rent'
                buttonText="Explore Renting"
                rating= {4}
            />
            <Flex flexWrap='wrap'>
                {propertiesForRent.map((property: { coverPhoto: { url: string; }; price: number; rentFrequency: number; rooms: number; title: string; baths: number; area: number; agency: { logo: { url: string; }; }; isVerified: boolean; externalId: number; }) => (
                  <Property property={property}/>
                ))}
            </Flex>
         <Banner 
                imageUrl='https://bit.ly/2Z4KKcF' 
                imageAlt='Rear view of modern home with pool' 
                beds={3}
                baths={2}
                title='Modern home in city center in the heart of historic Los Angeles'
                purpose='BUY A HOME'
                formattedPrice= {1900}
                reviewCount= {34}
                linkName='/search?purpose=for-sale'
                buttonText="Explore Buying"
                rating= {4}
             />
             <Flex flexWrap='wrap'>
             {propertiesForSale.map((property: { coverPhoto: { url: string; }; price: number; rentFrequency: number; rooms: number; title: string; baths: number; area: number; agency: { logo: { url: string; }; }; isVerified: boolean; externalId: number; }) => (
                  <Property property={property}/>
                ))}
             </Flex>
        </Box>     
    )
}


export default Home;
