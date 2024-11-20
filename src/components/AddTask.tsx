import { Bell, CalendarDays, Repeat } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { useState } from "react";

export default function AddTask({ onAdd }: { onAdd?: (name: string) => void }) {
  const [text, setText] = useState("");
  return (
    <div className=" flex flex-col shadow-sm border rounded-sm">
      <div className="flex items-center mx-5 gap-2 mt-3">
        <Checkbox />
        <Input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="flex items-center justify-between p-2">
        <div className="flex gap-2 items-center   ">
          <Button variant="ghost" size="icon">
            <CalendarDays />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell />
          </Button>
          <Button variant="ghost" size="icon">
            <Repeat />
          </Button>
        </div>
        <Button
          onClick={() => {
            text.trim().length > 0 && onAdd?.(text);
            setText("");
          }}
          size={"sm"}
        >
          Add
        </Button>
      </div>
    </div>
  );
}
