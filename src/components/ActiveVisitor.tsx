import React, { useEffect, useState } from "react";
import styles from "../styles/GlobalStyles";

interface Visitor {
  id: number;
  visitorName: string;
  visitorOrganizationName: string;
  visitorEmail: string;
  visitorPhoneNumber: string;
  visitorHostEmail: string;
  isActive: boolean;
  visitStartTime: string;
}

const ActiveVisitor: React.FC = () => {
  const [activeVisitors, setActiveVisitors] = useState<Visitor[]>([]);
  const [previousVisitors, setPreviousVisitors] = useState<Visitor[]>([]);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await fetch("http://localhost:8097/visitor/getallvisits", requestOptions);
        const data = await response.json();

        if (Array.isArray(data)) {
          const activeSorted = data
            .filter(visitor => visitor.isActive)
            .sort((a, b) => new Date(b.visitStartTime).getTime() - new Date(a.visitStartTime).getTime());

          const previousSorted = data
            .filter(visitor => !visitor.isActive)
            .sort((a, b) => new Date(b.visitStartTime).getTime() - new Date(a.visitStartTime).getTime());

          setActiveVisitors(activeSorted);
          setPreviousVisitors(previousSorted);
        } else {
          console.error("Invalid response format.");
        }
      } catch (error) {
        console.error("Error fetching visitors:", error);
      }
    };

    fetchVisitors();
  }, []);

  const addNewVisitor = (newVisitor: Visitor) => {
    setActiveVisitors(prev => [newVisitor, ...prev]); 
  };

  return (
    <div style={styles.visitorContainer}>
      <div style={styles.section}>
        <h2>Active Visitor List</h2>
        {activeVisitors.length > 0 ? (
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Organization</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {activeVisitors.map((visitor) => (
                <tr key={visitor.id}>
                  <td>{visitor.visitorName}</td>
                  <td>{visitor.visitorOrganizationName}</td>
                  <td>{visitor.visitorEmail}</td>
                  <td>
                    <button style={styles.logoutButton}>Logout</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No active visitors are available.</p>
        )}
      </div>
    </div>
  );
};

export default ActiveVisitor;
