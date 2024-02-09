import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Toaster} from "@/components/shadcn-ui/toaster";
import {TooltipProvider} from "@/components/shadcn-ui/tooltip.tsx";
import {HomePage} from "@/pages/home";
import {LoginPage, SignupPage} from "@/pages/auth";
import {CreatePostPage} from "@/pages/post";
import "./index.css";

// eslint-disable-next-line react-refresh/only-export-components
const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "posts/:id/start",
    element: <CreatePostPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster />
    <TooltipProvider>
      <RouterProvider router={ROUTER} />
    </TooltipProvider>
  </React.StrictMode>
);
