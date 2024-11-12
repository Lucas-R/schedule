import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { Home } from "@/Pages/home";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

export function Router() {
    return <RouterProvider router={router} />
}