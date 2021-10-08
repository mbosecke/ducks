import React from 'react';
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from 'react-query';
import ducksTheme from "./theme/ducksTheme";

import PrimaryRouter from "./PrimaryRouter";

// React Query
const queryClient = new QueryClient();

function App() {

    return (
        <>
            <ChakraProvider theme={ducksTheme}>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <PrimaryRouter/>
                    </BrowserRouter>
                </QueryClientProvider>
            </ChakraProvider>
        </>
    );
}

export default App;
