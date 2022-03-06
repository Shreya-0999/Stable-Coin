import React from 'react';
import './Styles/styles.css';
import '../../Pages/Dashboard/Styles/style.css';
import data from '../../Core/Services/data'

const index = () => {
  return (
    <>
      <div className="walletOverview">
        <p className="dashboard-middlePane-header white-text">Wallet Overview</p>
        <div className='wallet-totalCard flex flex-column justify-center align-center'>
          <p className="side-margin wallet-coinDeatil1 white-text">0.00USD</p>
          <p className="side-margin wallet-coinDeatil2">Total Balance</p>
        </div>
        <div className="walletOverview-balanceContainer flex">
          {
            data?.coins.map((coin, index) => (
              <div className='wallet-coinContainer flex flex-column justify-center'>
                <div className='wallet-coinDeatil1 flex'>
                  <p className='white-text side-margin'>{coin.abbr}</p>
                  <p className='white-text side-margin'>{coin.amt1}</p>
                </div>
                <div className='wallet-coinDeatil2 flex'>
                  <p className='side-margin'>{coin.name}</p>
                  <p className='side-margin'>{coin.amt2}</p>
                </div>
              </div>
            ))
          }

        </div>
      </div>

    </>
  )
}

export default index