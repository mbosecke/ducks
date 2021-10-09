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
import ValidationError from "../components/ValidationError";
import useSuccessToast from "../components/useSuccessToast";
import useErrorToast from "../components/useErrorToast";

export default function FeedingForm() {

    const successToast = useSuccessToast();
    const errorToast = useErrorToast();

    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const onSubmit = data => axios.post('/api/feeding', data)
        .then(response => {
            reset();
            successToast({
                title: 'Feeding saved',
                description: 'Duck feeding has been saved. Thank you!'
            });
        }).catch(error => {
            errorToast({
                description: error.message
            })
        });

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={6}>

                <FormControl id="feedingTime">
                    <FormLabel htmlFor="feedingTime">Date and time</FormLabel>
                    <Input placeholder="Date" type="datetime-local" {...register("feedingTime", {required: true})} />
                    {errors.feedingTime && <ValidationError/>}
                    <FormHelperText>The date and time that feeding began.</FormHelperText>
                </FormControl>

                <input type="hidden" defaultValue={timezone} {...register("timezone")} />

                <FormControl id="food">
                    <FormLabel htmlFor="food">Food</FormLabel>
                    <Input placeholder="Food" {...register("food", {required: true})} />
                    {errors.food && <ValidationError/>}
                    <FormHelperText>The brand and type of food used.</FormHelperText>
                </FormControl>

                <FormControl id="location">
                    <FormLabel htmlFor="location">Location</FormLabel>
                    <Input placeholder="Location" {...register("location", {required: true})} />
                    {errors.location && <ValidationError/>}
                    <FormHelperText>The location (ex. park) where the ducks were fed.</FormHelperText>
                </FormControl>

                <FormControl id="numberOfDucks">
                    <FormLabel htmlFor="numberOfDucks">Number of ducks</FormLabel>
                    <Input placeholder="Number of ducks"
                           type="number" {...register("numberOfDucks", {required: true})}  />
                    {errors.numberOfDucks && <ValidationError/>}
                    <FormHelperText>Approximate number of ducks.</FormHelperText>
                </FormControl>

                <FormControl id="quantity_cups">
                    <FormLabel htmlFor="quantityCups">Quantity of food</FormLabel>
                    <InputGroup>
                        <Input placeholder="How much food"
                               type="number" {...register("quantityCups", {required: true})} />
                        <InputRightAddon children="cups"/>
                    </InputGroup>
                    {errors.quantityCups && <ValidationError/>}
                    <FormHelperText>Approximate number of cups of food distributed (1 cup = 240
                        ml).</FormHelperText>
                </FormControl>

                <Button colorScheme="blue" type="submit">Submit</Button>
            </Stack>
        </form>
    );
}