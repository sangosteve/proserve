"use client";
import { useSession, getSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { BellDot } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
const Navbar = () => {
  const { data: session, status } = useSession({ required: true });

  return (
    <nav className="fixed z-10 w-full pr-64 px-4  h-12 flex items-center justify-between border border-gray-200 shadow-sm  bg-white">
      <div className="flex items-center"></div>
      <div className="flex items-center">
        <BellDot size={20} className="mr-4 text-gray-500" />
        {/* <div className="h-9 w-9 rounded-full bg-gray-500 flex items-center justify-center">
    
          <p className="text-white">{session?.user?.name?.charAt(0)}</p>
        </div> */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="h-9 w-9 rounded-full bg-gray-500 flex items-center justify-center">
              {/* <p className="text-white">{session?.user?.name?.charAt(0)}</p> */}
              <Image
                style={{ objectFit: "cover", borderRadius: "50%" }}
                src={session?.user?.image}
                width={56}
                height={56}
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Profile</DropdownMenuItem>
            <DropdownMenuItem>Notification Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
