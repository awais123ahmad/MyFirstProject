import React1, { useState } from 'react'
import React from 'react'
import '../css/Employees.css'
import Layout from '../components/Layout'
import edit from '../assets/delete.png'
import view from '../assets/view.png'
import info from '../assets/info.png';
import del from '../assets/edit.png'
import { Router, useNavigate } from 'react-router-dom'
import AddEmployee from './AddEmployee'


const Employees = () => {

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
    <div className="employee-table-container">
        <h1 className="employee-table-title">Employees</h1>
        <div className="employee-searchbox">
          <input type="text" className="employee-search-input" placeholder="Search..." />
          <button className="employee-search-btn" onClick={() => Router('/addemployees')}>Add</button>
        </div>
        <div className="employee-table-wrapper">
          <table className="employee-table">
            <thead>
              <tr className="employee-table-header">
                <th className="employee-column-date">Name</th>
                <th className="employee-column-venue">Email</th>
                <th className="employee-column-status">Phone</th>
                <th className="employee-column-status">City</th>
                <th className="employee-column-status">Address</th>
                <th className="employee-column-actions">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="employee-table-row">
                <td className="employee-column-date">Name</td>
                <td className="employee-column-venue">email@gmail.co</td>
                <td className="employee-column-status">phone</td>
                <td className="employee-column-status">city</td>
                <td className="employee-column-status">address</td>
                {/* <td className="employee-column-status"><button className="employee-btn-active">Active</button></td> */}
                <td className="employee-column-actions">
                  <img src={del} alt="" className="employee-img-delete" />
                  <img src={view} alt="" className="employee-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="employee-img-edit" />
                </td>
              </tr>
              <tr className="employee-table-row">
                <td className="employee-column-date">Name</td>
                <td className="employee-column-venue">email@gmail.co</td>
                <td className="employee-column-status">phone</td>
                <td className="employee-column-status">city</td>
                <td className="employee-column-status">address</td>
                {/* <td className="employee-column-status"><button className="employee-btn-active">Active</button></td> */}
                <td className="employee-column-actions">
                  <img src={del} alt="" className="employee-img-delete" />
                  <img src={view} alt="" className="employee-img-view" />
                  <img src={edit} alt="" className="employee-img-edit" />
                </td>
              </tr>
              <tr className="employee-table-row">
                <td className="employee-column-date">Name</td>
                <td className="employee-column-venue">email@gmail.co</td>
                <td className="employee-column-status">phone</td>
                <td className="employee-column-status">city</td>
                <td className="employee-column-status">address</td>
                {/* <td className="employee-column-status"><button className="employee-btn-active">Active</button></td> */}
                <td className="employee-column-actions">
                  <img src={del} alt="" className="employee-img-delete" />
                  <img src={view} alt="" className="employee-img-view" />
                  <img src={edit} alt="" className="employee-img-edit" />
                </td>
              </tr>
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

export default Employees