import { initializeApp } from "firebase/app";
import { getAuth, signOut as logOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { env } from "./env";

// Initialize Firebase
const app = initializeApp({
    apiKey: env.firebaseApiKey,
    appId: env.firebaseAppId,
    authDomain: env.firebaseAuthDomain,
    measurementId: env.firebaseMeasurementId,
    messagingSenderId: env.firebaseMessagingSenderId,
    projectId: env.firebaseProjectId,
    storageBucket: env.firebaseStorageBucket
});
const auth = getAuth(app);

//fire store
const store = getFirestore(app)


export { app, auth, store };