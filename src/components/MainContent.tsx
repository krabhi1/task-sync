import { ArrowUpDown, Ellipsis, Menu, Star, UserPlus } from "lucide-react";
import { Button } from "./ui/button";
import AddTask from "./AddTask";
import TaskView from "./TaskView";
import CompletedTasks from "./CompletedTasks";
import { useAppStore, useLeftSidebar } from "@/store/app-store";
import { ScrollArea } from "./ui/scroll-area";
import { useTask } from "@/hooks/use-task";

export default function MainContent({ cId }: { cId?: string }) {
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
      {cId ? (
        <TaskContent cid={cId} />
      ) : (
        <div className="flex flex-1 justify-center items-center font-bold">
          No collection is selected
        </div>
      )}
    </div>
  );
}

function TaskContent({ cid }: { cid: string }) {
  const { tasks, addTask } = useTask(cid);
  const { selectedTask, setSelectedTask } = useAppStore((s) => ({
    selectedTask: s.selectedTask,
    setSelectedTask: s.setSelectedTask,
  }));

  return (
    <div className="mx-6 flex flex-col flex-grow overflow-auto">
      <AddTask onAdd={(name) => addTask(cid, name)} />
      <ScrollArea className=" overflow-auto  flex-grow">
        {/* tasks */}
        <div className="flex flex-col gap-2 mt-3 ">
          {tasks.map((t) => (
            <TaskView
              key={t.id}
              name={t.name}
              status={t.status}
              isSelected={t.id === selectedTask}
              id={t.id}
              onClick={setSelectedTask}
            />
          ))}
        </div>
        {/* completed task */}
        {/* <CompletedTasks /> */}
      </ScrollArea>
    </div>
  );
}
