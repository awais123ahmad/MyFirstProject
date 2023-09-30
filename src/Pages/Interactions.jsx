import React1, { useState } from 'react'
import React from 'react'
import '../css/Interactions.css'
import edit from '../assets/delete.png'
import view from '../assets/view.png'
import del from '../assets/edit.png'
import info from '../assets/info.png';
import Layout from '../components/Layout'
import { Router, useNavigate } from 'react-router-dom'
import AddInteractions from './AddInteractions'

const Interactions = () => {
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
  <div className="event-table-container">
    <h1 className="event-table-title">Interaction</h1>
    <div className="searchbox">
      <input type="text" className="search-input" placeholder="Search..." />
      <button className="search-btn" onClick={() => Router('/addinteractions')}>Add</button>
    </div>
    <div className="event-table-wrapper">
      <table className="event-table">
        <thead>
          <tr className="event-table-header">
            <th className="column-date">Date</th>
            <th className="column-venue">Venue</th>
            <th className="column-time">Time</th>
            {/* <th className="column-status">Status</th> */}
            <th className="column-actions">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="event-table-row">
            <td className="column-date">date</td>
            <td className="column-venue">Venue</td>
            <td className="column-time">time</td>
            {/* <td className="column-status"><button className="btn-active">Active</button></td> */}
            <td className="column-actions">
              <img src={del} alt="" className="img-delete" />
              <img src={view} alt="" className="img-view" />
              <img src={edit} onClick={handleDeleteClick} alt="" className="img-edit" />
            </td>
          </tr>
          <tr className="event-table-row">
            <td className="column-date">date</td>
            <td className="column-venue">Venue</td>
            <td className="column-time">time</td>
            {/* <td className="column-status"><button className="btn-active">Active</button></td> */}
            <td className="column-actions">
              <img src={del} alt="" className="img-delete" />
              <img src={view} alt="" className="img-view" />
              <img src={edit} onClick={handleDeleteClick} alt="" className="img-edit" />
            </td>
          </tr>
          <tr className="event-table-row">
            <td className="column-date">date</td>
            <td className="column-venue">Venue</td>
            <td className="column-time">time</td>
            {/* <td className="column-status"><button className="btn-active">Active</button></td> */}
            <td className="column-actions">
              <img src={del} alt="" className="img-delete" />
              <img src={view} alt="" className="img-view" />
              <img src={edit} onClick={handleDeleteClick} alt="" className="img-edit" />
            </td>
          </tr>
          <tr className="event-table-row">
            <td className="column-date">date</td>
            <td className="column-venue">Venue</td>
            <td className="column-time">time</td>
            {/* <td className="column-status"><button className="btn-active">Active</button></td> */}
            <td className="column-actions">
              <img src={del} alt="" className="img-delete" />
              <img src={view} alt="" className="img-view" />
              <img src={edit} onClick={handleDeleteClick} alt="" className="img-edit" />
            </td>
          </tr>
          <tr className="event-table-row">
            <td className="column-date">date</td>
            <td className="column-venue">Venue</td>
            <td className="column-time">time</td>
            {/* <td className="column-status"><button className="btn-active">Active</button></td> */}
            <td className="column-actions">
              <img src={del} alt="" className="img-delete" />
              <img src={view} alt="" className="img-view" />
              <img src={edit} onClick={handleDeleteClick} alt="" className="img-edit" />
            </td>
          </tr>
          <tr className="event-table-row">
            <td className="column-date">date</td>
            <td className="column-venue">Venue</td>
            <td className="column-time">time</td>
            {/* <td className="column-status"><button className="btn-active">Active</button></td> */}
            <td className="column-actions">
              <img src={del} alt="" className="img-delete" />
              <img src={view} alt="" className="img-view" />
              <img src={edit} onClick={handleDeleteClick} alt="" className="img-edit" />
            </td>
          </tr>
          <tr className="event-table-row">
            <td className="column-date">date</td>
            <td className="column-venue">Venue</td>
            <td className="column-time">time</td>
            {/* <td className="column-status"><button className="btn-active">Active</button></td> */}
            <td className="column-actions">
              <img src={del} alt="" className="img-delete" />
              <img src={view} alt="" className="img-view" />
              <img src={edit} onClick={handleDeleteClick} alt="" className="img-edit" />
            </td>
          </tr>
          <tr className="event-table-row">
            <td className="column-date">date</td>
            <td className="column-venue">Venue</td>
            <td className="column-time">time</td>
            {/* <td className="column-status"><button className="btn-active">Active</button></td> */}
            <td className="column-actions">
              <img src={del} alt="" className="img-delete" />
              <img src={view} alt="" className="img-view" />
              <img src={edit} onClick={handleDeleteClick} alt="" className="img-edit" />
            </td>
          </tr>
          {/* Add more event items here */}
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

export default Interactions