import React from 'react';
import '../css/History.css';
import edit from '../assets/delete.png'
import view from '../assets/view.png'
import Layout from '../components/Layout';
import { Router, useNavigate } from 'react-router-dom';
import AddHistories from './AddHistories';

const History = () => {

  const Router = useNavigate();
  return (
    <Layout>
      <div className="history-table-container">
        <h1 className="history-table-title">History</h1>
        <div className="history-searchbox">
          <input type="text" className="history-search-input" placeholder="Search..." />
          <button className="history-search-btn" onClick={() => Router('/addhistories')}>Add</button>
        </div>
        <div className="history-table-wrapper">
          <table className="history-table">
            <thead>
              <tr className="history-table-header">
                <th className="history-column-date">Name</th>
                <th className="history-column-venue">City</th>
                <th className="history-column-time">Email</th>
                <th className="history-column-status">Phone</th>
                <th className="history-column-status">Address</th>
                <th className="history-column-actions">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="history-table-row">
                <td className="history-column-date">Name</td>
                <td className="history-column-venue">City</td>
                <td className="history-column-time">Email</td>
                <td className="history-column-status">Phone</td>
                <td className="history-column-status">Address</td>
                {/* <td className="history-column-status"><button className="history-btn-active">Active</button></td> */}
                <td className="history-column-actions">

                  <img src={view} alt="" className="history-img-view" />
                </td>
              </tr>
              <tr className="history-table-row">
                <td className="history-column-date">Name</td>
                <td className="history-column-venue">City</td>
                <td className="history-column-time">Email</td>
                <td className="history-column-status">Phone</td>
                <td className="history-column-status">Address</td>
                {/* <td className="history-column-status"><button className="history-btn-active">Active</button></td> */}
                <td className="history-column-actions">

                  <img src={view} alt="" className="history-img-view" />
                </td>
              </tr>
              <tr className="history-table-row">
                <td className="history-column-date">Name</td>
                <td className="history-column-venue">City</td>
                <td className="history-column-time">Email</td>
                <td className="history-column-status">Phone</td>
                <td className="history-column-status">Address</td>
                {/* <td className="history-column-status"><button className="history-btn-active">Active</button></td> */}
                <td className="history-column-actions">

                  <img src={view} alt="" className="history-img-view" />
                </td>
              </tr>
              <tr className="history-table-row">
                <td className="history-column-date">Name</td>
                <td className="history-column-venue">City</td>
                <td className="history-column-time">Email</td>
                <td className="history-column-status">Phone</td>
                <td className="history-column-status">Address</td>
                {/* <td className="history-column-status"><button className="history-btn-active">Active</button></td> */}
                <td className="history-column-actions">

                  <img src={view} alt="" className="history-img-view" />
                </td>
              </tr>
              <tr className="history-table-row">
                <td className="history-column-date">Name</td>
                <td className="history-column-venue">City</td>
                <td className="history-column-time">Email</td>
                <td className="history-column-status">Phone</td>
                <td className="history-column-status">Address</td>
                {/* <td className="history-column-status"><button className="history-btn-active">Active</button></td> */}
                <td className="history-column-actions">

                  <img src={view} alt="" className="history-img-view" />
                </td>
              </tr>
              <tr className="history-table-row">
                <td className="history-column-date">Name</td>
                <td className="history-column-venue">City</td>
                <td className="history-column-time">Email</td>
                <td className="history-column-status">Phone</td>
                <td className="history-column-status">Address</td>
                {/* <td className="history-column-status"><button className="history-btn-active">Active</button></td> */}
                <td className="history-column-actions">

                  <img src={view} alt="" className="history-img-view" />
                </td>
              </tr>
              <tr className="history-table-row">
                <td className="history-column-date">Name</td>
                <td className="history-column-venue">City</td>
                <td className="history-column-time">Email</td>
                <td className="history-column-status">Phone</td>
                <td className="history-column-status">Address</td>
                {/* <td className="history-column-status"><button className="history-btn-active">Active</button></td> */}
                <td className="history-column-actions">

                  <img src={view} alt="" className="history-img-view" />
                </td>
              </tr>
              {/* Add more history items here */}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>

  );
}

export default History;
