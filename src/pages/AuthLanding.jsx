import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AuthLanding() {
  const navigate = useNavigate();

  // Debug: log to verify rendering
  console.log("AuthLanding rendered");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      }}
    >
      <Box
        sx={{
          background: "#fff",
          p: 4,
          borderRadius: 3,
          boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
          textAlign: "center",
          minWidth: 320,
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, color: "#1976d2", fontWeight: 700 }}>
          Welcome to LMS
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: "#333" }}>
          Please login or register to continue.
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{
            mb: 2,
            background: "#1976d2",
            color: "#fff",
            fontWeight: 700,
            borderRadius: 2,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            color: "#1976d2",
            borderColor: "#1976d2",
            fontWeight: 700,
            borderRadius: 2,
          }}
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
}
