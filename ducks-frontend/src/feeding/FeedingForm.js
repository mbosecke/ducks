import React from 'react';
import PropTypes from 'prop-types';
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
import ValidationError from "../components/ValidationError";

function FeedingForm({register, onSubmit, errors, now, timezone}) {

    return (

        <form onSubmit={onSubmit}>
            <Stack spacing={6}>

                <FormControl id="feedingTime">
                    <FormLabel htmlFor="feedingTime">Date and time</FormLabel>
                    <Input placeholder="Date" type="datetime-local" defaultValue={now} {...register("feedingTime", {required: true})} />
                    {errors.feedingTime && <ValidationError/>}
                    <FormHelperText>The date and time that feeding began. Timezone: {timezone}</FormHelperText>
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

                <FormControl id="quantityCups">
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

FeedingForm.propTypes = {
    register : PropTypes.func.isRequired,
    onSubmit : PropTypes.func.isRequired,
    errors : PropTypes.object,
    now : PropTypes.string.isRequired,
    timezone : PropTypes.string.isRequired
}

export default FeedingForm;