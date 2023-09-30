import React, { useState } from 'react'
import '../css/Income.css'
import edit from '../assets/delete.png'
import view from '../assets/view.png'
import del from '../assets/edit.png'
import info from '../assets/info.png';
import Layout from '../components/Layout'
import { s, useNavigate } from 'react-router-dom'
import AddIncome from './AddIncome'

const Income = () => {
  const s = useNavigate(); 
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
  <div className="income-table-container">
        <h1 className="income-table-title">Income</h1>
        <div className="income-searchbox">
          <input type="text" className="income-search-input" placeholder="Search..." />
          <button className="income-search-btn" onClick={() => Router('/addincome')}>Add</button>
        </div>
        <div className="income-table-wrapper">
          <table className="income-table">
            <thead>
              <tr className="income-table-header">
                <th className="income-column-date">Date</th>
                <th className="income-column-venue">Name</th>
                <th className="income-column-time">Venue</th>
                <th className="income-column-status">Note</th>
                <th className="income-column-actions">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="income-table-row">
                <td className="income-column-date">date</td>
                <td className="income-column-venue">name</td>
                <td className="income-column-time">venue</td>
                <td className="income-column-status">note</td>
                {/* <td className="income-column-status"><button className="income-btn-active">Active</button></td> */}
                <td className="income-column-actions">
                  <img src={del} alt="" className="income-img-delete" />
                  <img src={view} alt="" className="income-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="income-img-edit" />
                </td>
              </tr>
              <tr className="income-table-row">
                <td className="income-column-date">date</td>
                <td className="income-column-venue">name</td>
                <td className="income-column-time">venue</td>
                <td className="income-column-status">note</td>
                {/* <td className="income-column-status"><button className="income-btn-active">Active</button></td> */}
                <td className="income-column-actions">
                  <img src={del} alt="" className="income-img-delete" />
                  <img src={view} alt="" className="income-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="income-img-edit" />
                </td>
              </tr>
              <tr className="income-table-row">
                <td className="income-column-date">date</td>
                <td className="income-column-venue">name</td>
                <td className="income-column-time">venue</td>
                <td className="income-column-status">note</td>
                {/* <td className="income-column-status"><button className="income-btn-active">Active</button></td> */}
                <td className="income-column-actions">
                  <img src={del} alt="" className="income-img-delete" />
                  <img src={view} alt="" className="income-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="income-img-edit" />
                </td>
              </tr>
              <tr className="income-table-row">
                <td className="income-column-date">date</td>
                <td className="income-column-venue">name</td>
                <td className="income-column-time">venue</td>
                <td className="income-column-status">note</td>
                {/* <td className="income-column-status"><button className="income-btn-active">Active</button></td> */}
                <td className="income-column-actions">
                  <img src={del} alt="" className="income-img-delete" />
                  <img src={view} alt="" className="income-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="income-img-edit" />
                </td>
              </tr>
              <tr className="income-table-row">
                <td className="income-column-date">date</td>
                <td className="income-column-venue">name</td>
                <td className="income-column-time">venue</td>
                <td className="income-column-status">note</td>
                {/* <td className="income-column-status"><button className="income-btn-active">Active</button></td> */}
                <td className="income-column-actions">
                  <img src={del} alt="" className="income-img-delete" />
                  <img src={view} alt="" className="income-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="income-img-edit" />
                </td>
              </tr>
              <tr className="income-table-row">
                <td className="income-column-date">date</td>
                <td className="income-column-venue">name</td>
                <td className="income-column-time">venue</td>
                <td className="income-column-status">note</td>
                {/* <td className="income-column-status"><button className="income-btn-active">Active</button></td> */}
                <td className="income-column-actions">
                  <img src={del} alt="" className="income-img-delete" />
                  <img src={view} alt="" className="income-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="income-img-edit" />
                </td>
              </tr>
              {/* Add more income items here */}
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

export default Income