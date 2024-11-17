import { findFalsyKeys } from "@/lib/utils"


export const env = {
    firebaseApiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    firebaseAppId: import.meta.env.VITE_FIREBASE_APP_ID,
    firebaseAuthDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    firebaseMeasurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    firebaseMessagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    firebaseProjectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    firebaseStorageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
}
//load all env if not exist  throw error
const missingKeys = findFalsyKeys(env)
if (missingKeys.length > 0) {
    throw new Error("Missing keys " + missingKeys)
}