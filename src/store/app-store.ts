import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useShallow } from "zustand/react/shallow";

type State = {
    isLeftSidebarOpen: boolean
    selectedCollection?: string;
    selectedTask?: string;
}
type Action = {
    toggleLeftSideBar: () => void
    setSelectedCollection: (name: string) => void;
    setSelectedTask: (name: string) => void;
}

type StateAndAction = State & Action


const _useAppStore = create<StateAndAction>()(
    immer((set, get) => ({
        isLeftSidebarOpen: true,
        toggleLeftSideBar() {
            set(d => {
                d.isLeftSidebarOpen = !d.isLeftSidebarOpen
            })
        },
        setSelectedCollection(name) {
            set(d => {
                d.selectedCollection = name
            })
        },
        setSelectedTask(name) {
            set(d => {
                d.selectedTask = name;
            })
        },
    })
    )
);

export function useAppStore<U>(s: (state: StateAndAction) => U) {
    return _useAppStore(
        useShallow(s)
    )
}

export function useLeftSidebar() {
    return useAppStore(s => ({
        isLeftSidebarOpen: s.isLeftSidebarOpen,
        toggleLeftSideBar: s.toggleLeftSideBar
    }))
}