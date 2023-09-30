import React from 'react'
import '../css/Sidebar.css'
import img from '../assets/format.png'
import img1 from '../assets/cloud.png'
import img3 from '../assets/categories.png'
import img4 from '../assets/location.png'
import img5 from '../assets/mall.png'
import img6 from '../assets/support.png'
import img7 from '../assets/hospital-facility.png'
import img8 from '../assets/agenda.png'
import img9 from '../assets/clipboard.png'
import img10 from '../assets/notification.png'
import img11 from '../assets/transaction.png'
import img12 from '../assets/history.png'
import img13 from '../assets/employee.png'
import img14 from '../assets/salary.png'
import img15 from '../assets/attendance.png'
import img16 from '../assets/business-and-finance.png'
import img17 from '../assets/expenses.png'
import img18 from '../assets/interactions.png'
import img19 from '../assets/gallery.png'
import { Router, useNavigate } from 'react-router-dom'
import Types from '../Pages/Types'
import Categories from '../Pages/Categories'
import Locations from '../Pages/Locations'
import Venues from '../Pages/Venues'
import Customers from '../Pages/Customers'
import Facilities from '../Pages/Facilities'
import Bookings from '../Pages/Bookings'
import Inquiries from '../Pages/Inquiries'
import Notifications from '../Pages/Notifications'
import Transactions from '../Pages/Transactions'
import History from '../Pages/History'
import Employees from '../Pages/Employees'
import Salaries from '../Pages/Salaries'
import Attendance from '../Pages/Attendance'
import Income from '../Pages/Income'
import Expense from '../Pages/Expense'
import Interactions from '../Pages/Interactions'
import Gallery from '../Pages/Gallery'

const Sidebar = () => {

    const Router = useNavigate()
    return (
        <div className='sidebar'>
            <div className='data'>
                <ul>
                <li><a className='dashboard' onClick={() => Router('/dashboard')}><img src={img} alt="" />Dashboard</a></li>
                <li><a onClick={() => Router('/types')}><img src={img1} alt="" />Venue Types</a></li>
                <li><a onClick={() => Router('/categories')}><img src={img3} alt="" />Category</a></li>
                <li><a onClick={() => Router('/locations')}><img src={img4} alt="" />Location</a></li>
                <li><a onClick={() => Router('/venues')} ><img src={img5} alt="" />Venues</a></li>
                <li><a onClick={() => Router('/customers')}><img src={img6} alt="" />Customers</a></li>
                <li><a onClick={() => Router('/facilities')}><img src={img7} alt="" />Facilities</a></li>
                <li><a onClick={() => Router('/bookings')}><img src={img8} alt="" />Bookings</a></li>
                <li><a onClick={() => Router('/inquiries')}><img src={img9} alt="" />Inquiries</a></li>
                <li><a onClick={() => Router('/notifications')}><img src={img10} alt="" />Notifications</a></li>
                <li><a onClick={() => Router('/transactions')}><img src={img11} alt="" />Transactions</a></li>
                <li><a onClick={() => Router('/history')}><img src={img12} alt="" />History</a></li>
                <li><a onClick={() => Router('/employees')}><img src={img13} alt="" />Employees</a></li>
                <li><a onClick={() => Router('/salaries')}><img src={img14} alt="" />Salaries</a></li>
                <li><a onClick={() => Router('/attendance')}><img src={img15} alt="" />Attendance</a></li>
                <li><a onClick={() => Router('/income')}><img src={img16} alt="" />Income</a></li>
                <li><a onClick={() => Router('/expense')}><img src={img17} alt="" />Expense</a></li>
                <li><a onClick={() => Router('/interactions')}><img src={img18} alt="" />Interactions</a></li>
                <li><a onClick={() => Router('/gallery')}><img src={img19} alt="" />Gallery</a></li>
            </ul>
        </div>
        </div >
    )
}

export default Sidebar