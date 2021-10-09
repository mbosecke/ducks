import React from 'react';
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom";
import ducksTheme from "./theme/ducksTheme";

import PrimaryRouter from "./PrimaryRouter";

function App() {

    return (
        <>
            <ChakraProvider theme={ducksTheme}>
                <BrowserRouter>
                    <PrimaryRouter/>
                </BrowserRouter>
            </ChakraProvider>
        </>
    );
}

export default App;
