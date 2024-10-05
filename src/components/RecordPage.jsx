import React from "react";
import { Link, useNavigate } from "react-router-dom";

function RecordsPage({ records, deleteRecord }) {
  const navigate = useNavigate();

  const handleEdit = (record) => {
    // Navigate to the form page with edit record data as state
    navigate("/", { state: { editRecord: record } });
  };

  return (
    <div className="form-container">
      <div className="form-header">Records</div>
      <div className="table-responsive">
        {records.length === 0 ? (
          <p>No records available.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td>{record.name}</td>
                  <td>{record.email}</td>
                  <td>
                    <button
                      className="btn btn-secondary btn-sm me-2"
                      onClick={() => handleEdit(record)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteRecord(record.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <Link to="/" className="btn btn-dark mt-3">Go Back to Form</Link>
      </div>
    </div>
  );
}

export default RecordsPage;
