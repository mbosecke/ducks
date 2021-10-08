import {Button} from "@chakra-ui/react";
import React from "react";

export default function PrimaryButton({children, ...passThroughProps}) {
    return (
        <Button colorScheme="teal" {...passThroughProps} >
            {children}
        </Button>
    );
}