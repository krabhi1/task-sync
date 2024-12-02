import { ArrowUpDown, Ellipsis, Menu, Star, UserPlus } from "lucide-react";
import { Button } from "./ui/button";
import AddTask from "./AddTask";
import TaskView from "./TaskView";
import { useAppStore, useLeftSidebar } from "@/store/app-store";
import { ScrollArea } from "./ui/scroll-area";
import { useTask } from "@/hooks/use-task";

export default function MainContent({ cId }: { cId?: string }) {
  const { isLeftSidebarOpen, toggleLeftSideBar } = useLeftSidebar();

  return (
    <div className="flex-grow flex flex-col h-full  ">
      {/* Header */}
      <div className="mx-6 my-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isLeftSidebarOpen ? (
            <Button variant="ghost" size="icon">
              <Star />
            </Button>
          ) : (
            <Button
              onClick={() => toggleLeftSideBar()}
              variant="ghost"
              size="icon"
            >
              <Menu />
            </Button>
          )}

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
    <div className="mx-6 flex flex-col   h-full overflow-hidden gap-2">
      <AddTask onAdd={(name) => addTask(cid, name)} />
      <ScrollArea className=" flex-1 my-2">
        {/* tasks */}
        <div className="flex flex-col gap-2 ">
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
