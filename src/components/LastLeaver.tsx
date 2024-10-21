import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import ButtonGroup from "./ButtonGroup";
import styles from "../styles/GlobalStyles";

interface ChecklistItem {
  id: number;
  check_list_desc: string;
}

const LastLeaver: React.FC = () => {
  const [visitorName, setVisitorName] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [checklist, setChecklist] = useState<ChecklistItem[]>([]); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChecklist = async () => {
      try {
        const response = await fetch("http://localhost:8097/checklist/getallchecklists");
        const data = await response.json();

        if (Array.isArray(data)) {
          setChecklist(data);
        } else {
          console.error("Invalid response format.");
        }
      } catch (error) {
        console.error("Error fetching checklist:", error);
      }
    };

    fetchChecklist();
  }, []);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  const handleLogout = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Visitor Name:", visitorName);
    console.log("Selected Options:", selectedOptions);
    navigate("/");
  };

  return (
    <>
      <Header />
      <ButtonGroup />
      <div style={styles.container}>
        <h2>Last Leaver</h2>
        <form style={styles.form} onSubmit={handleLogout}>
          <div style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
            {checklist.length > 0 ? (
              checklist.map((item) => (
                <label key={item.id}>
                  <input
                    type="checkbox"
                    value={item.check_list_desc}
                    onChange={handleCheckboxChange}
                  />
                  {item.check_list_desc}
                </label>
              ))
            ) : (
              <p>Loading checklist...</p>
            )}
          </div>

          <input
            type="text"
            placeholder="Please enter your pin code"
            value={visitorName}
            onChange={(e) => setVisitorName(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Logout
          </button>
        </form>
      </div>
    </>
  );
};

export default LastLeaver;
