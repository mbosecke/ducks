import React from 'react';
import {VStack} from "@chakra-ui/react";

export default function SidebarSection({children}) {

    return (
        <VStack alignItems={'left'}>
            {children}
        </VStack>
    )
}