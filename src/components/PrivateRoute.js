import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({children, ...routeProps}) =>{
    // The condition when there is no profile created
    const profile = false;
    // if profile is empty, redirect to signin page
    if(!profile) {
        return <Redirect to="/signin" />
    }

    return (
        <Route {...routeProps}>
            {children}
        </Route>
    )

}

export default PrivateRoute;