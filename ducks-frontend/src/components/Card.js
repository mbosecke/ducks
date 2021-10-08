import React from 'react';
import {Box} from "@chakra-ui/react";

export default function Card({children, ...passThroughProps}) {
    return (
        <Box
             padding="3"
             borderWidth="1px"
             borderRadius="lg"
             {...passThroughProps}
        >
            {children}
        </Box>
    );
}