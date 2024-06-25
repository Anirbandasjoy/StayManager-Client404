/* eslint-disable @typescript-eslint/no-explicit-any */
// import { FaRegBookmark } from "react-icons/fa";
import {
  BiComment,
  BiEdit,
  BiLike,
  BiShare,
  BiSolidLike,
} from "react-icons/bi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Link } from "react-router-dom";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { BsThreeDots } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuBookmarkPlus } from "react-icons/lu";
// import useFetchNews from "@/hooks/news/useFetchNews";

import { RiDeleteBin6Line } from "react-icons/ri";

import { AiOutlineCheckCircle } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";

// import likeSound from "../../../assets/audio/like.mp3";
import { DateTimeFormatOptions } from "@/helper/type";
import ShareNews from "./ShareNews";

const NoticeCard = ({ notice }: { notice?: any }) => {
  //   const [playLikeSound, setPlayLikeSound] = useState(false);

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "";

    const options: DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  //   useEffect(() => {
  //     if (playLikeSound) {
  //       const audio = new Audio(likeSound);
  //       audio.play();
  //       audio.onended = () => {
  //         setPlayLikeSound(false);
  //       };
  //     }
  //   }, [playLikeSound]);

  return (
    <div className="">
      <div className="bg-white  rounded-md pb-4 dark:border dark:border-gray-700 dark:bg-gray-800">
        <div className="p-4 space-y-3">
          <div className="flex   justify-between">
            <Link
              to={`/profile/${notice?.profileId?.email}`}
              className="flex gap-3 "
            >
              <div className="relative">
                {notice?.profileId?.profileImage !== null ? (
                  <div>
                    <div className="font-bold capitalize bg-blue-600 h-10 w-10 rounded-full text-sm flex justify-center items-center text-white">
                      Ad
                    </div>
                  </div>
                ) : (
                  <div className="w-11 h-11">
                    <img
                      className="w-full h-full rounded-full object-cover cursor-pointer"
                      src={notice?.profileId?.profileImage}
                      alt="profile"
                    />
                  </div>
                )}
                {notice?.profileId?.isVerified === "verified" && (
                  <FcApproval className="text-[17px] absolute -bottom-1 right-[1px]" />
                )}
              </div>
              <div className="relative">
                <h1 className="font-semibold text-gray-600 dark:text-gray-300">
                  {notice?.profileId?.fullName}
                </h1>
                <h2 className="text-xs text-gray-600 dark:text-gray-300">
                  {formatDate(notice?.profileId?.createdAt)}
                </h2>
                {notice?.status === "approved" && (
                  <div className="flex gap-1 absolute -right-24 -top-1">
                    <AiOutlineCheckCircle className="text-red-500 text-[14px]" />
                    <h1 className="text-xs text-red-500">Verifed News</h1>
                  </div>
                )}
              </div>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="mr-2">
                  <BsThreeDots className="sm:text-3xl text-xl cursor-pointer text-gray-600 dark:text-gray-300" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <div className="flex gap-1 items-center cursor-pointer">
                    <LuBookmarkPlus />
                    Bookmark
                  </div>
                </DropdownMenuItem>
                <>
                  <DropdownMenuItem>
                    <Link
                      to={`/edit-post/${notice?._id}`}
                      className="flex gap-1 items-center cursor-pointer"
                    >
                      <BiEdit />
                      Edit
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex gap-1 items-center cursor-pointer">
                      <RiDeleteBin6Line />
                      Delete
                    </div>
                  </DropdownMenuItem>
                </>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <h1 className="text-sm font-semibold  text-gray-600 dark:text-gray-300">
              Paragraphs are the building blocks of papers. Many students define
              paragraphs in terms of length: a paragraph is a group of at least
              five sentences, a paragraph is half a page long, etc. In reality,
              though, the unity and coherence of ideas among sentences is what
              constitutes a paragraph.
            </h1>
          </div>
        </div>
        <div className="w-full space-y-3 ">
          <Link
            to={`/news-details/${notice?._id}`}
            className="w-full cursor-pointer"
          >
            {/* <img
              className="w-full h-full bg-cover"
              src="https://images.unsplash.com/photo-1718973818150-9c0c855d33b0?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Notice"
            /> */}
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-300 px-4">
            {notice?.details?.slice(0, 400)}
            <Link
              className="ml-3 text-[#d72050] dark:text-red-400"
              to={`/news-details/${notice?._id}`}
            >
              Read_More
            </Link>
          </p>
        </div>
        <div className="mt-8 mb-2">
          <div className="flex justify-around px-8">
            <div className="flex gap-1 items-center">
              <BiSolidLike className="text-green-400" />

              <Dialog>
                <DialogTrigger>
                  <p className="text-xs text-gray-600">
                    12
                    <span className="cursor-pointer hover:underline ml-[2px]">
                      others
                    </span>
                  </p>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <h1 className="text-green-500 font-bold">ALL</h1>
                    </DialogTitle>
                    <div className="w-full h-[1px] bg-gray-500"></div>
                    <DialogDescription>hello</DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex gap-1  items-center">
              <BiComment className="text-green-400" />
              <Dialog>
                <DialogTrigger>
                  <p className="text-xs text-gray-600">
                    10
                    <span className="cursor-pointer hover:underline ml-[2px]">
                      others
                    </span>
                  </p>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <h1 className="text-green-500 font-bold">ALL</h1>
                    </DialogTitle>
                    <div className="w-full h-[1px] bg-gray-500"></div>
                    <DialogDescription>hello</DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex gap-1 items-center cursor-pointer">
              <BiShare className="text-green-400" />
              <p className="text-xs text-gray-600">12</p>
            </div>
          </div>
        </div>
        <div className=" sm:px-4 w-11/12 mx-auto h-[1px] bg-gray-200 dark:bg-gray-700"></div>
        <div className="sm:px-4 mt-2 flex gap-6 sm:gap-0 items-center justify-around ">
          <div className="flex items-center gap-1 cursor-pointer  hover:bg-gray-100 dark:hover:bg-gray-700 py-1 justify-start rounded-sm duration-200 px-4">
            <BiLike className="text-[21px] text-gray-500 dark:text-gray-300" />
            <p className="text-[17px] font-bold text-gray-500 dark:text-gray-300">
              Like
            </p>
          </div>
          <div>
            <Drawer>
              <DrawerTrigger>
                <div className="flex items-center gap-1 cursor-pointer w-full hover:bg-gray-100 dark:hover:bg-gray-700 py-1 justify-center rounded-sm duration-200 px-4">
                  <BiComment className="text-[21px] w-full text-gray-500 dark:text-gray-300" />
                  <p className="text-[17px] font-bold text-gray-500 dark:text-gray-300">
                    Comment
                  </p>
                </div>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum ipsa beatae, ullam necessitatibus totam aliquam quas
                  harum magnam obcaecati cupiditate ad voluptates at animi ut
                  ipsam mollitia id tempora voluptatem iure eum omnis dolore.
                  Odit dolores vitae explicabo ratione asperiores.
                </DrawerHeader>
              </DrawerContent>
            </Drawer>
          </div>
          <div>
            <ShareNews />
          </div>
        </div>
        <div className=" sm:px-4 w-11/12 mx-auto h-[1px] mt-2  bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div>
  );
};

export default NoticeCard;
