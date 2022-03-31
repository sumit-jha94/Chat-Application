import React from "react";
import { Redirect, Route } from "react-router";
import { useProfile } from "../context/profile.context";

const PublicRoute = ({children, ...routeProps}) =>{
    // The condition when there is no profile created
    const profile = useProfile();
    // if profile is empty, redirect to home page
    if(profile) {
        return <Redirect to="/" />
    }

    return (
        <Route {...routeProps}>
            {children}
        </Route>
    )

}

export default PublicRoute;