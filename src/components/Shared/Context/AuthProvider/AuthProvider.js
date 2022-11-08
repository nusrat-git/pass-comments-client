import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);


    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }

    const userSignInGoogle = (provider) => {
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
        });

        return () => {
            return unsubscribe();
        }
    }, [])

    const userSignOut = () =>{
        return signOut(auth);
    }

    const getEmail = (event) => {
        const emailValue = event.target.value;
        setEmail(emailValue);
    }

    const getPassword = (event) => {
        const passwordValue = event.target.value;
        setPassword(passwordValue);
    }

    const authInfo = {
        createUser,
        getEmail,
        getPassword,
        email,
        password,
        userSignIn,
        userSignInGoogle,
        user,
        setUser,
        userSignOut
    };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;