import React, { useContext } from "react";
import AssignmentCard from "../components/assignments/AssignmentCard";
import { useNavigate } from "react-router-dom";
import { AssignmentContext } from "../context/AssignmentContext";

export default function Assignments() {
  const navigate = useNavigate();
  const { assignments, loadSampleData, clearAll } = useContext(AssignmentContext);
  const hasData = assignments && assignments.length > 0;

  return (
    <div style={{
      maxWidth: 600,
      margin: "0 auto",
      padding: "24px",
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
        <button
          style={{
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
        <div style={{ display: "flex", gap: 8 }}>
          <button
            style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid #1976d2", color: "#1976d2", background: "#fff", cursor: "pointer" }}
            onClick={loadSampleData}
          >
            Load Sample Data
          </button>
          <button
            style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid #b71c1c", color: "#b71c1c", background: "#fff", cursor: "pointer" }}
            onClick={clearAll}
          >
            Clear
          </button>
        </div>
      </div>

      <h1 style={{
        fontSize: "2rem",
        fontWeight: 700,
        marginBottom: "24px",
        color: "#1976d2",
        textAlign: "center"
      }}>
        Your Assignments
      </h1>

      {!hasData ? (
        <div style={{
          padding: 24,
          border: "1px dashed #c5d6f7",
          borderRadius: 12,
          color: "#555",
          textAlign: "center",
          background: "#f8fbff"
        }}>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>No assignments yet</div>
          <div style={{ marginBottom: 12 }}>You can load sample data to explore the UI.</div>
          <button
            style={{ padding: "8px 16px", borderRadius: 8, background: "#1976d2", color: "#fff", border: "none", cursor: "pointer" }}
            onClick={loadSampleData}
          >
            Load Sample Data
          </button>
        </div>
      ) : (
        assignments.map((a) => (
          <AssignmentCard
            key={a.id}
            title={a.title}
            dueDate={a.dueDate}
            description={a.description}
          />
        ))
      )}
    </div>
  );
}