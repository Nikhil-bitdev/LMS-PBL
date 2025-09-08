import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./pages/Dashboard";
import Assignments from "./pages/Assignments";
import Materials from "./pages/Materials";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import AuthLanding from "./pages/AuthLanding";
import { AssignmentProvider } from "./context/AssignmentContext.jsx";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <AssignmentProvider>
        <BrowserRouter>
          <Navbar />
          <main
            style={{
              padding: "32px",
              minHeight: "calc(100vh - 64px)",
              background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Routes>
              <Route path="/" element={<AuthLanding />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<div>Registration Page</div>} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/assignments" 
                element={
                  <ProtectedRoute>
                    <Assignments />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/materials" 
                element={
                  <ProtectedRoute>
                    <Materials />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } 
              />
              <Route
                path="*"
                element={
                  <div
                    style={{
                      padding: "40px",
                      background: "#fff",
                      borderRadius: "12px",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                      textAlign: "center",
                    }}
                  >
                    <h2 style={{ color: "#b71c1c" }}>404 - Page Not Found</h2>
                    <p>Sorry, the page you are looking for does not exist.</p>
                  </div>
                }
              />
            </Routes>
          </main>
        </BrowserRouter>
      </AssignmentProvider>
    </AuthProvider>
  );
}
