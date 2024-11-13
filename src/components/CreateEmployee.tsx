import React, { useState } from "react";
import Header from "./Header";
import styles from "../styles/GlobalStyles";
import Sidebar from "./Sidebar";

interface FormData {
  employeeName: string;
  employeeEmail: string;
  isActive: boolean;
}

const CreateEmployee: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    employeeName: "",
    employeeEmail: "",
    isActive: true,
  });

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      const response = await fetch("http://localhost:8097/employee/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employeeName: formData.employeeName,
          employeeEmail: formData.employeeEmail,
          isActive: formData.isActive,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Employee created:", result);
        setSubmitSuccess("Employee created successfully!");
        setFormData({
          employeeName: "",
          employeeEmail: "",
          isActive: true,
        });
      } else {
        setSubmitError("Failed to create the employee.");
        console.error("Submission failed:", response.statusText);
      }
    } catch (error) {
      setSubmitError("An error occurred while creating the employee.");
      console.error("Error saving data:", error);
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div style={styles.container}>
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="employeeName"
            placeholder="Employee Name"
            value={formData.employeeName}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="email"
            name="employeeEmail"
            placeholder="Employee Email"
            value={formData.employeeEmail}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <div>
            <label>
              Active:
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
              />
            </label>
          </div>

          {submitError && <div style={styles.error}>{submitError}</div>}
          {submitSuccess && <div style={styles.success}>{submitSuccess}</div>}

          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateEmployee;
