import { createContext, useEffect, useState } from "react";

export const AssignmentContext = createContext();

const STORAGE_KEY = "assignments";

export function AssignmentProvider({ children }) {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setAssignments(parsed);
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(assignments));
    } catch {}
  }, [assignments]);

  const loadSampleData = () => {
    const sample = [
      {
        id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + "-1",
        title: "Math Homework",
        dueDate: "2025-08-15",
        description: "Complete chapters 1-3",
      },
      {
        id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + "-2",
        title: "Physics Lab Report",
        dueDate: "2025-08-20",
        description: "Analyze pendulum experiment data",
      },
    ];
    setAssignments(sample);
  };

  const clearAll = () => setAssignments([]);
  
  return (
    <AssignmentContext.Provider value={{ assignments, setAssignments, loadSampleData, clearAll }}>
      {children}
    </AssignmentContext.Provider>
  );
}
