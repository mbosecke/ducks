import React from 'react';
import {Heading, Stack} from "@chakra-ui/react";
import Card from "../components/Card";

export default function FeedingPage() {

    return (
        <>
            <Stack spacing={6}>
                <Heading>Feeding</Heading>

                <Card>
                    <Heading as="h3" size="md" marginBottom="3">Hello World</Heading>

                </Card>
            </Stack>
        </>
    );
}