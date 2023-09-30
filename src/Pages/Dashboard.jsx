import React from 'react'
import Layout from '../components/Layout'
import '../css/Dashboard.css'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis,linearGradient } from 'recharts'


const data = [
  {"name": "Monday","Earnings": 2000,"Expenses": 1800,"amt": 1400},
  {"name": "Tuesday","Earnings": 3000,"Expenses": 2800,"amt": 2400},
  {"name": "Wednesday","Earnings": 4000,"Expenses": 3800,"amt": 3400},
  {"name": "Thursday","Earnings": 5000,"Expenses": 4900,"amt": 4400},
  {"name": "Friday","Earnings": 6000,"Expenses": 5100,"amt": 5400},
  {"name": "Saturday","Earnings": 7000,"Expenses": 6400,"amt": 6100},
  {"name": "Sunday","Earnings": 8000,"Expenses": 7800,"amt": 7400},
]

const card = [
  {name:'Total earning',amount:'16.6k'},
  {name:'Total earning',amount:'16.6k'},
  {name:'earning ',amount:'16.6k'},
  {name:'Total earning',amount:'16k'},
]

const Dashboard = () => {
  return (
    <Layout>
      <div className='maindiv'>
        <div className='firstdiv'>
          <h1 className='dashboardtext'>Dasboard</h1>
          <input type="date" name="date" className='date' />
        </div>
        <div className='firstline'>
{card.map((value)=>(
          <div className='totalearnings'>
            <h2 className='totalearning'>{value.name}</h2>
            <p className='earning'>${value.amount}</p>
          </div>
))}  
        </div>
 
        <div className='secondline'>
{card.map((value)=>(  
          <div className='totalearnings'>
            <h2 className='totalearning'>{value.name}</h2>
            <p className='earning'>${value.amount}</p>
          </div>
))}          
        </div>
        <div className='secondline'>
{card.map((value)=>(  
          <div className='totalearnings'>
            <h2 className='totalearning'>{value.name}</h2>
            <p className='earning'>${value.amount}</p>
          </div>
))}          
        </div>
        <div className='bacha'>
          <div class="main-container">
            <div class="year-stats">
              <div class="month-group">
                <div class="bar h-100"></div>
                <p class="month">Jan</p>
              </div>
              <div class="month-group">
                <div class="bar h-50"></div>
                <p class="month">Feb</p>
              </div>
              <div class="month-group">
                <div class="bar h-75"></div>
                <p class="month">Mar</p>
              </div>
              <div class="month-group">
                <div class="bar h-25"></div>
                <p class="month">Apr</p>
              </div>
              <div class="month-group selected">
                <div class="bar h-100"></div>
                <p class="month">May</p>
              </div>
              <div class="month-group">
                <div class="bar h-50"></div>
                <p class="month">Jun</p>
              </div>
              <div class="month-group">
                <div class="bar h-75"></div>
                <p class="month">Jul</p>
              </div>
              <div class="month-group">
                <div class="bar h-25"></div>
                <p class="month">Aug</p>
              </div>
              <div class="month-group">
                <div class="bar h-50"></div>
                <p class="month">Sep</p>
              </div>
              <div class="month-group">
                <div class="bar h-75"></div>
                <p class="month">Oct</p>
              </div>
              <div class="month-group">
                <div class="bar h-25"></div>
                <p class="month">Nov</p>
              </div>
              <div class="month-group">
                <div class="bar h-100"></div>
                <p class="month">Dez</p>
              </div>
            </div>

            <div class="stats-info">
              <div class="graph-container">
                <div class="percent">
                  <svg viewBox="0 0 36 36" class="circular-chart">
                    <path class="circle" stroke-dasharray="100, 100" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path class="circle" stroke-dasharray="85, 100" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path class="circle" stroke-dasharray="60, 100" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path class="circle" stroke-dasharray="30, 100" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                </div>
                <p>Total: $16075</p>
              </div>

              <div class="info">
                <p>Most expensive category <br /><span>Restaurants & Dining</span></p>
                <p>Updated categories <span>2</span></p>
                <p>Bonus payments <span>$92</span></p>
              </div>
            </div>

          </div>
          <div class="pie">
            <div class="html">Total Customers</div>
            <div class="css">Total Bookings</div>
          </div>
        </div>


        <AreaChart className='areachart' width={1105} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Earnings" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="Expenses" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>


      </div>
    </Layout>
  )
}

export default Dashboard