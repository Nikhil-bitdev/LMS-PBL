import React from "react";
import AssignmentCard from "../components/assignments/AssignmentCard";
import { useNavigate } from "react-router-dom";

export default function Assignments() {
  const navigate = useNavigate();
  return (
    <div style={{
      maxWidth: 600,
      margin: "0 auto",
      padding: "24px",
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    }}>
      <button
        style={{
          marginBottom: "16px",
          padding: "8px 16px",
          borderRadius: "8px",
          background: "#8ec5fc",
          color: "#4b2e83",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer"
        }}
        onClick={() => navigate("/")}
      >
        ← Back to Dashboard
      </button>
      <h1 style={{
        fontSize: "2rem",
        fontWeight: 700,
        marginBottom: "24px",
        color: "#1976d2",
        textAlign: "center"
      }}>
        Your Assignments
      </h1>
      <AssignmentCard 
        title="Math Homework" 
        dueDate="2025-08-15" 
        description="Complete chapters 1-3" 
      />
    </div>
  );
}