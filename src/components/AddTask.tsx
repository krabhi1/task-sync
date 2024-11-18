import { Bell, CalendarDays, Repeat } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";

export default function AddTask() {
  return (
    <div className=" flex flex-col shadow-sm border">
      <div className="flex items-center mx-5 gap-2 mt-3">
        <Checkbox />
        <Input />
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
        <Button size={"sm"}>Add</Button>
      </div>
    </div>
  );
}
