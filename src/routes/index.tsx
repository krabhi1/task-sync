import Header from "@/components/Header";
import LeftSidePanel from "@/components/LeftSidePanel";
import MainContent from "@/components/MainContent";
import TaskView from "@/components/TaskView";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/app-store";
import { Menu, Ellipsis } from "lucide-react";

export default function Index() {
  const { selectedCollection } = useAppStore((s) => ({
    selectedCollection: s.selectedCollection,
    setSelectedCollection: s.setSelectedCollection,
  }));
  return (
    <div className="m-0 p-0 fixed w-full h-full left-0 top-0 overflow-hidden flex flex-col ">
      <Header />
      <div className="flex overflow-auto flex-1">
        <LeftSidePanel />
        <MainContent cId={selectedCollection} />
        <div className="w-[250px] h-full space-y-3 overflow-auto py-3 "></div>
      </div>
    </div>
  );
}
