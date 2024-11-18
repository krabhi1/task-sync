import { Bell, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useAuth } from "@/hooks/use-auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { avatarFallback } from "@/lib/utils";

export default function Header() {
  const { photoUrl, name } = useAuth();
  console.log(photoUrl);
  return (
    <div className=" h-12  px-2 py-1 flex justify-between items-center shadow-md">
      <div className="">
        {/* <span>
          <img width={"30px"} height={"30px"} src="/task-sync.svg" alt="Logo" />
        </span> */}
        <span>TaskSync</span>
      </div>
      <div>
        <Input className="bg-white h-8 w-80" />
      </div>
      <div className="flex gap-2 items-center">
        <Button variant="ghost" size="icon">
          <Settings />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Avatar className="w-7 h-7">
          <AvatarImage src={photoUrl} alt="TaskSync" />
          <AvatarFallback>{avatarFallback(name)}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
