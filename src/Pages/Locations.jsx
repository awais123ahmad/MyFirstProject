import React, { useState} from 'react'
import '../css/Location.css'
import edit from '../assets/delete.png'
import info from '../assets/info.png';
import view from '../assets/view.png'
import del from '../assets/edit.png'
import Layout from '../components/Layout'
import { Router, useNavigate } from 'react-router-dom'
import AddLocation from './AddLocation'

function Locations() {
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
      <div className="location-table-container">
        <h1 className="location-table-title">Location</h1>
        <div className="location-searchbox">
          <input type="text" className="location-search-input" placeholder="Search..." />
          <button className="location-search-btn" onClick={() => Router('/addlocations')}>Add</button>
        </div>
        <div className="location-table-wrapper">
          <table className="location-table">
            <thead>
              <tr className="location-table-header">
                <th className="location-column-date">Name</th>
                <th className="location-column-venue">State</th>
                <th className="location-column-venue">City</th>
                <th className="location-column-status">Status</th>
                <th className="location-column-actions">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="location-table-row">
                <td className="location-column-date">Name</td>
                <td className="location-column-venue">State</td>
                <td className="location-column-venue">City</td>
                <td className="location-column-status">
                  <button
                    className={`loc-inac`}
                    onClick={toggleStatus}
                    style={{
                      backgroundColor: isActive ? 'green' : 'rgb(231, 116, 78)',
                      color: 'white'
                    }}
                  >
                    {isActive ? 'Active' : 'Inactive'}
                  </button>
                </td>
                <td className="location-column-actions">
                  <img src={del} alt="" className="location-img-delete" />
                  <img src={view} alt="" className="location-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="location-img-edit" />
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

export default Locations