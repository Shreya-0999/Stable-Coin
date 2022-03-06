import React from 'react'
import SideNavBar from '../../Components/VerticleNavBar';
import TopNavBar from '../../Components/TopNavBar';
import QuickLinks from '../../Components/QuickLinks';
import Verification from '../../Components/Verification';
import WalletOverview from '../../Components/WalletOverview';
import Transaction from '../../Components/Transaction';
import StableCoin from '../../Assets/Dashboard/Stable-coin_2.webp'
import './Styles/style.css'


function index() {
    return (
        <>
            <div className='dashboard'>
                <div className='container'>
                    <SideNavBar />
                    <div className='dashboard-mainArea'>
                        <TopNavBar />
                        <div className='dashboard-middlePane'>
                            <div className='dashboard-middlePane-imgBox'>
                                <img src={StableCoin} className='dashboard-img' />
                            </div>
                            <div className='flex'>
                                <WalletOverview />
                                <div className='flex flex-column dashboard-sidelinks'>
                                    <QuickLinks />
                                    <Verification />
                                </div>
                            </div>
                            <Transaction />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default index;