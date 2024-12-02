import Header from "@/components/Header";
import LeftSidePanel from "@/components/LeftSidePanel";
import MainContent from "@/components/MainContent";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useAppStore, useLeftSidebar } from "@/store/app-store";

export default function Index() {
  const { selectedCollection } = useAppStore((s) => ({
    selectedCollection: s.selectedCollection,
    setSelectedCollection: s.setSelectedCollection,
  }));
  const { isLeftSidebarOpen } = useLeftSidebar();

  return (
    <div className="m-0 p-0 fixed w-full h-full left-0 top-0  flex flex-col ">
      <Header />
      <ResizablePanelGroup direction="horizontal" className="h-full">
        {isLeftSidebarOpen && (
          <>
            <ResizablePanel minSize={15} order={1}>
              <LeftSidePanel />
            </ResizablePanel>
            <ResizableHandle />
          </>
        )}
        <ResizablePanel minSize={35} order={2}>
          <MainContent cId={selectedCollection} />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel minSize={15} order={3}>
          <div className="w-[250px] h-full space-y-3 overflow-auto py-3 "></div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
