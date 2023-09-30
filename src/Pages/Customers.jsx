import React, { useState } from 'react';
import '../css/Customers.css'
import Layout from '../components/Layout';
import edit from '../assets/delete.png';
import info from '../assets/info.png';
import view from '../assets/view.png';
import del from '../assets/edit.png';
import { useNavigate } from 'react-router-dom';

const Customers = () => {

  const navigate = useNavigate(); 
  const [showDeleteConfirmation, setConfirm] = useState(false);

  const handleDeleteClick = () => {
    setConfirm(true);
  };
  const handleConfirmDelete = () => {
    setConfirm(false);
  };

  return (
    <Layout>
      <div className="customer-table-container">
        <h1 className="customer-table-title">Customer</h1>
        <div className="customer-searchbox">
          <input type="text" className="customer-search-input" placeholder="Search..." />
          <button className="customer-search-btn" onClick={() => navigate('/addcustomers')}>Add</button>
        </div>
        <div className="customer-table-wrapper">
          <table className="customer-table">
            <thead>
              <tr className="customer-table-header">
                <th className="customer-column-date">Name</th>
                <th className="customer-column-venue">Email</th>
                <th className="customer-column-status">Phone</th>
                <th className="customer-column-status">City</th>
                <th className="customer-column-status">Address</th>
                <th className="customer-column-actions">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="customer-table-row">
                <td className="customer-column-date">Name</td>
                <td className="customer-column-venue">email@gmail.co</td>
                <td className="customer-column-status">phone</td>
                <td className="customer-column-status">city</td>
                <td className="customer-column-status">address</td>
                <td className="customer-column-actions">
                  <img src={del} alt="" className="customer-img-edit" />
                  <img src={view} alt="" className="customer-img-view" />
                  <img
                    src={edit}
                    alt=""
                    className="customer-img-delete"
                    onClick={handleDeleteClick}
                  />
                </td>
              </tr>
              <tr className="customer-table-row">
                <td className="customer-column-date">Name</td>
                <td className="customer-column-venue">email@gmail.co</td>
                <td className="customer-column-status">phone</td>
                <td className="customer-column-status">city</td>
                <td className="customer-column-status">address</td>
                <td className="customer-column-actions">
                  <img src={del} alt="" className="customer-img-edit" />
                  <img src={view} alt="" className="customer-img-view" />
                  <img
                    src={edit}
                    alt=""
                    className="customer-img-delete"
                    onClick={handleDeleteClick}
                  />
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
  );
};

export default Customers;
