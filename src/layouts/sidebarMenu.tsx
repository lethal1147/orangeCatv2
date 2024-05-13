// eslint-disable-next-line object-curly-newline
import {
  DumbbellIcon,
  HomeIcon,
  LayoutDashboard,
  StarIcon,
  UserIcon,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuItemType } from "@/types";
import logo from "@/assets/navbar-logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib";
import { ModeToggle } from "@/components";

const SIDEBAR_MENUS: MenuItemType[] = [
  {
    icon: <HomeIcon />,
    id: "home",
    path: "/home",
  },
  {
    icon: <LayoutDashboard />,
    id: "dashboard",
    path: "/dashboard",
  },
  {
    icon: <UserIcon />,
    id: "profile",
    path: "/profile",
  },
  {
    icon: <DumbbellIcon />,
    id: "activity",
    path: "/activity",
  },
  {
    icon: <StarIcon />,
    id: "leaderboard",
    path: "/leaderboard",
  },
];

export default function SidebarMenu() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <nav className="flex h-full w-[100px] flex-col justify-between border-r border-main-orange-300 bg-main-orange-300 py-10">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center border-b border-white pb-5">
          <Avatar>
            <AvatarImage alt="web-logo" src={logo} />
            <AvatarFallback>Orange&apos;s Cat</AvatarFallback>
          </Avatar>
        </div>
        {SIDEBAR_MENUS.map((menu: MenuItemType) => (
          <Button
            className={cn(
              "mx-auto bg-main-orange-300 text-gray-text transition hover:bg-white",
              pathname.startsWith(menu.path)
                ? "bg-white text-main-orange-300"
                : "",
            )}
            asChild
            key={menu.id}
          >
            <Link to={menu.path}>{menu.icon}</Link>
          </Button>
        ))}
      </div>
      <div className="self-center ">
        <ModeToggle />
      </div>
    </nav>
  );
}
