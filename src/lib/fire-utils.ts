import { auth } from "@/configs/firebase";
import { signOut as logOut } from "firebase/auth";
import { Timestamp } from "firebase/firestore";

export function signOut() {
    return logOut(auth)
}

export function toDate(time: Timestamp) {
    return new Date(1000 * time.seconds)
}