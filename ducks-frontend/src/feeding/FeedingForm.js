import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    InputGroup,
    InputRightAddon,
    Stack
} from "@chakra-ui/react";

function FeedingForm({register, onSubmit, errors, now, timezone}) {

    return (

        <form onSubmit={onSubmit}>
            <Stack spacing={6}>

                <FormControl isInvalid={errors.feedingTime} isRequired>
                    <FormLabel htmlFor="feedingTime">Date and time</FormLabel>
                    <Input id="feedingTime"
                           placeholder="Date"
                           type="datetime-local"
                           defaultValue={now}
                           {...register("feedingTime", {required: true})}
                    />
                    <FormErrorMessage>{errors.feedingTime}</FormErrorMessage>
                    <FormHelperText>The date and time that feeding began. Timezone: {timezone}</FormHelperText>
                </FormControl>

                <input type="hidden" defaultValue={timezone} {...register("timezone")} />

                <FormControl isInvalid={errors.food} isRequired>
                    <FormLabel htmlFor="food">Food</FormLabel>
                    <Input id="food" placeholder="Food" {...register("food", {required: true})} />
                    <FormErrorMessage>{errors.food}</FormErrorMessage>
                    <FormHelperText>The brand and type of food used.</FormHelperText>
                </FormControl>

                <FormControl isInvalid={errors.location} isRequired>
                    <FormLabel htmlFor="location">Location</FormLabel>
                    <Input id="location" placeholder="Location" {...register("location", {required: true})} />
                    <FormErrorMessage>{errors.location}</FormErrorMessage>
                    <FormHelperText>The location (ex. park) where the ducks were fed.</FormHelperText>
                </FormControl>

                <FormControl isInvalid={errors.numberOfDucks} isRequired>
                    <FormLabel htmlFor="numberOfDucks">Number of ducks</FormLabel>
                    <Input id="numberOfDucks"
                           placeholder="Number of ducks"
                           type="number"
                           {...register("numberOfDucks", {required: true})}
                    />
                    <FormErrorMessage>{errors.numberOfDucks}</FormErrorMessage>
                    <FormHelperText>Approximate number of ducks.</FormHelperText>
                </FormControl>

                <FormControl  isInvalid={errors.quantityCups} isRequired>
                    <FormLabel htmlFor="quantityCups">Quantity of food</FormLabel>
                    <InputGroup>
                        <Input id="quantityCups"
                               placeholder="How much food"
                               type="number"
                               {...register("quantityCups", {required: true})}
                        />
                        <InputRightAddon children="cups"/>
                    </InputGroup>
                    <FormErrorMessage>{errors.numberOfDucks}</FormErrorMessage>
                    <FormHelperText>Approximate number of cups of food distributed (1 cup = 240
                        ml).</FormHelperText>
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="repeatsEveryXDays">Auto-repeating</FormLabel>
                    <InputGroup>
                        <Input id="repeatsEveryXDays"
                               placeholder="How often to automatically repeat this feeding"
                               type="number"
                               {...register("repeatsEveryXDays")}
                        />
                        <InputRightAddon children="days"/>
                    </InputGroup>
                    <FormErrorMessage>{errors.repeatsEveryXDays}</FormErrorMessage>
                    <FormHelperText>For example, enter "1" for every day or "7" for once a week.</FormHelperText>
                </FormControl>

                <Button colorScheme="blue" type="submit">Submit</Button>
            </Stack>
        </form>
    );
}

FeedingForm.propTypes = {
    register : PropTypes.func.isRequired,
    onSubmit : PropTypes.func.isRequired,
    errors : PropTypes.object.isRequired,
    now : PropTypes.string.isRequired,
    timezone : PropTypes.string.isRequired
}

export default FeedingForm;