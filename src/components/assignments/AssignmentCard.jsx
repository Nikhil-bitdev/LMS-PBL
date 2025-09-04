import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

export default function AssignmentCard({ title, dueDate, description }) {
  return (
    <Card
      sx={{
        mb: 2,
        borderLeft: "6px solid #1976d2",
        boxShadow: "0 2px 8px rgba(25, 118, 210, 0.08)",
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 700, color: "#1976d2" }}>
          {title}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 1 }}>
          Due: {dueDate}
        </Typography>
        <Typography paragraph sx={{ color: "#333" }}>
          {description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #8ec5fc 0%, #e0c3fc 100%)",
            color: "#4b2e83",
            fontWeight: 700,
            borderRadius: 2,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            "&:hover": {
              background: "linear-gradient(90deg, #e0c3fc 0%, #8ec5fc 100%)",
            },
          }}
        >
          Submit Assignment
        </Button>
      </CardContent>
    </Card>
  );
}