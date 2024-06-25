import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
]);
