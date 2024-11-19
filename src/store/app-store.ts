import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useShallow } from "zustand/react/shallow";

type State = {
    isLeftSidebarOpen: boolean
}
type Action = {
    toggleLeftSideBar: () => void
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