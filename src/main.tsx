import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import ReduxWrapper from "./redux/ReduxWrapper";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxWrapper>
      <RouterProvider router={router} />
    </ReduxWrapper>
  </React.StrictMode>
);
