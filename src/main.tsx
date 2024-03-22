import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Intro from "./pages/Intro/Intro";
import Resume from "./pages/Resume/Resume";

import "./main.scss";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/intro",
    element: <Intro />,
  },
 
  {
    path: "/resume",
    element: <Resume />,
  },
 
]);

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
