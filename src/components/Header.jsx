import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <Box maxWidth={"xl"} sx={{ flexGrow: 1 }}>
      <AppBar color="inherit" position="static" sx={{ padding: "0 12px" }}>
        <Toolbar>
          <Typography
            fontWeight={"bold"}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Where in the World?
          </Typography>
          <Button color="inherit" onClick={toggleTheme}>
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            <Typography fontWeight={400} pl={{ xs: 0.2, md: 1 }}>
              {isDark ? "Light Mode" : "Dark Mode"}
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
