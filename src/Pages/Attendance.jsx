import React, { useState } from 'react';
import '../css/Attendance.css'; // Make sure to include your CSS file
import Layout from '../components/Layout';
import edit from '../assets/delete.png';
import view from '../assets/view.png';
import del from '../assets/edit.png';
import info from '../assets/info.png';
import { Router, useNavigate } from 'react-router-dom'
import AddAttendance from './AddAttendance';

const Attendance = () => {
  const [isActive, active] = useState(true);

  const toggleStatus = () => {
    active(!isActive);
    const Interactions = () => {
      
    }}
      const [showDeleteConfirmation, setConfirm] = useState(false);
    
      const handleDeleteClick = () => {
        setConfirm(true);
      };
      const handleConfirmDelete = () => {
        setConfirm(false);
  };

  const Router = useNavigate(); 
  return (
    <Layout>
      <div className="attendence-table-container">
        <h1 className="attendence-table-title">Attendance</h1>
        <div className="attendence-searchbox">
          <input type="text" className="attendence-search-input" placeholder="Search..." />
          <button className="attendence-search-btn" onClick={() => Router('/addattendance')}>Add</button>
        </div>
        <div className="attendence-table-wrapper">
          <table className="attendence-table">
            <thead>
              <tr className="attendence-table-header">
                <th className="attendence-column-date">Date</th>
                <th className="attendence-column-venue">Name</th>
                <th className="attendence-column-status">Status</th>
                <th className="attendence-column-actions">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="attendence-table-row">
                <td className="attendence-column-date">date</td>
                <td className="attendence-column-venue">name</td>
                <td className="attendence-column-status">
                  <button
                    className={`inac`}
                    onClick={toggleStatus}
                    style={{
                      backgroundColor: isActive ? 'green' : 'rgb(231, 116, 78)',
                      color: 'white'
                    }}
                  >
                    {isActive ? 'Active' : 'Inactive'}
                  </button>
                </td>
                <td className="attendence-column-actions">
                  <img src={del} alt="" className="attendence-img-delete" />
                  <img src={view} alt="" className="attendence-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="attendence-img-edit" />
                </td>
              </tr>
              {/* Add more attendance items here */}
            </tbody>
          </table>
        </div>
      </div>
      {showDeleteConfirmation && (
        <div className="confirmation-dialog">
          <img src={info} alt="" className="customer-img-edit" />
          <p>Are you sure you want to delete this customer?</p>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={() => setConfirm(false)}>No</button>
        </div>
      )}
    </Layout>
  );
}

export default Attendance;
