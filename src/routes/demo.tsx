import { useCollection } from "react-firebase-hooks/firestore";
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
import React from "react";
import { nanoid } from "nanoid";
import { Button } from "@/components/ui/button";
import { store } from "@/configs/firebase";
import { signOut, toDate } from "@/lib/fire-utils";
import { useAuth } from "@/hooks/use-auth";
type Task = {
  uid: string;
  name: string;
  status: "completed" | "pending" | "working";
  createdAt: Date;
  id: string;
};
type CreateTask = Omit<Task, "id" | "createdAt"> & {
  createdAt: Timestamp;
};
function addTask(task: CreateTask) {
  return addDoc(collection(store, "tasks"), {
    ...task,
  });
}

export default function Demo() {
  const { uid, name, email } = useAuth();
  const q = query(collection(store, "tasks"), where("uid", "==", uid));
  const [value, loading, error] = useCollection(q, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const tasks: Task[] = value
    ? value.docs.map(
        (doc) =>
          ({
            name: doc.data().name,
            status: doc.data().status,
            uid: doc.data().uid,
            id: doc.id,
            createdAt: toDate(doc.data().createdAt),
          } as Task)
      )
    : [];

  return (
    <div>
      <h1>FireStore</h1>
      <p>
        {uid} {name} {email}
      </p>
      <div className="p-2 border">
        <Button onClick={signOut}>SignOut</Button>
      </div>
      <div>
        <Button
          onClick={() =>
            addTask({
              name: "Task " + value?.docs.length || "",
              status: "working",
              uid: uid,
              createdAt: Timestamp.now(),
            })
          }
        >
          Add Task
        </Button>
      </div>
      <div>
        <div>
          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {loading && <span>Collection: Loading...</span>}
          {value && (
            <div className="flex flex-col gap-2 p-2">
              Collection:{" "}
              {tasks.map((task) => (
                <div className="border" key={task.id}>
                  {task.name} | {task.status} | {task.id} |{" "}
                  {task.createdAt.toString()}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
