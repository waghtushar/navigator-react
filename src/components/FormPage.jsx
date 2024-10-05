import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function FormPage({ addRecord, updateRecord }) {
  const location = useLocation();
  const editRecord = location.state?.editRecord || null;

  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
  });

  useEffect(() => {
    if (editRecord) {
      setFormData(editRecord);  // Prepopulate the form with the edit record data
    }
  }, [editRecord]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.id) {
      updateRecord(formData);
    } else {
      addRecord({ ...formData, id: Date.now() });
    }

    // Reset form after submission
    setFormData({ id: null, name: "", email: "" });
  };

  return (
    <div className="form-container">
      <div className="form-header">
        {editRecord ? "Edit Record" : "Add Record"}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          {editRecord ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default FormPage;
