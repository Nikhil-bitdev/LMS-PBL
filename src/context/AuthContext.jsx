import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [pendingEmail, setPendingEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpError, setOtpError] = useState("");

  // Request OTP from backend
  const requestOtp = async (email, role = "student") => {
    if (!email.endsWith("@gmail.com")) {
      setOtpError("Only Gmail accounts are allowed.");
      return false;
    }
    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setPendingEmail(email);
        setOtpSent(true);
        setOtpError("");
        return true;
      } else {
        setOtpError(data.message || "Failed to send OTP.");
        return false;
      }
    } catch (err) {
      setOtpError("Network error. Try again.");
      return false;
    }
  };

  // Confirm OTP with backend
  const confirmOtp = async (enteredOtp, role = "student") => {
    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: pendingEmail, otp: enteredOtp }),
      });
      const data = await res.json();
      if (data.success) {
        setUser({ email: pendingEmail, role });
        setPendingEmail("");
        setOtpSent(false);
        setOtpError("");
        return true;
      } else {
        setOtpError(data.message || "Invalid OTP. Please try again.");
        return false;
      }
    } catch (err) {
      setOtpError("Network error. Try again.");
      return false;
    }
  };

  const logout = () => setUser(null);
  const resetPassword = (email) => {
    // Implement password reset logic here
  };
  const updateProfile = (profile) => setUser({ ...user, ...profile });

  return (
    <AuthContext.Provider
      value={{
        user,
        requestOtp,
        confirmOtp,
        otpSent,
        otpError,
        logout,
        resetPassword,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
