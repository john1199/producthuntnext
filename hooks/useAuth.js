import { useEffect, useState } from "react";
import firebase from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const useAuth = () => {
    const [userAuth, setUserAuth] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebase.auth, (user) => {
            if (user) {
                setUserAuth(user);
            } else {
                setUserAuth(null);
            }
        });
        return () => unsubscribe();
    }, []);

    return userAuth;
};

export default useAuth;
