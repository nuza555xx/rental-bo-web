import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@routes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@theme";
import "@style";
import { MainLayout } from "@layouts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <MainLayout>
        <CssBaseline />
        <RouterProvider router={router} />
      </MainLayout>
    </ThemeProvider>
  </StrictMode>
);
