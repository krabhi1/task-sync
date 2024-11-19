import { Menu, PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useLeftSidebar } from "@/store/app-store";
import { ScrollArea } from "./ui/scroll-area";
import TaskView from "./TaskView";
import CollectionListItem from "./CollectionListItem";
import { Input } from "./ui/input";

export default function LeftSidePanel() {
  const { isLeftSidebarOpen, toggleLeftSideBar } = useLeftSidebar();
  if (!isLeftSidebarOpen) return null;
  return (
    <div className="w-[250px] h-full overflow-auto flex flex-col">
      <div className="mx-6 my-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            onClick={() => toggleLeftSideBar()}
            variant="ghost"
            size="icon"
          >
            <Menu />
          </Button>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
        <CollectionListItem />
      </ScrollArea>
      <div className="w-full flex p-2 items-center gap-2">
        <PlusIcon absoluteStrokeWidth />
        <Input />
      </div>
    </div>
  );
}
