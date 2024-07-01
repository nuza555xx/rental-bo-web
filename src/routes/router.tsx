import { ForgotPasswordPage, SignInPage, SignUpPage } from "@pages";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectRoute";
import { AdminLayout } from "@layouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute layout={<AdminLayout />} />,
    children: [
      // {
      //   path: "dashboard",
      //   element: <Dashboard />,
      // },
      // {
      //   path: "profile",
      //   element: <Profile />,
      // },
    ],
  },
  {
    path: "/authentications",
    children: [
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
    ],
  },
]);
