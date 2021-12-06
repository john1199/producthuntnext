import { initializeApp, getApps } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import firebaseConfig from "./config";

class Firebase {
    constructor() {
        if (!getApps().length) {
            const app = initializeApp(firebaseConfig);
            this.auth = getAuth(app);
        }
    }

    async register(name, email, password) {
        const newUser = await createUserWithEmailAndPassword(
            this.auth,
            email,
            password
        );
        await updateProfile(this.auth.currentUser, {
            displayName: name,
        });
    }
}

const firebase = new Firebase();
export default firebase;
