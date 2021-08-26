import React from 'react';

import { Box, Image } from '@chakra-ui/react';
// import Img from 'gatsby-image';

export default function TrailerCard() {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src="https://via.placeholder.com/150" alt="trailer" />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            Single Axle - Double Axle - Mesh Tops
          </Box>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          Box Trailer's
        </Box>
      </Box>
    </Box>
  );
}
