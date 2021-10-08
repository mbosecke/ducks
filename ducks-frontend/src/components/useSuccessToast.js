import React from 'react';
import {useToast} from "@chakra-ui/react";

export default function useSuccessToast() {
    const toast = useToast();

    return (options) => toast({
        title: 'Success',
        status: 'success',
        duration: 5000,
        isClosable: true,
        ...options
    })

}