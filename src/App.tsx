import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import CreateEmployee from "./components/CreateEmployee";
import LastLeaver from "./components/LastLeaver";
import CreateChecklist from "./components/CreateChecklist";
import EmployeeList from "./components/EmployeeList";
import Dashboard from "./components/Dashboard";
import Visitor from "./components/Visitor";
import VisitorLogout from "./components/VisitorLogout";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/report" element={<Dashboard />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="/visitor" element={<Visitor />} />
          <Route path="/logout" element={<VisitorLogout />} />
          <Route path="/employee" element={<CreateEmployee />} />
          <Route path="/create-checklist" element={<CreateChecklist />} />
          <Route path="/last-leaver" element={<LastLeaver />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
