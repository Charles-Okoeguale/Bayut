import React from "react";
import { Box, Image, Badge, Flex, Button, Link } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Isfeatures } from "../../types";


const Banner = ({imageUrl, imageAlt, beds, baths, title, formattedPrice, reviewCount, rating, purpose, linkName, buttonText}: Isfeatures) => (
    <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
         <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={imageUrl} alt={imageAlt} />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {purpose}
          </Badge>
          <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'  ml='2' >
            {beds} beds &bull; {baths} baths
          </Box>
        </Box>
        <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated >
          {title}
        </Box>
        <Box>
          ${formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
        </Box>
        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {reviewCount} reviews
          </Box>
        </Box>
      </Box>
      <Button size='sm' margin='2' bg='teal'>
          <Link href={linkName} textDecoration='none'>{buttonText}</Link>
      </Button>
    </Box>
    </Flex>
)

export default Banner;