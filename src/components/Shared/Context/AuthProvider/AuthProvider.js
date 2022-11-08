import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth';
import app from '../../../../firebase/firebase.init';

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    

    const authInfo = {};
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;