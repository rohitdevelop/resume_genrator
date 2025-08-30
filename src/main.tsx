import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ResumeProvider } from "./Context/ResumeContext"; // adjust path
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ResumeProvider>
      <App />
    </ResumeProvider>
  </BrowserRouter>
);
