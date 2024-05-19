import { Users } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function SidebarFrientList() {
  return (
    <div className="w-[200px] bg-blue-200 p-5">
      <div className="flex gap-5 font-bold text-main-orange-500">
        <Users />
        <h3>Friends</h3>
      </div>
      <ScrollArea>
        <div>
          <Avatar>
            <AvatarImage />
            {/* <AvatarFallback></AvatarFallback> */}
          </Avatar>
        </div>
      </ScrollArea>
    </div>
  );
}
