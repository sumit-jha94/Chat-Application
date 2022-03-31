import React from "react";
import { Redirect, Route } from "react-router";
import { useProfile } from "../context/profile.context";


const PrivateRoute = ({children, ...routeProps}) =>{
    // The condition when there is no profile created
    const profile = useProfile();
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