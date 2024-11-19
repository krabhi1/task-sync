import { store } from "@/configs/firebase";
import { toDate } from "@/lib/fire-utils";
import { Task } from "@/lib/types";
import { collection } from "firebase/firestore";
import { useMemo } from "react";
import { useCollection as _useColl } from "react-firebase-hooks/firestore";


export function useTask(collectionId: string) {
    const tasksRef = collection(store, "collections", collectionId, "tasks");
    const [value, loading, error] = _useColl(tasksRef, {
        snapshotListenOptions: { includeMetadataChanges: true },
    });
    const tasks: Task[] = useMemo(() => {
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
                    tasks: []

                } as Task)
            )
            : [];
    }, [value])
    return { tasks }
}