import React, { useState } from 'react';
import '../css/Facilities.css'; // Make sure to include your CSS file
import Layout from '../components/Layout';
import edit from '../assets/delete.png';
import view from '../assets/view.png';
import info from '../assets/info.png';
import del from '../assets/edit.png';
import AddFacilities from './AddFacilities'
import { Router, useNavigate } from 'react-router-dom';

const Facilities = () => {
  const [isActive, active] = useState(true);

  const toggleStatus = () => {
    active(!isActive);
  };
    const navigate = useNavigate(); 
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
      <div className="facilities-table-container">
        <h1 className="facilities-table-title">Facilities</h1>
        <div className="facilities-searchbox">
          <input type="text" className="facilities-search-input" placeholder="Search..." />
          <button className="facilities-search-btn" onClick={() => Router('/addfacilities')}>Add</button>
        </div>
        <div className="facilities-table-wrapper">
          <table className="facilities-table">
            <thead>
              <tr className="facilities-table-header">
                <th className="facilities-column-date">Name</th>
                <th className="facilities-column-venue">Description</th>
                <th className="facilities-column-status">Status</th>
                <th className="facilities-column-actions">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="facilities-table-row">
                <td className="facilities-column-date">Name</td>
                <td className="facilities-column-venue">Description</td>
                <td className="facilities-column-status">
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
                <td className="facilities-column-actions">
                  <img src={del} alt="" className="facilities-img-delete" />
                  <img src={view} alt="" className="facilities-img-view" />
                  <img src={edit} alt="" className="facilities-img-edit" onClick={handleDeleteClick}/>
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

export default Facilities