import React from 'react'
import './Styles/styles.css'
import Logo from '../../Assets/Login/logo-dark-theme.svg';
import Australia from '../../Assets/Home/1.webp';
import London from '../../Assets/Home/2.webp';
import Canada from '../../Assets/Home/3.webp';
import Europe from '../../Assets/Home/4.webp';
import Phone1 from '../../Assets/Home/1-1.webp';
import Phone2 from '../../Assets/Home/2-1.webp';
import Phone3 from '../../Assets/Home/3-1.webp';
import Banner1 from '../../Assets/Home/banner1.png';
import Banner2 from '../../Assets/Home/banner2.webp';
import Banner3 from '../../Assets/Home/banner3.webp';
import Card1 from '../../Assets/Home/card1.webp';
import Card2 from '../../Assets/Home/card2.webp';
import Card3 from '../../Assets/Home/card3.webp';
import Card4 from '../../Assets/Home/card4.webp';
import ZeroFee from '../../Assets/Home/Zero-Fee.webp';
import StableApp from '../../Assets/Home/stableApp.jpeg';
import FooterImg from '../../Assets/Home/footer.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck, faServer, faBolt } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  const handleLogin=()=>{
    navigate("/login");
  }
  return (
    <>
      <div className='navbar flex' >
        <div className='navbar-logo flex'>
          <img src={Logo} className='home-img' />
        </div>
        <div className='navbar-navlist-container flex justify-evenly align-center'>
          <p className='navbar-listItems navbar-active'>Home</p>
          <p className='navbar-listItems'>Help</p>
          <p className='navbar-listItems'>About Us</p>
          <p className='navbar-listItems'>Contact Us</p>
          <p className='navbar-listItems'>Call</p>
          <p className='navbar-listItems'>App</p>
          <p className='navbar-listItems' onClick={handleLogin} >Login</p>
          <p className='navbar-listItems navbar-register text-center'>Register</p>
        </div>
      </div>

      <div className='top-carousal'>
        <div>
          <div class="carousel">
            <ul class="slides">
              <input type="radio" name="radio-buttons" id="img-1" checked />
              <li class="slide-container">
                <div class="slide-image">
                  <img src={Banner1} className="home-img" />
                </div>
                <div class="carousel-controls">
                  <label for="img-3" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-2" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-2" />
              <li class="slide-container">
                <div class="slide-image">
                  <img src={Banner2} className="home-img" />
                </div>
                <div class="carousel-controls">
                  <label for="img-1" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-3" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <input type="radio" name="radio-buttons" id="img-3" />
              <li class="slide-container">
                <div class="slide-image">
                  <img src={Banner3} className="home-img" />
                </div>
                <div class="carousel-controls">
                  <label for="img-2" class="prev-slide">
                    <span>&lsaquo;</span>
                  </label>
                  <label for="img-1" class="next-slide">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
              <div class="carousel-dots">
                <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
                <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
                <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className='globalBox flex flex-column justify-center align-center'>
        <p className='home-subHeading text-center white-text'>We have offices in the four global financial capitals. Do you want to join us?</p>
        <h1 className='home-heading green-text text-center'>GLOBAL PRESENCE</h1>
        <div className='globalBox-countryBox flex justify-evenly align-center'>
          <div className='global-countryItems flex flex-column align-center'>
            <div className='global-countryImgBox'>
              <img src={Australia} className='home-img global-img' />
            </div>
            <button className='global-countryBtn green-text'>Australia</button>
          </div>
          <div className='global-countryItems flex flex-column align-center'>
            <div className='global-countryImgBox'>
              <img src={London} className='home-img global-img' />
            </div>
            <button className='global-countryBtn green-text'>London</button>
          </div>
          <div className='global-countryItems flex flex-column align-center'>
            <div className='global-countryImgBox'>
              <img src={Canada} className='home-img global-img' />
            </div>
            <button className='global-countryBtn green-text'>Canada</button>
          </div>
          <div className='global-countryItems flex flex-column align-center'>
            <div className='global-countryImgBox'>
              <img src={Europe} className='home-img global-img' />
            </div>
            <button className='global-countryBtn green-text'>Europe</button>
          </div>
        </div>
      </div>

      <div className="zeroFee flex justify-center align-center">
        <div className='zeroFee-imgBox'>
          <img src={ZeroFee} className='home-img' />
        </div>
        <div className='zeroFee-content flex flex-column justify-center align-center'>
          <h2 className='home-heading text-center green-text'>PAY NOTHING WHEN YOU</h2>
          <div className=' flex justify-evenly'>
            <div className='flex justify-evenly'>
              <img />
              <p className='zeroFee-text'>Buy</p>
            </div>
            <div className='flex justify-evenly'>
              <img />
              <p className='zeroFee-text'>Sell</p>
            </div>
            <div className=' flex justify-evenly'>
              <img />
              <p className='zeroFee-text'>Deposit</p>
            </div>
            <div className='flex justify-evenly'>
              <img />
              <p className='zeroFee-text'>Withdraw</p>
            </div>
          </div>
        </div>
      </div>

      <div className="stableApp flex align-center">
        <div className='stableApp-content'>
          <h2 className='home-heading green-text'>TRUSTED PLATFORM<br />
            ANYTIME & ANYWHERE</h2>
          <p className='stableApp-subHeading'>The Stablecoin mobile app adapts
            the full functionality of the Stablecoin
            platform for seamless ‘on-the-go’ trading
          </p>
          <div></div>
        </div>
        <div className='stableApp-imgBox'>
          <img src={StableApp} className='home-img' />
        </div>
      </div>

      <div className='feature flex align-center justify-center'>
        <div className='feature-box'>
          <div className='feature-iconBox'>
            <FontAwesomeIcon icon={faUserCheck} color='#018143' size='3x' />
          </div>
          <h2 className='feature-heading'>
            USER-FRIENDLY
          </h2>
          <p className='feature-subHeading'>
            The platform is user-friendly offering guidance and tutorial for first time users.
          </p>
        </div>
        <div className='feature-box'>
          <div className='feature-iconBox'>
            <FontAwesomeIcon icon={faServer} color='#018143' size='3x' />

          </div>
          <h2 className='feature-heading'>
            SECURE
          </h2>
          <p className='feature-subHeading'>
            Security above everything. The platform is safe and private.
          </p>
        </div>
        <div className='feature-box'>
          <div className='feature-iconBox'>
            <FontAwesomeIcon icon={faBolt} color='#018143' size='3x' />

          </div>
          <h2 className='feature-heading'>
            LIGHTNING QUICK
          </h2>
          <p className='feature-subHeading'>
            High performance and high speed transactions.
          </p>
        </div>
      </div>

      <div className='working flex align-center justify-center flex-column'>
        <h2 className='home-heading white-text'>BUY. SELL. TRADE</h2>
        <p className='white-text home-subHeading text-center'>Stablecoin enables you to buy, sell and trade cryptocurrencies in just three simple steps</p>
        <div className='flex align-center justify-center'>
          <div className='working-cards'>
            <h3 className='working-card-head white-text text-center'>
              Download the App
            </h3>
            <div className='flex align-center'>
              <div className='working-imgBox'>
                <img src={Phone1} className='home-img' />
              </div>
              <p className='working-card-subheading working-subHeading white-text text-center'>Download our mobile app on App Store for IOS users</p>
            </div>
          </div>
          <div className='working-cards'>
            <h3 className='working-card-head white-text text-center'>
              Complete KYC
            </h3>
            <div className='flex align-center'>
              <div className='working-imgBox'>
                <img src={Phone2} className='home-img' />
              </div>
              <p className='working-card-subheading working-subHeading white-text text-center'>
                Complete your KYC in under 5 minutes with just your PAN, Adhar & a Selfie
              </p>
            </div>
          </div>
          <div className='working-cards'>
            <h3 className='working-card-head white-text text-center'>
              Trade
            </h3>
            <div className='flex align-center'>
              <div className='working-imgBox'>
                <img src={Phone3} className='home-img' />
              </div>
              <p className='working-card-subheading working-subHeading white-text text-center'>
                One-click is what it takes to start trading in 100+ cryptocurrencies
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='bottom-carousal flex align-center justify-center flex-column'>
        <h2 className='home-heading green-text'>WHY STABLECOIN EXCHANGE?</h2>
        <p className='white-text home-subHeading text-center'>
          Stablecoin are cryptocurrencies without the volatility. They share a lot of the same powers as ETH but their value is steady, more like a traditional currency. So you have access to stable money that you can use on Ethereum.
        </p>
        <div className='carousal-container'>
          <div class="flex">
            <div class="entry">
              <img src={Card1} className='home-img' />
            </div>
            <div class="entry">
              <img src={Card2} className='home-img' />
            </div>
            <div class="entry">
              <img src={Card3} className='home-img' />
            </div>
            <div class="entry">
              <img src={Card4} className='home-img' />
            </div>

          </div>
        </div>
        <button className='bottom-carousal-btn white-text'>
          Need an institutional account ?
        </button>
      </div>

      <div className='home-footer flex align-center justify-center'>
        <div className='footer-details'>
          <p className='footer-para white-text'>
            The purpose of this website is solely to display information regarding the products and services available on the stablecoin.co.in App. It is not intended to offer access to any of such products and services. You may obtain access to such products and services on the stablecoin.co.in App.Please note that the availability of the products and services on the stablecoin.co.in App is subject to jurisdictional limitations. stablecoin.co.in may not offer certain products, features and/or services on the stablecoin.co.in App in certain jurisdictions due to potential or actual regulatory restrictions.
          </p>
          <div className='footer-imgBox'>
            <img src={FooterImg} className='home-img' />
          </div>
        </div>
        <div className='footer-socialLinksBox flex flex-column align-center justify-center'>
          <h3 className='white-text'>FOLLOW US</h3>
          <div className='flex align-center justify-evenly'>
            <div className='footer-linkBox'></div>
            <div className='footer-linkBox'></div>
            <div className='footer-linkBox'></div>
          </div>
        </div>
      </div>

      <div className='home-bottomLine flex align-center justify-evenly'>
        <h2 className='home-bottomLine-text'>PRIVACY POLICY</h2>
        <h2 className='home-bottomLine-text'>TERMS AND CONDITIONS</h2>
        <h2 className='home-bottomLine-text'>REFUND AND CANCELLATION POLICY</h2>
        <h2 className='home-bottomLine-text'>CONTACT US: Toll-free Number :- 1800-203-5315</h2>
      </div>

    </>
  )
}

export default Home;