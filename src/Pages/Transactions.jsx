import React, { useState } from 'react';
import '../css/Transactions.css'; // Make sure to include your CSS file
import Layout from '../components/Layout';
import edit from '../assets/delete.png';
import view from '../assets/view.png';
import del from '../assets/edit.png';
import info from '../assets/info.png';
import { Router, useNavigate } from 'react-router-dom';
import AddTransactions from './AddTransactions';

const Transactions = () => {
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
      <div className="salaries-table-container">
        <h1 className="salaries-table-title">Transactions</h1>
        <div className="salaries-searchbox">
          <input type="text" className="salaries-search-input" placeholder="Search..." />
          <button className="salaries-search-btn" onClick={() => Router('/addtransactions')}>Add</button>
        </div>
        <div className="salaries-table-wrapper">
          <table className="salaries-table">
            <thead>
              <tr className="salaries-table-header">
                <th className="salaries-column-date">Name</th>
                <th className="salaries-column-venue">Employee</th>
                <th className="salaries-column-venue">Date</th>
                <th className="salaries-column-venue">Time</th>
                {/* <th className="salaries-column-status">Status</th> */}
                <th className="salaries-column-actions">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="salaries-table-row">
                <td className="salaries-column-date">Name</td>
                <td className="salaries-column-venue">Employee</td>
                <td className="salaries-column-venue">Date</td>
                <td className="salaries-column-venue">Time</td>
                {/* <td className="salaries-column-status">
                  <button
                    className={`sal-inac`}
                    onClick={toggleStatus}
                    style={{
                      backgroundColor: isActive ? 'green' : 'rgb(231, 116, 78)',
                      color: 'white'
                    }}
                  >
                    {isActive ? 'Active' : 'Inactive'}
                  </button>
                </td> */}
                <td className="salaries-column-actions">
                  <img src={del} alt="" className="salaries-img-delete" />
                  <img src={view} alt="" className="salaries-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="salaries-img-edit" />
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

export default Transactions