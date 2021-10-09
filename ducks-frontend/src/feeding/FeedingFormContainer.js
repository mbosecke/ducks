import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import useSuccessToast from "../components/useSuccessToast";
import useErrorToast from "../components/useErrorToast";
import {currentDateTimeLocal, currentTimeZone} from "../utils/dateUtils";
import FeedingForm from "./FeedingForm";

function FeedingFormContainer() {

    // Success/Error toast handling
    const successToast = useSuccessToast();
    const errorToast = useErrorToast();

    // Current date, time, and timezone
    const now = currentDateTimeLocal();
    const timezone = currentTimeZone();

    // Form handlers
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    // Submit functionality
    const onSubmit = data => axios.post('/api/feeding', data)
        .then(() => {
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


    return (

        <FeedingForm
            register={register}
            onSubmit={handleSubmit(onSubmit)}
            errors={errors}
            now={now}
            timezone={timezone}
        />
    );
}

export default FeedingFormContainer;