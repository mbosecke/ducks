import React from 'react';
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import FeedingPage from "./feeding/FeedingPage";


function PrimaryRouter() {

    const {pathname} = useLocation();
    return (
        <Switch>
            {/* Any URL with a trailing slash, redirect to same URL without trailing slash */}
            <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)}/>
            <Route path={"/app/feeding"}>
                <FeedingPage/>
            </Route>
        </Switch>
    );
}

export default PrimaryRouter;
