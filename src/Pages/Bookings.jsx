import React, { useState} from 'react'
import '../css/Bookings.css'
import edit from '../assets/delete.png'
import view from '../assets/view.png'
import info from '../assets/info.png';
import del from '../assets/edit.png'
import Layout from '../components/Layout'
import { Router, useNavigate } from 'react-router-dom'
import AddBookings from './AddBookings'

const Bookings = () => {
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

  const Router = useNavigate();

  return (
    <Layout>
      <div className="booking-table-container">
        <h1 className="booking-table-title">Bookings</h1>
        <div className="booking-searchbox">
          <input type="text" className="booking-search-input" placeholder="Search..." />
          <button className="booking-search-btn" onClick={() => Router('/addbookings')}>Add</button>
        </div>
        <div className="booking-table-wrapper">
          <table className="booking-table">
            <thead>
              <tr className="booking-table-header">
                <th className="booking-column-date">ID</th>
                <th className="booking-column-venue">Venue</th>
                <th className="booking-column-date">Date</th>
                <th className="booking-column-venue">Persons</th>
                <th className="booking-column-date">PR/PR</th>
                <th className="booking-column-venue">Types</th>
                <th className="booking-column-status">Status</th>
                <th className="booking-column-actions">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="booking-table-row">
                <td className="booking-column-date">ID</td>
                <td className="booking-column-venue">Venue</td>
                <td className="booking-column-date">Date</td>
                <td className="booking-column-venue">Persons</td>
                <td className="booking-column-date">PR/PR</td>
                <td className="booking-column-venue">Types</td>
                <td className="booking-column-status">
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
                <td className="booking-column-actions">
                  <img src={del} alt="" className="booking-img-delete" />
                  <img src={view} alt="" className="booking-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="booking-img-edit" />
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

export default Bookings