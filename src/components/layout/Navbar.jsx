import { AppBar, Toolbar, IconButton, Drawer, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

function Navbar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          mb: 4,
          background: "linear-gradient(90deg, #8ec5fc 0%, #e0c3fc 100%)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton 
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <span style={{
            flexGrow: 1,
            fontWeight: 700,
            fontSize: "1.7rem",
            letterSpacing: "2px",
            color: "#4b2e83",
            fontFamily: "Montserrat, Arial, sans-serif"
          }}>
            LMS
          </span>
          {!isMobile && <DesktopMenu />}
        </Toolbar>
      </AppBar>
      <Drawer 
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
      >
        <MobileMenu handleDrawerClose={handleDrawerClose} />
      </Drawer>
    </>
  );
}

export default Navbar;