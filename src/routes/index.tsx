import Header from "@/components/Header";
import LeftSidePanel from "@/components/LeftSidePanel";
import MainContent from "@/components/MainContent";
import TaskView from "@/components/TaskView";
import { Button } from "@/components/ui/button";
import { Menu, Ellipsis } from "lucide-react";

export default function Index() {
  return (
    <div className="m-0 p-0 fixed w-full h-full left-0 top-0 overflow-hidden flex flex-col ">
      <Header />
      <div className="flex overflow-auto">
        <LeftSidePanel />
        <MainContent />
        <div className="w-[250px] h-full space-y-3 overflow-auto py-3 ">
          <TaskView />
          <TaskView />
          <TaskView />
          <TaskView />
          <TaskView />
          <TaskView />
          <TaskView />
          <TaskView />
          <TaskView />
          <TaskView />
          <TaskView />
          <TaskView />
          <TaskView />
          <TaskView />
          <TaskView />
          <TaskView />
        </div>
      </div>
    </div>
  );
}
