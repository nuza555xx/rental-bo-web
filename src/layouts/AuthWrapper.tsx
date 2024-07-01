import { ReactNode } from "react";
import { Container, Box } from "@mui/material";

export const AuthWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </Container>
  );
};
