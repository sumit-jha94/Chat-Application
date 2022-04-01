import React from "react";
import {Container, Loader} from 'rsuite';
import { Redirect, Route } from "react-router";
import { useProfile } from "../context/profile.context";

const PublicRoute = ({children, ...routeProps}) =>{
    // The condition when there is no profile created
    const {profile, isLoading} = useProfile();

    if(isLoading && !profile) {
        return( 
        <Container>
            <Loader center vertical size="md" content="Loading" speed="slow"/>
        </Container>
        );
    }
 
    // if profile is empty, redirect to home page
    if(profile && !isLoading ) {
        return <Redirect to="/" />
    }

    return (
        <Route {...routeProps}>
            {children}
        </Route>
    )

}

export default PublicRoute;