import { Bell, LogOutIcon, UserIcon } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthStore } from "@/stores";

export default function AuthenNav() {
  const { logoutHandler, userData } = useAuthStore();
  return (
    <header className="flex w-full px-5 py-3 shadow-lg">
      <nav className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-bold text-main-orange-300">Dashboard</h2>

        <div className="flex gap-3">
          <div className="flex size-10 cursor-pointer items-center justify-center rounded-full transition hover:bg-main-orange-500 hover:text-white">
            <Bell className="size-6 " />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer" asChild>
              <Avatar>
                <AvatarImage
                  src={`data:${userData?.profileImageId.imageType};base64,${userData?.profileImageId.image}`}
                  alt="@shadcn"
                />
                <AvatarFallback className="font-bold text-main-orange-300">
                  {userData?.firstName[0]}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>
                {userData?.firstName} {userData?.lastName}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>
                    <UserIcon className="size-4" />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Instagram
                <DropdownMenuShortcut>
                  <FaInstagram className="size-4" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Facebook
                <DropdownMenuShortcut>
                  <FaFacebook className="size-4" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Twitter
                <DropdownMenuShortcut>
                  <FaTwitter className="size-4" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="focus:bg-rose-300"
                onClick={logoutHandler}
              >
                Log out
                <DropdownMenuShortcut>
                  <LogOutIcon className="size-4" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
