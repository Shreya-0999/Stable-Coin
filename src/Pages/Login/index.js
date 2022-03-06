import React, { useEffect, useState } from 'react';
import './Styles/style.css'
import Logo from '../../Assets/Login/logo-dark-theme.svg'
import Bgsvg from '../../Assets/Login/Vector 3.svg';
import {connect} from 'react-redux';
import { logInStart } from '../../Core/Actions/userActions';
import {useNavigate} from 'react-router-dom';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate=useNavigate();
    const handleLogin = () => {
        props.logInStart({email, password})
    }

    useEffect(()=>{
        if(props?.currentUser){
           navigate("/dashboard");
        }
    },[props?.currentUser])

    useEffect(async()=>{
        if(props?.loginError){
         console.log(props.loginError);
        }
    },[props.loginError])

    return (
        <>
            <div className='loginPage'>
                <div className='loginPage-bgsvg'>
                    <img src={Bgsvg} className='loginPage-img'/>
                </div>
                <div className='loginPage-l1'>
                    <div className='loginPage-header'>
                        <div className='loginPage-logo'>
                            <img src={Logo} />
                        </div>
                        <div className='loginPage-lang'>
                            <p>EN</p>
                        </div>
                    </div>
                    <div className='loginPage-loginArea'>
                        <h1 className='loginPage-h1'>Welcome into <span className='bold'>STABLECOIN</span></h1>
                        <div className='loginPage-loginBox'>
                            <h3 className='loginPage-signUpSwitch'>Not a member? <span className='bold'>Sign up now!</span></h3>
                            <h2 className='loginPage-heading'>Sign In</h2>
                            <h3 className='loginPage-subHeading'>to access your account</h3>
                            <div className='loginPage-form'>
                                <input className='loginPage-textfield' type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <input className='loginPage-textfield' type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                                <button className='loginPage-loginBtn' onClick={(e) => handleLogin()} >Sign in</button>
                            </div>
                            <p className='loginPage-forgetPass'>Forgot your password?</p>
                        </div>
                    </div>
                    <p className='loginPage-contactInfo'>Contact us at help@stablecoin.co.in <br /> if you have problems</p>
                </div>
            </div>
        </>


    )
}

const mapStateToProps=({user})=>({
    currentUser:user.currentUser,
    loginError:user.loginError
})

const mapDispatchToProps=dispatch => ({
    logInStart:({email,password})=>dispatch(logInStart({email,password}))

})

export default connect(mapStateToProps, mapDispatchToProps)(Login);