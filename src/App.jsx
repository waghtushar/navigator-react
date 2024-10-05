import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FormPage from "./components/FormPage";
import RecordsPage from "./components/RecordPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

function App() {
  const [records, setRecords] = useState([]);
  const [editRecord, setEditRecord] = useState(null);

  const addRecord = (newRecord) => {
    setRecords([...records, newRecord]);
  };

  const updateRecord = (updatedRecord) => {
    const updatedRecords = records.map((record) =>
      record.id === updatedRecord.id ? updatedRecord : record
    );
    setRecords(updatedRecords);
    setEditRecord(null);
  };

  const deleteRecord = (id) => {
    const filteredRecords = records.filter((record) => record.id !== id);
    setRecords(filteredRecords);
  };

  return (
    <Router>
      <div className="app-wrapper">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary py-3">
          <div className="container">
            <Link className="navbar-brand fs-2" to="/">Record Manager</Link>
            <div className="navbar-nav ms-auto">
              <Link className="nav-link fs-5" to="/records">View Records</Link>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <div className="content-wrapper d-flex justify-content-center align-items-center">
          <div className="container">
            <Routes>
              <Route path="/" element={
                <FormPage 
                  addRecord={addRecord} 
                  updateRecord={updateRecord} 
                  editRecord={editRecord} 
                />
              }/>
              <Route path="/records" element={
                <RecordsPage 
                  records={records} 
                  setEditRecord={setEditRecord} 
                  deleteRecord={deleteRecord} 
                />
              }/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
