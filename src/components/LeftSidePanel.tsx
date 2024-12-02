import { Menu, PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useAppStore, useLeftSidebar } from "@/store/app-store";
import { ScrollArea } from "./ui/scroll-area";
import CollectionListItem from "./CollectionListItem";
import { Input } from "./ui/input";
import { useCollection } from "@/hooks/use-collection";
import React, { useState } from "react";

export default function LeftSidePanel() {
  const { toggleLeftSideBar } = useLeftSidebar();
  const { collections, addCollection } = useCollection();
  const [inputValue, setInputValue] = useState("");

  const { selectedCollection, setSelectedCollection } = useAppStore((s) => ({
    selectedCollection: s.selectedCollection,
    setSelectedCollection: s.setSelectedCollection,
  }));
  function onInput(e: React.KeyboardEvent<HTMLInputElement>) {
    if (inputValue.trim().length > 0 && e.key == "Enter") {
      addCollection({ name: inputValue });
      setInputValue("");
    }
  }

  return (
    <div className=" h-full overflow-auto flex flex-col">
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
          <CollectionListItem
            onClick={setSelectedCollection}
            key={c.id}
            name={c.name}
            id={c.id}
            isSelected={c.id === selectedCollection}
          />
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
