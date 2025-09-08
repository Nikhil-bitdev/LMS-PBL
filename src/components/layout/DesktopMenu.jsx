import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function DesktopMenu() {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2, ml: 3 }}>
      <Button 
        component={Link}
        to="/profile"
        color="inherit"
        sx={{
          textTransform: 'none',
          fontSize: '1rem',
          ml: 'auto',
          borderRadius: 2,
          px: 2,
          transition: "background 0.2s",
          "&:hover": { background: "#e0c3fc" }
        }}
      >
        My Profile
      </Button>
    </Box>
  );
}