import { useCollection as _useColl } from "react-firebase-hooks/firestore";
import {
    addDoc,
    collection,
    doc,
    query,
    serverTimestamp,
    setDoc,
    Timestamp,
    where,
} from "firebase/firestore";
import { useAuth } from "./use-auth";
import { store } from "@/configs/firebase";
import { Collection, CreateCollection, CreateTask, Task } from "@/lib/types";
import { toDate } from "@/lib/fire-utils";
import { useCallback, useMemo } from "react";

export function useCollection() {
    const { uid } = useAuth();

    const collectionPath = collection(store, "collections")
    const q = query(collectionPath, where("userId", "==", uid));
    const [value, loading, error] = _useColl(q, {
        snapshotListenOptions: { includeMetadataChanges: true },
    });
    const collections: Collection[] = useMemo(() => {
        return value
            ? value.docs.map(
                (doc) =>
                ({
                    name: doc.data().name,
                    status: doc.data().status,
                    userId: doc.data().uid,
                    id: doc.id,
                    createdAt: toDate(doc.data().createdAt),
                    updatedAt: toDate(doc.data().updatedAt),

                } as Collection)
            )
            : [];
    }, [value])
    const addCollection = useCallback(async (pColl: Pick<Collection, 'name'>) => {

        const createColl: CreateCollection = {
            name: pColl.name,
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now(),
            userId: uid
        }
        addDoc(collection(store, "collections"), createColl)

    }, [uid])

    return { collections, addCollection }
}

