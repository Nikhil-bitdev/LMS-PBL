import React, { useContext } from "react";
import { Box, Typography, Button, Alert } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const { user, loading, error, login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleGoogleLogin = async () => {
    await login();
  };

  if (loading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '50vh' 
      }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      maxWidth: 400, 
      mx: "auto", 
      mt: 8, 
      p: 3, 
      background: "#fff", 
      borderRadius: 2, 
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)" 
    }}>
      <Typography variant="h5" sx={{ mb: 2, color: "#1976d2", fontWeight: 700, textAlign: 'center' }}>
        LMS Login
      </Typography>
      
      <Typography variant="body2" sx={{ mb: 3, color: "#666", textAlign: 'center' }}>
        Sign in with your authorized Google account
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Button 
        onClick={handleGoogleLogin}
        variant="contained" 
        fullWidth 
        sx={{ 
          background: "#1976d2", 
          color: "#fff", 
          fontWeight: 700,
          py: 1.5,
          '&:hover': {
            background: "#1565c0"
          }
        }}
      >
        Sign in with Google
      </Button>

      <Typography variant="caption" sx={{ 
        display: 'block', 
        mt: 2, 
        color: "#999", 
        textAlign: 'center' 
      }}>
        Only authorized users can access this system
      </Typography>
    </Box>
  );
}
