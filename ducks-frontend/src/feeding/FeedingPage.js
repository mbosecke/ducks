import React from 'react';
import {
    Button,
    Container,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input, InputGroup,
    InputRightAddon,
    Stack
} from "@chakra-ui/react";
import Card from "../components/Card";

export default function FeedingPage() {

    return (
        <Container>
            <Stack spacing={6}>
                <Heading>Duck Feeding</Heading>

                <Card>
                    <Heading as="h3" size="md" marginBottom="3">Submit new duck feeding</Heading>

                    <Stack spacing={6}>

                        <FormControl id="time">
                            <FormLabel>Time of day</FormLabel>
                            <Input placeholder="Time" type="time"/>
                            <FormHelperText>The time that feeding began.</FormHelperText>
                        </FormControl>

                        <FormControl id="food">
                            <FormLabel>Food</FormLabel>
                            <Input placeholder="Food"/>
                            <FormHelperText>The brand and type of food used.</FormHelperText>
                        </FormControl>

                        <FormControl id="food">
                            <FormLabel>Location</FormLabel>
                            <Input placeholder="Location"/>
                            <FormHelperText>The location (ex. park) where the ducks were fed.</FormHelperText>
                        </FormControl>

                        <FormControl id="food">
                            <FormLabel>Number of ducks</FormLabel>
                            <Input placeholder="Number of ducks" type="number"/>
                            <FormHelperText>Approximate number of ducks.</FormHelperText>
                        </FormControl>

                        <FormControl id="quantity">
                            <FormLabel>Quantity of food</FormLabel>
                            <InputGroup >
                                <Input placeholder="How much food"/>
                                <InputRightAddon children="cups" />
                            </InputGroup>
                            <FormHelperText>Approximate number of cups of food distributed (1 cup = 240 ml).</FormHelperText>
                        </FormControl>

                        <Button colorScheme="blue">Submit</Button>
                    </Stack>


                </Card>
            </Stack>
        </Container>
    );
}