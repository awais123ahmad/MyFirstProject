import React, { useState } from 'react';
import '../css/Inquiries.css'; // Make sure to include your CSS file
import Layout from '../components/Layout';
import edit from '../assets/delete.png';
import view from '../assets/view.png';
import del from '../assets/edit.png';
import info from '../assets/info.png';
import { Router, useNavigate } from 'react-router-dom';
import AddInquiries from './AddInquiries';
// This is for testing
const Inquiries = () => {
  
  const [isActive, active] = useState(true);

  const toggleStatus = () => {
    active(!isActive);
  };
  const [showDeleteConfirmation, setConfirm] = useState(false);

  const handleDeleteClick = () => {
    setConfirm(true);
  };
  const handleConfirmDelete = () => {
    setConfirm(false);
  };

  const Router = useNavigate()

  return (
    <Layout>
      <div className="inquiries-table-container">
        <h1 className="inquiries-table-title">Inquiries</h1>
        <div className="inquiries-searchbox">
          <input type="text" className="inquiries-search-input" placeholder="Search..." />
          <button className="inquiries-search-btn" onClick={() => Router('/addinquiries')}>Add</button>
        </div>
        <div className="inquiries-table-wrapper">
          <table className="inquiries-table">
            <thead>
              <tr className="inquiries-table-header">
                <th className="inquiries-column-date">Date</th>
                <th className="inquiries-column-venue">Name</th>
                <th className="inquiries-column-status">Status</th>
                <th className="inquiries-column-actions">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="inquiries-table-row">
                <td className="inquiries-column-date">date</td>
                <td className="inquiries-column-venue">name</td>
                <td className="inquiries-column-status">
                  <button
                    className={`inq-inac`}
                    onClick={toggleStatus}
                    style={{
                      backgroundColor: isActive ? 'green' : 'rgb(231, 116, 78)',
                      color: 'white'
                    }}
                  >
                    {isActive ? 'Active' : 'Inactive'}
                  </button>
                </td>
                <td className="inquiries-column-actions">
                  <img src={del} alt="" className="inquiries-img-delete" />
                  <img src={view} alt="" className="inquiries-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="inquiries-img-edit" />
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
  )
}

export default Inquiries