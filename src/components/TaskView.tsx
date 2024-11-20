import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Task } from "@/lib/types";

export default function TaskView({
  id,
  name,
  onClick,
  isSelected,
}: {
  id: string;
  name: string;
  onClick?: (id: string) => void;
  isSelected?: boolean;
  status: Task["status"];
}) {
  return (
    <div
      className={`flex items-center px-5 justify-between h-[50px] shadow-sm border rounded-sm ${
        isSelected && "!bg-blue-50"
      }`}
      onClick={() => onClick?.(id)}
    >
      <div className="flex items-center gap-2  ">
        <Checkbox />
        <Label>{name}</Label>
      </div>
      <Button variant="ghost" size="icon">
        <Star />
      </Button>
    </div>
  );
}
