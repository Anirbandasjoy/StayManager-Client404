import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardHome from "@/pages/dashboard/home/DashboardHome";
import Users from "@/pages/dashboard/users/Users";
import Save from "@/pages/dashboard/save/Save";
import Bookings from "@/pages/dashboard/bookings/Bookings";
import Students from "@/pages/dashboard/students/Students";
import Rooms from "@/pages/dashboard/rooms/Rooms";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "save",
        element: <Save />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "rooms",
        element: <Rooms />,
      },
    ],
  },
]);
