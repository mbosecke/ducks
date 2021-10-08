import React from 'react';
import {Heading} from "@chakra-ui/react";

export default function SidebarHeader({children}){
    return (
        <Heading as="h4"
                 size="sm"
                 color={"gray.500"}
                 textTransform="uppercase"
                 fontSize="xs"
        >
            {children}
        </Heading>
    )
}