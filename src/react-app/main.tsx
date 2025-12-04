import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore: CSS module declaration missing
import "./index.css";
import App from "@/react-app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);