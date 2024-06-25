import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BellRing,
  Github,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
const Navbar = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleLogOut = () => {
    toast({
      title: "Log Out Successfully",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
  };
  return (
    <div className="py-4 bg-blue-300 rounded-sm dark:bg-gray-800 ">
      <div>
        <nav className="w-full  lg:max-w-4xl mx-auto xl:max-w-6xl 2xl:max-w-7xl px-4 lg:px-0">
          <div className=" flex flex-wrap items-center justify-between mx-auto lg:px-8">
            <h1 className="font-sans text-xl font-bold">Stay Manager</h1>
            <div className="flex md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse">
              <div className="flex items-center justify-center gap-4 ">
                <BellRing className="mr-2 h-6 w-6 cursor-pointer" />

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel className="cursor-pointer">
                      My Account
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <Link to="/dashboard">Dashboard</Link>
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Users className="mr-2 h-4 w-4" />
                        <span>Team</span>
                      </DropdownMenuItem>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          <UserPlus className="mr-2 h-4 w-4" />
                          <span>Invite users</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem>
                              <Mail className="mr-2 h-4 w-4" />
                              <span>Email</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <MessageSquare className="mr-2 h-4 w-4" />
                              <span>Message</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <PlusCircle className="mr-2 h-4 w-4" />
                              <span>More...</span>
                            </DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                      <DropdownMenuItem>
                        <BellRing className="mr-2 h-4 w-4" />
                        <span>Notifications</span>
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Github className="mr-2 h-4 w-4" />
                      <span>GitHub</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LifeBuoy className="mr-2 h-4 w-4" />
                      <span>Support</span>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => setIsOpenModal(!isOpenModal)}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <h1>Log out</h1>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div
              className={`items-center sm:ml-[78px] hidden sm:block ml-0 z-10 mt-4 sm:mt-0 justify-between duration-700 w-full md:flex md:w-auto `}
              id="navbar-sticky"
            >
              {/* <ul className="flex absolute sm:static w-full  sm:dark:bg-gray-800 flex-col p-4 md:p-0 font-medium  rounded-sm  border-gray-300 border sm:border-none dark:text-white dark:bg-gray-800   dark:border-gray-600 bg-gray-300 sm:bg-white  md:space-x-20  md:flex-row md:mt-0 ">
                <li>
                  <NavLink
                    to="/"
                    className="  duration-300 font-bold py-2 px-3 text-gray-700 rounded  md:hover:bg-transparent  md:p-0 hover:text-[#d72050] dark:hover:text-[#e66f8f]   dark:text-gray-300 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 flex flex-col items-center justify-center"
                  >
                    <BiHomeAlt className="text-2xl" />
                    <p className="text-[10px]">Home</p>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/create-post"
                    className=" duration-300 font-bold py-2 px-3 text-gray-700 rounded  md:hover:bg-transparent hover:text-[#d72050] md:p-0  dark:text-gray-300 dark:hover:bg-gray-700  dark:hover:text-[#e66f8f] md:dark:hover:bg-transparent dark:border-gray-700 flex flex-col items-center justify-center"
                  >
                    <GoPlusCircle className="text-2xl" />
                    <p className="text-[10px]">Post</p>
                  </NavLink>
                </li>
              </ul> */}
            </div>
          </div>
        </nav>
      </div>
      <AlertDialog open={isOpenModal} onOpenChange={setIsOpenModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">
              Are you absolutely sure?
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter className=" text-left">
            <AlertDialogCancel className="text-center w-full">
              No
            </AlertDialogCancel>
            <AlertDialogAction className="w-full" onClick={handleLogOut}>
              Yes
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Navbar;
