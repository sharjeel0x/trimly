import { Button } from "@/components/ui/button";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import RedirectLink from "./pages/RedirectLink";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,

      children: [
        {
          path: "/",

          element: <LandingPage />,
        },

        {
          path: "/auth",

          element: <Auth />,
        },

        {
          path: "/dashboard",

          element: <Dashboard />,
        },

        {
          path: "/link/:id",

          element: <Link />,
        },

        {
          path: "/:id",

          element: <RedirectLink />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
