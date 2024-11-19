import { Menu, PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useLeftSidebar } from "@/store/app-store";
import { ScrollArea } from "./ui/scroll-area";
import TaskView from "./TaskView";
import CollectionListItem from "./CollectionListItem";
import { Input } from "./ui/input";
import { useCollection } from "@/hooks/use-collection";
import React, { useState } from "react";

export default function LeftSidePanel() {
  const { isLeftSidebarOpen, toggleLeftSideBar } = useLeftSidebar();
  const { collections, addCollection } = useCollection();
  const [inputValue, setInputValue] = useState("");
  if (!isLeftSidebarOpen) return null;
  function onInput(e: React.KeyboardEvent<HTMLInputElement>) {
    if (inputValue.trim().length > 0 && e.key == "Enter") {
      addCollection({ name: inputValue });
      setInputValue("");
    }
  }
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
        {collections.map((c) => (
          <CollectionListItem key={c.id} name={c.name} id={c.id} />
        ))}
      </ScrollArea>
      <div className="w-full flex p-2 items-center gap-2">
        <PlusIcon absoluteStrokeWidth />
        <Input
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={onInput}
          value={inputValue}
        />
      </div>
    </div>
  );
}
