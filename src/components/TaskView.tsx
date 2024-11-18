import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

export default function TaskView() {
  return (
    <div className="flex items-center px-5 justify-between h-[50px] shadow-sm border ">
      <div className="flex items-center gap-2  ">
        <Checkbox />
        <Label>UI design</Label>
      </div>
      <Button variant="ghost" size="icon">
        <Star />
      </Button>
    </div>
  );
}
