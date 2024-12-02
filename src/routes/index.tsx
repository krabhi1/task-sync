import Header from "@/components/Header";
import LeftSidePanel from "@/components/LeftSidePanel";
import MainContent from "@/components/MainContent";
import TaskView from "@/components/TaskView";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useAppStore } from "@/store/app-store";
import { Menu, Ellipsis } from "lucide-react";

export default function Index() {
  const { selectedCollection } = useAppStore((s) => ({
    selectedCollection: s.selectedCollection,
    setSelectedCollection: s.setSelectedCollection,
  }));
  return (
    <div className="m-0 p-0 fixed w-full h-full left-0 top-0  flex flex-col ">
      <Header />
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel minSize={15}>
          <LeftSidePanel />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel minSize={35}>
          <MainContent cId={selectedCollection} />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel minSize={15}>
          <div className="w-[250px] h-full space-y-3 overflow-auto py-3 "></div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
