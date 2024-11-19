import { Timestamp } from "firebase/firestore";

export type PartialOnly<T, P extends keyof T> = Omit<Task, P> & Partial<Pick<T, P>>
export type UpdateType<T, N, R extends keyof T = never, P extends keyof T = never> =
    Omit<T, R | P> & N & Partial<Pick<T, P>>;


export type Collection = {
    id: string;
    userId: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    tasks: Task[]
}

export type CreateCollection = UpdateType<Collection, {
    createdAt: Timestamp;
    updatedAt: Timestamp;
}, 'createdAt' | 'id' | 'updatedAt' | 'tasks'>



export type Task = {
    id: string;
    name: string;
    description?: string;
    status: "pending" | "working" | "completed";
    createdAt: Date;
    updatedAt: Date;
}

export type CreateTask = UpdateType<Task, {
    createdAt: Timestamp;
    updatedAt: Timestamp;
}, 'createdAt' | 'id' | 'updatedAt'>