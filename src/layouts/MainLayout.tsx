import { Box } from "@mui/material";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100dvh",
          minWidth: "100dvw",
        }}
      >
        {children}
      </Box>
    </>
  );
};
