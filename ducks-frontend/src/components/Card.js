import React from 'react';
import {Box} from "@chakra-ui/react";
import PropTypes from "prop-types";

function Card({children, ...passThroughProps}) {

    return (
        <Box
             padding="3"
             borderWidth="1px"
             borderRadius="lg"
             {...passThroughProps}
        >
            {children}
        </Box>
    );
}

Card.propTypes = {
    children : PropTypes.node
}

export default Card;