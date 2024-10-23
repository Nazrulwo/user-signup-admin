import React, { useState } from "react";
import Header from "./Header";
import styles from "../styles/GlobalStyles";
import Sidebar from "./Sidebar";

interface FormData {
  checkListDesc: string;
  checkListImage: File | null;
  active: boolean;
  groupByName: string;
  createdBy: number;
}

const CreateChecklist: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    checkListDesc: "",
    checkListImage: null,
    active: false,
    groupByName: "",
    createdBy: 0,
  });

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : name === "createdBy" ? parseInt(value, 10) : value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        checkListImage: file,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("checkListDesc", formData.checkListDesc);
    if (formData.checkListImage) {
      formDataToSubmit.append("checkListImage", formData.checkListImage);
    }
    formDataToSubmit.append("active", String(formData.active));
    formDataToSubmit.append("groupByName", formData.groupByName);
    formDataToSubmit.append("createdBy", String(formData.createdBy));

    try {
      const response = await fetch("http://localhost:8097/checklist/create", {
        method: "POST",
        body: formDataToSubmit,
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitSuccess("Checklist created successfully!");

        setFormData({
          checkListDesc: "",
          checkListImage: null,
          active: false,
          groupByName: "",
          createdBy: 0,
        });
      } else {
        setSubmitError("Failed to create checklist.");
      }
    } catch (error) {
      setSubmitError("An error occurred while saving the checklist.");
      console.error("Error saving checklist:", error);
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div style={styles.container}>
        <h2>Create Checklist</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="checkListDesc"
            placeholder="Checklist Description"
            value={formData.checkListDesc}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="file"
            name="checkListImage"
            accept="image/*"
            onChange={handleImageChange}
            style={styles.input}
            required
          />

          <div>
            <label>
              Active:
              <input
                type="checkbox"
                name="active"
                checked={formData.active}
                onChange={handleChange}
              />
            </label>
          </div>

          <input
            type="text"
            name="groupByName"
            placeholder="Group By Name"
            value={formData.groupByName}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="number"
            name="createdBy"
            placeholder="Created By (User ID)"
            value={formData.createdBy}
            onChange={handleChange}
            style={styles.input}
            required
          />

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

export default CreateChecklist;
