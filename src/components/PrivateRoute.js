import React from "react";
import { Container, Loader } from 'rsuite';
import { Redirect, Route } from "react-router";
import { useProfile } from "../context/profile.context";



const PrivateRoute = ({children, ...routeProps}) =>{
    // The condition when there is no profile created
    const {profile, isLoading} = useProfile();

    if(isLoading && !profile) {
        return <Container>
            <Loader center vertical size="md" content="Loading" speed="slow"/>
        </Container>
    }

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
