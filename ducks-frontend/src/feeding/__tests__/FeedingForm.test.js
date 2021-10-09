import React from 'react';
import {render, screen} from "@testing-library/react";
import FeedingForm from "../FeedingForm";
import userEvent from "@testing-library/user-event";



it('Renders food input', () => {
    render(
        <FeedingForm
            register={() => {}}
            onSubmit={() => {}}
            errors={{}}
            now={""}
            timezone={""}
        />)
    const foodInput = screen.getByLabelText(/Food/);
    expect(foodInput).toBeInTheDocument();
});

it('Renders food validation errors', () => {
    render(
        <FeedingForm
            register={() => {}}
            onSubmit={() => {}}
            errors={{food: 'Food validation error'}}
            now={""}
            timezone={""}
        />)
    const foodInput = screen.getByText(/Food validation error/);
    expect(foodInput).toBeInTheDocument();
})


it('Invokes onSubmit when submit button is pressed', () => {

    let invocations = 0;
    render(
        <FeedingForm
            register={() => {}}
            onSubmit={() => invocations++}
            errors={{}}
            now={""}
            timezone={""}
        />)
    const submitButton = screen.getByText("Submit");
    userEvent.click(submitButton);

    expect(invocations).toStrictEqual(1);
});