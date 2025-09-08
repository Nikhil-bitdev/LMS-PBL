import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Materials() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        padding: "32px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        textAlign: "center",
      }}
    >
      <Button
        variant="contained"
        sx={{
          mb: 2,
          background: "linear-gradient(90deg, #8ec5fc 0%, #e0c3fc 100%)",
          color: "#4b2e83",
          fontWeight: 700,
          borderRadius: 2,
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          "&:hover": {
            background: "linear-gradient(90deg, #e0c3fc 0%, #8ec5fc 100%)",
          },
        }}
        onClick={() => navigate("/")}
      >
        ← Back to Dashboard
      </Button>
      <Typography variant="h4" sx={{ mb: 2, color: "#1976d2", fontWeight: 700 }}>
        Study Materials
      </Typography>
      <Typography variant="body1" sx={{ color: "#333" }}>
        Find notes, resources, and guides for your courses here.
      </Typography>
    </Box>
  );
}
