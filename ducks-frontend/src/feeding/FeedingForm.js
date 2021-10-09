import React from 'react';
import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    InputGroup,
    InputRightAddon,
    Stack
} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import axios from "axios";

export default function FeedingForm() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => axios.post('/api/feeding', data);

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={6}>

                <FormControl id="feedingTime">
                    <FormLabel>Date and time</FormLabel>
                    <Input placeholder="Date" type="datetime-local" {...register("feedingTime", { required: true })} />
                    {errors.feedingTime && <span>This field is required</span>}
                    <FormHelperText>The date and time that feeding began.</FormHelperText>
                </FormControl>

                <FormControl id="food">
                    <FormLabel>Food</FormLabel>
                    <Input placeholder="Food" {...register("food", { required: true })} />
                    {errors.food && <span>This field is required</span>}
                    <FormHelperText>The brand and type of food used.</FormHelperText>
                </FormControl>

                <FormControl id="location">
                    <FormLabel>Location</FormLabel>
                    <Input placeholder="Location" {...register("location", { required: true })} />
                    {errors.location && <span>This field is required</span>}
                    <FormHelperText>The location (ex. park) where the ducks were fed.</FormHelperText>
                </FormControl>

                <FormControl id="numberOfDucks">
                    <FormLabel>Number of ducks</FormLabel>
                    <Input placeholder="Number of ducks" type="number" {...register("numberOfDucks", { required: true })}  />
                    {errors.numberOfDucks && <span>This field is required</span>}
                    <FormHelperText>Approximate number of ducks.</FormHelperText>
                </FormControl>

                <FormControl id="quantity_cups">
                    <FormLabel>Quantity of food</FormLabel>
                    <InputGroup>
                        <Input placeholder="How much food" type="number" {...register("quantityCups", { required: true })} />
                        <InputRightAddon children="cups"/>
                    </InputGroup>
                    {errors.quantityCups && <span>This field is required</span>}
                    <FormHelperText>Approximate number of cups of food distributed (1 cup = 240
                        ml).</FormHelperText>
                </FormControl>

                <Button colorScheme="blue" type="submit">Submit</Button>
            </Stack>
        </form>
    );
}