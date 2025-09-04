import React, { useState, useContext } from "react";
import { Box, Typography, TextField, Button, MenuItem } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { requestOtp, confirmOtp, otpSent, otpError } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");
  const [otpInput, setOtpInput] = useState("");
  const navigate = useNavigate();

  const handleRequestOtp = (e) => {
    e.preventDefault();
    requestOtp(email, role);
  };

  const handleConfirmOtp = (e) => {
    e.preventDefault();
    if (confirmOtp(otpInput, role)) {
      navigate("/dashboard");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 8, p: 3, background: "#fff", borderRadius: 2, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
      <Typography variant="h5" sx={{ mb: 2, color: "#1976d2", fontWeight: 700 }}>
        Login
      </Typography>
      {!otpSent ? (
        <form onSubmit={handleRequestOtp}>
          <TextField
            label="Gmail ID"
            type="email"
            fullWidth
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            select
            label="Role"
            fullWidth
            value={role}
            onChange={e => setRole(e.target.value)}
            sx={{ mb: 2 }}
          >
            <MenuItem value="student">Student</MenuItem>
            <MenuItem value="instructor">Instructor</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </TextField>
          {otpError && (
            <Typography color="error" sx={{ mb: 1 }}>
              {otpError}
            </Typography>
          )}
          <Button type="submit" variant="contained" fullWidth sx={{ background: "#1976d2", color: "#fff", fontWeight: 700 }}>
            Send OTP
          </Button>
        </form>
      ) : (
        <form onSubmit={handleConfirmOtp}>
          <TextField
            label="Enter OTP"
            type="text"
            fullWidth
            required
            value={otpInput}
            onChange={e => setOtpInput(e.target.value)}
            sx={{ mb: 2 }}
          />
          {otpError && (
            <Typography color="error" sx={{ mb: 1 }}>
              {otpError}
            </Typography>
          )}
          <Button type="submit" variant="contained" fullWidth sx={{ background: "#1976d2", color: "#fff", fontWeight: 700 }}>
            Confirm OTP
          </Button>
        </form>
      )}
    </Box>
  );
}
