import { Outlet } from "react-router-dom";
import AuthenNav from "./authenNav";
import SidebarMenu from "./sidebarMenu";
import { ScrollArea } from "@/components/ui/scroll-area";
import SidebarFrientList from "./sidebarFrientList";

export default function AuthenLayout() {
  return (
    <div className="flex h-screen w-screen">
      <SidebarMenu />
      <div className="flex size-full flex-col">
        <AuthenNav />
        <main className="flex size-full flex-1 overflow-x-auto">
          <ScrollArea className="size-full">
            <Outlet />
          </ScrollArea>
          <SidebarFrientList />
        </main>
      </div>
    </div>
  );
}
