import React from 'react';
import {VStack} from "@chakra-ui/react";

export default function Sidebar({children}) {

    return (
        <VStack alignItems={'left'} spacing={8}>
            {children}
        </VStack>
    )
}