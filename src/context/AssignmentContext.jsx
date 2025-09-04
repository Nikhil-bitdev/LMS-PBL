import { createContext, useState } from "react";

export const AssignmentContext = createContext();

export function AssignmentProvider({ children }) {
  const [assignments, setAssignments] = useState([]);
  
  return (
    <AssignmentContext.Provider value={{ assignments, setAssignments }}>
      {children}
    </AssignmentContext.Provider>
  );
}
