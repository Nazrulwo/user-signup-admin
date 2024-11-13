import React, { useEffect, useState } from "react";
import styles from "../styles/GlobalStyles";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface Employee {
  employeeName: string;
  employeeEmail: string;
  isActive: boolean;
}

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await fetch("http://localhost:8097/employee/getallemployee", requestOptions);
        const data = await response.json();

        if (Array.isArray(data)) {
          setEmployees(data);
        } else {
          console.error("Invalid response format.");
        }
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  const addNewEmployee = (newEmployee: Employee) => {
    setEmployees([newEmployee, ...employees]); 
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div style={styles.content}>
        <div style={styles.visitorContainer}>
          <div style={styles.section}>
            <h2>Employee List</h2>
            {employees.length > 0 ? (
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Name</th>
                    <th style={styles.th}>Email</th>
                    <th style={styles.th}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, index) => (
                    <tr key={index}>
                      <td style={styles.td}>{employee.employeeName}</td>
                      <td style={styles.td}>{employee.employeeEmail}</td>
                      <td style={styles.td}>{employee.isActive ? "Active" : "Inactive"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>Loading employee list...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
