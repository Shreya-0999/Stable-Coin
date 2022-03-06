import React from 'react';
import './Styles/styles.css'
import '../../Pages/Dashboard/Styles/style.css'

const index = () => {
  return (
    <>
    <div className="transaction">
      <p className="dashboard-middlePane-header white-text">Recent Transactions</p>
      <p className="transaction-text">Empty List</p>
      <button className="dashboard-btn">See Full History</button>
    </div>

    </>
  )
}

export default index