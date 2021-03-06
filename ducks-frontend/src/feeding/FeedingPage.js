import React from 'react';
import {Container, Heading, Stack} from "@chakra-ui/react";
import Card from "../components/Card";
import FeedingFormContainer from "./FeedingFormContainer";

export default function FeedingPage() {

    return (
        <Container marginTop={6} >
            <Stack spacing={6}>
                <Heading>Duck Feeding</Heading>

                <Card>
                    <Heading as="h3" size="md" marginBottom="3">Submit new duck feeding</Heading>
                    <FeedingFormContainer />
                </Card>
            </Stack>
        </Container>
    );
}