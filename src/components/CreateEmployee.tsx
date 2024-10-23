import React, { useState } from "react";
import Header from "./Header";
import styles from "../styles/GlobalStyles";
import Sidebar from "./Sidebar";

interface FormData {
  name: string;
  email: string;
}

const CreateEmployee: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      const response = await fetch("http://172.16.0.92:8097/visitor/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employeeName: formData.name,
          employeeEmail: formData.email,
          isActive: true,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Employee created:", result);
        setSubmitSuccess("Employee created successfully!");
        setFormData({
          name: "",
          email: "",
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
          {["name", "email"].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field as keyof FormData]}
              onChange={handleChange}
              style={styles.input}
              required
            />
          ))}

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
