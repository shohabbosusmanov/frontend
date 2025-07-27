import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={routes} />
);
