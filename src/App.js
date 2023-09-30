import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landingpage from "./Pages/Landingpage";
import Dashboard from "./Pages/Dashboard";
import Types from "./Pages/Types";
import Categories from "./Pages/Categories";
import Locations from "./Pages/Locations";
import Venues from "./Pages/Venues";
import Customers from "./Pages/Customers";
import Facilities from "./Pages/Facilities";
import Bookings from "./Pages/Bookings";
import Inquiries from "./Pages/Inquiries";
import Notifications from "./Pages/Notifications";
import Transactions from "./Pages/Transactions"
import History from "./Pages/History"
import Employees from "./Pages/Employees"
import Salaries from "./Pages/Salaries"
import Attendance from "./Pages/Attendance"
import Income from "./Pages/Income"
import Expense from "./Pages/Expense"
import Interactions from "./Pages/Interactions"
import Gallery from "./Pages/Gallery"
import SalariesAdd from "./Pages/SalariesAdd";
import AddTypes from "./Pages/AddTypes";
import AddCategory from "./Pages/AddCategory";
import AddLocation from "./Pages/AddLocation";
import AddVenue from "./Pages/AddVenue";
import AddCustomer from "./Pages/AddCustomer";
import AddFacilities from './Pages/AddFacilities'
import AddBookings from "./Pages/AddBookings";
import AddInquiries from "./Pages/AddInquiries";
import AddTransactions from "./Pages/AddTransactions";
import AddHistories from "./Pages/AddHistories";
import AddEmployee from "./Pages/AddEmployee";
import AddAttendance from "./Pages/AddAttendance";
import AddIncome from "./Pages/AddIncome";
import AddExpense from "./Pages/AddExpense";
import AddInteractions from "./Pages/AddInteractions";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/addfacilities' element={<AddFacilities/>}></Route>
          <Route path="/addinteractions" element={<AddInteractions/>}></Route>
          <Route path= '/addexpense' element={<AddExpense/>}></Route>
          <Route path="/addincome" element={<AddIncome/>}></Route>
          <Route path="/addattendance" element={<AddAttendance/>}></Route>
          <Route path='/addemployees' element={<AddEmployee/>}></Route>
          <Route path='/addhistories' element={<AddHistories/>}></Route>
          <Route path="/addtransactions" element={<AddTransactions/>}></Route>
          <Route path="/addinquiries" element={<AddInquiries/>}></Route>
          <Route path="/addbookings" element={<AddBookings/>}></Route>
          <Route path='/addcustomers' element={<AddCustomer/>}></Route>
          <Route path="/addvenue" element={<AddVenue />}></Route>
          <Route path="/addcategories" element={<AddCategory/>}></Route>
          <Route path="/addlocations" element={<AddLocation/>}></Route>
          <Route path="/addtypes" element={<AddTypes/>}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/types' element={<Types />}></Route>
          <Route path='/SalariesAdd' element={<SalariesAdd />}></Route>
          <Route path='/categories' element={<Categories />}></Route>
          <Route path='/locations' element={<Locations />}></Route>
          <Route path='/venues' element={<Venues />}></Route>
          <Route path='/customers' element={<Customers />}></Route>
          <Route path='/facilities' element={<Facilities />}></Route>
          <Route path='/bookings' element={<Bookings />}></Route>
          <Route path='/inquiries' element={<Inquiries />}></Route>
          <Route path='/notifications' element={<Notifications />}></Route>
          <Route path='/transactions' element={<Transactions />}></Route>
          <Route path='/history' element={<History/>}></Route>
          <Route path='/employees' element={<Employees />}></Route>
          <Route path='/salaries' element={<Salaries />}></Route>
          <Route path='/attendance' element={<Attendance />}></Route>
          <Route path='/income' element={<Income/>}></Route>
          <Route path='/expense' element={<Expense />}></Route>
          <Route path='/interactions' element={<Interactions />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
