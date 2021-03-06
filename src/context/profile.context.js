import React, { createContext, useContext, useEffect, useState } from "react";
import {auth, database} from '../misc/firebase';


const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState(null);
    // Adding laoding timeout
    const [isLoading, setIsLoading] = useState(true);

    // Usinf useEffect to get user from firebase
    useEffect (() => {

        let userRef;
        const authUnsub = auth.onAuthStateChanged( authObj => {
            if(authObj) {
                userRef =  database.ref(`/profiles/${authObj.uid}`);
                userRef.on('value', snap => {
                    const {name, createdAt} = snap.val();
                    const data = {
                        name,
                        createdAt,
                        uid: authObj.uid,
                        email: authObj.email
                    };
                    setProfile(data);
                    setIsLoading(true);
                });
            } else {
                if(userRef) {
                    userRef.off()
                }
                setProfile (null);
                setIsLoading (false);
            }
        });
        return () => {
            authUnsub();

            if(userRef) {
                userRef.off();
            }
        }
    }, [])

    return (
    <ProfileContext.Provider value={ {isLoading, profile} }>
        {children}
    </ProfileContext.Provider>
    );
};

export const useProfile = () => useContext(ProfileContext);
