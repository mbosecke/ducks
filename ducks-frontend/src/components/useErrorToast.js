import React from 'react';
import {useToast} from "@chakra-ui/react";

export default function useErrorToast() {
    const toast = useToast();

    return (options) => toast({
        title: 'Error',
        status: 'error',
        duration: 5000,
        isClosable: true,
        ...options
    })

}