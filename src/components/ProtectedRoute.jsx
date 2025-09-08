import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Box, Typography, CircularProgress } from '@mui/material';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '50vh',
        gap: 2
      }}>
        <CircularProgress />
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
