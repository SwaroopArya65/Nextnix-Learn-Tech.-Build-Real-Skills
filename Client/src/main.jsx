import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

// Context Provider
import { ModalProvider as ModalContextProvider } from "./context/ModalContext";

// Global Modal Renderer
import ModalProvider from "./components/common/ModalProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalContextProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ModalContextProvider>
  </StrictMode>
);