import { ArrowUpDown, Ellipsis, Menu, Star, UserPlus } from "lucide-react";
import { Button } from "./ui/button";
import AddTask from "./AddTask";
import TaskView from "./TaskView";
import CompletedTasks from "./CompletedTasks";
import { useLeftSidebar } from "@/store/app-store";
import { ScrollArea } from "./ui/scroll-area";

export default function MainContent() {
  const { isLeftSidebarOpen, toggleLeftSideBar } = useLeftSidebar();

  return (
    <div className="flex-grow flex flex-col overflow-auto">
      {/* Header */}
      <div className="mx-6 my-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            onClick={() => !isLeftSidebarOpen && toggleLeftSideBar()}
            variant="ghost"
            size="icon"
          >
            {isLeftSidebarOpen ? <Star /> : <Menu />}
          </Button>
          <span>Collection 1</span>
          <Button variant="ghost" size="icon">
            <Ellipsis />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <ArrowUpDown />
          </Button>
          <Button variant="ghost" size="icon">
            <UserPlus />
          </Button>
        </div>
      </div>
      {/* addtask and tasks */}
      <div className="mx-6 flex flex-col flex-grow overflow-auto">
        <AddTask />
        <ScrollArea className=" overflow-auto  flex-grow">
          {/* tasks */}
          <div className="flex flex-col gap-2 mt-3 ">
            <TaskView />
            <TaskView />
            <TaskView />
            <TaskView />
          </div>
          {/* completed task */}
          <CompletedTasks />
        </ScrollArea>
      </div>
    </div>
  );
}
