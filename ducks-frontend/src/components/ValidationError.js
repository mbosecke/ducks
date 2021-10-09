import React from 'react';
import {Text} from "@chakra-ui/react";

export default function ValidationError({...passThroughProps}) {

    return (
        <Text
            color="red.400"
            fontSize="sm"
            {...passThroughProps}
        >
            This field is required
        </Text>
    );
}