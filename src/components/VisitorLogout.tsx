import React, { useState } from "react";
import Header from "./Header";
import styles from "../styles/GlobalStyles";
import Sidebar from "./Sidebar";

interface FormData {
  visitorName: string;
  visitorEmail: string;
  visitorPhoneNumber: string;
  visitorOrganizationName: string;
  visitorHostEmail: string;
}

const VisitorLogout: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    visitorName: "",
    visitorEmail: "",
    visitorPhoneNumber: "",
    visitorOrganizationName: "",
    visitorHostEmail: "", 
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
    console.log("handleSubmit is working..");
    
    try {
      const response = await fetch("http://localhost:8097/visitor/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), 
      });
      console.log("Response..", response);

      if (response.ok) {
        const result = await response.json();
        console.log("Data saved:", result);

        setSubmitSuccess("Form submitted successfully!");
        setFormData({
          visitorName: "",
          visitorEmail: "",
          visitorPhoneNumber: "",
          visitorOrganizationName: "",
          visitorHostEmail: "", 
        });
      } else {
        setSubmitError("Failed to submit the form."); 
        console.error("Submission failed:", response.statusText);
      }
    } catch (error) {
      setSubmitError("An error occurred while saving the data."); 
      console.error("Error saving data:", error);
    }
  };

  const formatPlaceholder = (field: string) => {
    const formattedField = field.replace(/([A-Z])/g, ' $1').trim();
    return formattedField.charAt(0).toUpperCase() + formattedField.slice(1);
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div style={styles.container}>
        <h2>Visitor Logout</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          {["visitorName", "visitorEmail", "visitorPhoneNumber", "visitorOrganizationName", "visitorHostEmail"].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={formatPlaceholder(field)}
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

export default VisitorLogout;
