import React from 'react';
import './Styles/styles.css';
import '../../Pages/Dashboard/Styles/style.css';
import {logOutSuccess} from '../../Core/Actions/userActions';
import {connect} from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Logout = (props) => {
  const navigate=useNavigate();
  const handleLogout=()=>{
    props.logOutSuccess();
    navigate("/");
  }
  return (
    <>
        <div className="topNav flex justify-center align-center">
            <button className="dashboard-btn" onClick={handleLogout}>Logout</button>
        </div>
    </>
  )
}

const mapDispatchToProps=dispatch=>({
  logOutSuccess:()=>dispatch(logOutSuccess())
})

export default connect(null,mapDispatchToProps)(Logout)