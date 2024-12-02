import { store } from "@/configs/firebase";
import { toDate } from "@/lib/fire-utils";
import { CreateCollection, CreateTask, Task } from "@/lib/types";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useCollection as _useColl } from "react-firebase-hooks/firestore";

export function useTask(collectionId: string) {
  const tasksRef = collection(store, "collections", collectionId, "tasks");
  const [value, loading, error] = _useColl(tasksRef, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const addTask = useCallback((collectionId: string, name: string) => {
    const task: CreateTask = {
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      name,
      status: "working",
    };
    addDoc(collection(store, "collections", collectionId, "tasks"), task);
  }, []);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  useEffect(() => {
    if (isFirstLoading && value) setIsFirstLoading(false);
  }, [value]);

  const tasks: Task[] = useMemo(() => {
    return value
      ? value.docs.map(
          (doc) =>
            ({
              name: doc.data().name,
              status: doc.data().status,
              userId: doc.data().uid,
              id: doc.id,
              collectionId: collectionId,
              createdAt: toDate(doc.data().createdAt),
              updatedAt: toDate(doc.data().updatedAt),
            } as Task)
        )
      : [];
  }, [value]);
  return { tasks, addTask, loading: isFirstLoading };
}
