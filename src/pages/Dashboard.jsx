import React from "react";
import { Box, Typography, Card, CardContent, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Box
      p={3}
      sx={{
        background: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
        borderRadius: 3,
        boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
        maxWidth: 500,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: "#4b2e83" }}>
        Welcome to Your LMS
      </Typography>
      <Typography variant="body1" sx={{ color: "#333", mb: 3 }}>
        Access assignments, study materials, and track your progress.
      </Typography>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
        <Card sx={{ minWidth: 180, flex: 1, background: "#fff", borderRadius: 2, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <CardActionArea onClick={() => navigate("/assignments")}>
            <CardContent>
              <Typography variant="h6" sx={{ color: "#1976d2", fontWeight: 700 }}>
                Assignments
              </Typography>
              <Typography variant="body2" sx={{ color: "#333" }}>
                View and submit your assignments.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ minWidth: 180, flex: 1, background: "#fff", borderRadius: 2, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <CardActionArea onClick={() => navigate("/materials")}>
            <CardContent>
              <Typography variant="h6" sx={{ color: "#1976d2", fontWeight: 700 }}>
                Study Materials
              </Typography>
              <Typography variant="body2" sx={{ color: "#333" }}>
                Access notes and resources.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      {/* Add dashboard widgets later */}
    </Box>
  );
}