import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import RootPage from "./pages/RootPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/event/:id",
        element: <EventDetail />,
      },
    ],
  },
]);
