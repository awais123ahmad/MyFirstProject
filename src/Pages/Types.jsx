import React, { useState } from 'react';
import '../css/Types.css';
import edit from '../assets/delete.png';
import del from '../assets/edit.png';
import Layout from '../components/Layout';
import { Router, useNavigate } from 'react-router-dom';
import AddTypes from './AddTypes';
import { FiAlertCircle } from 'react-icons/fi'


const Types = () => {
  const [asim, setAsim] = useState(false);

  const asimis = () => {
    setAsim(true);
  };
  const asimin = () => {
    setAsim(false)
  };

  const [isActive, active] = useState(false);

  const toggleStatus = () => {
    active(!isActive);
  };

const Router = useNavigate();

  return (
    <Layout>
      <div className="types-table-container">
        <h1 className="types-table-title">Venue Types</h1>
        <div className="types-searchbox">
          <input type="text" className="types-search-input" placeholder="Search..." />
          <button className="types-search-btn" onClick={() => Router('/addTypes')}>Add</button>
        </div>
        <div className="types-table-wrapper">
          <table className="types-table">
            <thead>
              <tr className="types-table-header">
                <th className="types-column-date">Name</th>
                <th className="types-column-venue">Description</th>
                <th className="types-column-status">Status</th>
                <th className="types-column-actions">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="types-table-row">
                <td className="types-column-date">Name</td>
                <td className="types-column-venue">Description</td>
                <td className="types-column-status">
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
                </td>
                <td className="types-column-actions">
                  <img src={del} alt="" className="types-img-delete" />
                  <img src={edit} alt="" className="types-img-edit" onClick={asimis}/>

                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
        {asim && (
                <div className='confirmation-dialog'>
                  <FiAlertCircle className='bh'/><br />
                  <p>Are you Sure You Want to Delete This Type?</p><br />
                  <button onClick={asimin} >YES</button>
                  <button onClick={() => setAsim(false)} >NO</button>
                </div>
              )}
      </div>
    </Layout>
  )
}

export default Types