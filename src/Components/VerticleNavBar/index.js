import React from 'react';
import Logo from '../../Assets/Dashboard/logo-dark-theme.svg';
import Dashboard from '../../Assets/Dashboard/menu.png';
import Funds from '../../Assets/Dashboard/funds.png';
import Exchange from '../../Assets/Dashboard/exchange.png';
import Wallet from '../../Assets/Dashboard/wallet.png';
import History from '../../Assets/Dashboard/align-left.png';
import Profile from '../../Assets/Dashboard/user.png';
import HelpDesk from '../../Assets/Dashboard/help-web-button.png';
import './Styles/style.css'

const index = () => {
  return (
    <>
      <div className='sideNav'>
        <div className='sideNav-logo'>
          <img src={Logo} />
        </div>
        <ul className='sideNav-listContainer'>
          <li>
            <div className='sideNav-listBox'>
              <div className='sideNav-imgBox'>
                <img src={Dashboard} className='sideNav-img' />
              </div>
              <p className='sideNav-list'>Dashboard</p>
            </div>
            <div className='sideNav-listBox'>
              <div className='sideNav-imgBox'>
                <img src={Wallet} className='sideNav-img' />
              </div>
              <p className='sideNav-list'>Wallet</p>
            </div>
            <div className='sideNav-listBox'>
              <div className='sideNav-imgBox'>
                <img src={Funds} className='sideNav-img' />
              </div>
              <p className='sideNav-list'>Funds</p>
            </div>
            <div className='sideNav-listBox'>
              <div className='sideNav-imgBox'>
                <img src={Exchange} className='sideNav-img' />
              </div>
              <p className='sideNav-list'>Exchange</p>
            </div>
            <div className='sideNav-listBox'>
              <div className='sideNav-imgBox'>
                <img src={History} className='sideNav-img' />
              </div>
              <p className='sideNav-list'>History</p>
            </div>
            <div className='sideNav-listBox'>
              <div className='sideNav-imgBox'>
                <img src={Profile} className='sideNav-img' />
              </div>
              <p className='sideNav-list'>Profile</p>
            </div>
            <div className='sideNav-listBox'>
              <div className='sideNav-imgBox'>
                <img src={HelpDesk} className='sideNav-img' />
              </div>
              <p className='sideNav-list'>Helpdesk</p>
            </div>
          </li>
        </ul>

        <p className='sideNav-help'>Need help?</p>
      </div>
    </>
  )
}

export default index;