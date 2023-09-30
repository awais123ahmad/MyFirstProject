import React1, { useState } from 'react'
import React from 'react'
import '../css/Expense.css'
import edit from '../assets/delete.png'
import view from '../assets/view.png'
import info from '../assets/info.png';
import del from '../assets/edit.png'
import AddExpense from './AddExpense'
import Layout from '../components/Layout'
import { Router, useNavigate } from 'react-router-dom'

const Expense = () => {
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
      <div className="expense-table-container">
        <h1 className="expense-table-title">Expense</h1>
        <div className="expense-searchbox">
          <input type="text" className="expense-search-input" placeholder="Search..." />
          <button className="expense-search-btn" onClick={() => Router('/addexpense')}>Add</button>
        </div>
        <div className="expense-table-wrapper">
          <table className="expense-table">
            <thead>
              <tr className="expense-table-header">
                <th className="expense-column-date">Date</th>
                <th className="expense-column-venue">Name</th>
                <th className="expense-column-time">Venue</th>
                <th className="expense-column-status">Note</th>
                <th className="expense-column-actions">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="expense-table-row">
                <td className="expense-column-date">date</td>
                <td className="expense-column-venue">name</td>
                <td className="expense-column-time">venue</td>
                <td className="expense-column-status">note</td>
                {/* <td className="expense-column-status"><button className="expense-btn-active">Active</button></td> */}
                <td className="expense-column-actions">
                  <img src={del} alt="" className="expense-img-delete" />
                  <img src={view} alt="" className="expense-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="expense-img-edit" />
                </td>
              </tr>
              <tr className="expense-table-row">
                <td className="expense-column-date">date</td>
                <td className="expense-column-venue">name</td>
                <td className="expense-column-time">venue</td>
                <td className="expense-column-status">note</td>
                {/* <td className="expense-column-status"><button className="expense-btn-active">Active</button></td> */}
                <td className="expense-column-actions">
                  <img src={del} alt="" className="expense-img-delete" />
                  <img src={view} alt="" className="expense-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="expense-img-edit" />
                </td>
              </tr>
              <tr className="expense-table-row">
                <td className="expense-column-date">date</td>
                <td className="expense-column-venue">name</td>
                <td className="expense-column-time">venue</td>
                <td className="expense-column-status">note</td>
                {/* <td className="expense-column-status"><button className="expense-btn-active">Active</button></td> */}
                <td className="expense-column-actions">
                  <img src={del} alt="" className="expense-img-delete" />
                  <img src={view} alt="" className="expense-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="expense-img-edit" />
                </td>
              </tr>
              <tr className="expense-table-row">
                <td className="expense-column-date">date</td>
                <td className="expense-column-venue">name</td>
                <td className="expense-column-time">venue</td>
                <td className="expense-column-status">note</td>
                {/* <td className="expense-column-status"><button className="expense-btn-active">Active</button></td> */}
                <td className="expense-column-actions">
                  <img src={del} alt="" className="expense-img-delete" />
                  <img src={view} alt="" className="expense-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="expense-img-edit" />
                </td>
              </tr>
              <tr className="expense-table-row">
                <td className="expense-column-date">date</td>
                <td className="expense-column-venue">name</td>
                <td className="expense-column-time">venue</td>
                <td className="expense-column-status">note</td>
                {/* <td className="expense-column-status"><button className="expense-btn-active">Active</button></td> */}
                <td className="expense-column-actions">
                  <img src={del} alt="" className="expense-img-delete" />
                  <img src={view} alt="" className="expense-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="expense-img-edit" />
                </td>
              </tr>
              <tr className="expense-table-row">
                <td className="expense-column-date">date</td>
                <td className="expense-column-venue">name</td>
                <td className="expense-column-time">venue</td>
                <td className="expense-column-status">note</td>
                {/* <td className="expense-column-status"><button className="expense-btn-active">Active</button></td> */}
                <td className="expense-column-actions">
                  <img src={del} alt="" className="expense-img-delete" />
                  <img src={view} alt="" className="expense-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="expense-img-edit" />
                </td>
              </tr>
              <tr className="expense-table-row">
                <td className="expense-column-date">date</td>
                <td className="expense-column-venue">name</td>
                <td className="expense-column-time">venue</td>
                <td className="expense-column-status">note</td>
                {/* <td className="expense-column-status"><button className="expense-btn-active">Active</button></td> */}
                <td className="expense-column-actions">
                  <img src={del} alt="" className="expense-img-delete" />
                  <img src={view} alt="" className="expense-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="expense-img-edit" />
                </td>
              </tr>
              <tr className="expense-table-row">
                <td className="expense-column-date">date</td>
                <td className="expense-column-venue">name</td>
                <td className="expense-column-time">venue</td>
                <td className="expense-column-status">note</td>
                {/* <td className="expense-column-status"><button className="expense-btn-active">Active</button></td> */}
                <td className="expense-column-actions">
                  <img src={del} alt="" className="expense-img-delete" />
                  <img src={view} alt="" className="expense-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="expense-img-edit" />
                </td>
              </tr>
              <tr className="expense-table-row">
                <td className="expense-column-date">date</td>
                <td className="expense-column-venue">name</td>
                <td className="expense-column-time">venue</td>
                <td className="expense-column-status">note</td>
                {/* <td className="expense-column-status"><button className="expense-btn-active">Active</button></td> */}
                <td className="expense-column-actions">
                  <img src={del} alt="" className="expense-img-delete" />
                  <img src={view} alt="" className="expense-img-view" />
                  <img src={edit} onClick={handleDeleteClick} alt="" className="expense-img-edit" />
                </td>
              </tr>
              {/* Add more expense items here */}
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

export default Expense;
