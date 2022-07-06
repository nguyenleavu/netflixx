import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '~/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

const UserContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState('');

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth);
    }

    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={{ createUser, user, logout, signIn }}>
            {children}
        </UserContext.Provider>
    );
}

export function UserAuth() {
    return useContext(UserContext);
}
