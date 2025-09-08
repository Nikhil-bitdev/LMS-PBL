import React, { useContext, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const { user, updateProfile, resetPassword, logout } = useContext(AuthContext);
  const [email, setEmail] = useState(user?.email || "");
  const [role] = useState(user?.role || "");
  const [name, setName] = useState(user?.name || "");

  if (!user) {
    return (
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h6">Please login to view your profile.</Typography>
      </Box>
    );
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProfile({ email, name });
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 8, p: 3, background: "#fff", borderRadius: 2, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
      <Typography variant="h5" sx={{ mb: 2, color: "#1976d2", fontWeight: 700 }}>
        My Profile
      </Typography>
      <form onSubmit={handleUpdate}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={e => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={e => setName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Role"
          fullWidth
          value={role}
          disabled
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ background: "#1976d2", color: "#fff", fontWeight: 700, mb: 1 }}>
          Update Profile
        </Button>
        <Button
          variant="outlined"
          fullWidth
          sx={{ mb: 1 }}
          onClick={() => resetPassword(email)}
        >
          Reset Password
        </Button>
        <Button
          variant="text"
          fullWidth
          color="error"
          onClick={logout}
        >
          Logout
        </Button>
      </form>
    </Box>
  );
}
