import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { MenuItem } from "./MenuItem";

export const AdminLayout = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Navbar />
        <MenuItem />
        <Box
          component="main"
          sx={{
            marginTop: 8,
            flexGrow: 1,
            minHeight: "fit-content",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
