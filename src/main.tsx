import "./index.css";
import "@/configs/env";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "~react-pages";
import { AuthProvider } from "./contexts/AuthContext";
function Main() {
  return <>{useRoutes(routes)}</>;
}
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <AuthProvider unProtectedPaths={["/signin", "/signup","forget-password"]}>
        <Main />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
