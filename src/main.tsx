import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Toaster} from "@/components/shadcn-ui/toaster";
import {TooltipProvider} from "@/components/shadcn-ui/tooltip.tsx";
import {HomePage} from "@/pages/home";
import {LoginPage, SignupPage} from "@/pages/auth";
import {CreatePostPage, PostPage} from "@/pages/post";
import {PostListPage, PostProgressionPage} from "@/pages/dashboard";
import {DashboardLayout} from "@/layout";
import {ProfilePage} from "@/pages/profile";
import {PaymentPage} from "@/pages/payment";
import {Authenticated} from "@/features/auth";

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
    path: "/profile",
    element: (
      <Authenticated>
        <ProfilePage />
      </Authenticated>
    ),
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/posts/:id",
    element: <PostPage />,
  },
  {
    path: "/posts/:id/launch",
    element: (
      <Authenticated>
        <CreatePostPage />
      </Authenticated>
    ),
  },
  {
    path: "posts/:id/payments",
    element: (
      <Authenticated>
        <PaymentPage />
      </Authenticated>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Authenticated>
        <DashboardLayout />
      </Authenticated>
    ),
    children: [
      {
        path: "posts",
        element: <PostListPage />,
      },
      {
        path: "posts/:id",
        element: <PostProgressionPage />,
      },
    ],
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
