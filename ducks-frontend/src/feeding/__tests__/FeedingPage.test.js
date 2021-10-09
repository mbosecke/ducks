import React from 'react';
import FeedingPage from "../FeedingPage";
import {render, screen} from "@testing-library/react";


it('renders without crashing', () => {
    render(<FeedingPage/>)
    expect(screen.getByText('Duck Feeding')).toBeInTheDocument();
})