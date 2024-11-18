import { ArrowUpDown, Ellipsis, Menu, UserPlus } from "lucide-react";
import { Button } from "./ui/button";
import AddTask from "./AddTask";

export default function MainContent() {
  return (
    <div className="">
      {/* Header */}
      <div className="mx-6 my-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Menu />
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
      <div className="mx-6  h-full">
        <AddTask />

        {/* tasks */}
        {/* completed task */}
      </div>
    </div>
  );
}
