import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Prepaid from './components/pages/Prepaid';
import Cylinder from './components/pages/Cylinder';
import FormField from './components/Formfield';
import Popup from './components/Popup';
import PrivacyPolicy from "../src/components/pages/PrivacyPolicy";
import TermsAndConditions from "../src/components/pages/TermsAndConditions";
import Services from "../src/components/pages/Services";
import Myorders from './components/pages/Myorders';
import Contact from './components/pages/Contact';
import Agent from './components/pages/Agent';
import { GoDeviceMobile } from "react-icons/go";
import { GiRadarDish, GiGasStove, GiWifiRouter, GiWaterGallon, GiGasPump, GiElectric, GiRotaryPhone } from "react-icons/gi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoBulbOutline } from "react-icons/io5";
import { MdOutlineRouter } from "react-icons/md"
import { FaHandHoldingWater, FaSatelliteDish } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import Footer from './components/Footer';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="wrapper">
        <header>
          <Navbar setButtonPopup={setButtonPopup} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </header>
        <main>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' exact element={<Home />} >
              <Route path='prepaid' element={<Prepaid />} />
              <Route path='postpaid' element={<FormField message="Recharge or Pay Mobile Bill" icon={<GoDeviceMobile className='icon' />} bill="postpaid" rightIcon={<HiOutlineDevicePhoneMobile className='rightIcon' />} />} />
              <Route path='electricity' element={<FormField message="Electricity Bill Payment" icon={<IoBulbOutline className='icon' />} bill="electricity" rightIcon={<GiElectric className='rightIcon' />} />} />
              <Route path='dth' element={<FormField message="DTH Bill Payment" icon={<GiRadarDish className='icon' />} bill="dth" rightIcon={<FaSatelliteDish className='rightIcon' />} />} />
              <Route path='water' element={<FormField message="Water Bill Payment" icon={<FaHandHoldingWater className='icon' />} bill="water" rightIcon={<GiWaterGallon className="rightIcon" />} />} />
              <Route path='gas' element={<FormField message="Gas Bill Payment" icon={<GiGasStove className='icon' />} bill="gas" rightIcon={<GiGasPump className='rightIcon' />} />} />
              <Route path='landline' element={<FormField message="Landline Bill Payment" icon={<BsTelephone className='icon' />} bill="landline" rightIcon={<GiRotaryPhone className='rightIcon' />} />} />
              <Route path='broadband' element={<FormField message="Broadband Bill Payment" icon={<GiWifiRouter className='icon' />} bill="broadband" rightIcon={<MdOutlineRouter className='rightIcon' />} />} />
              <Route path='cylinder' element={<Cylinder />} />
            </Route>
            <Route path='/about' element={<About name="N.A. TRADERS
" domain="ShortPay.in
" />}></Route>
            <Route path='/privacypolicy' element={<PrivacyPolicy name="N.A. TRADERS
" domain="ShortPay.in" mail="contactus.natraders@gmail.com
" />}></Route>
            <Route path='/termsandconditions' element={<TermsAndConditions name="N.A. TRADERS
" domain="ShortPay.in" />}></Route>
            <Route path='/services' element={<Services name="N.A. TRADERS
" domain="ShortPay.in" />}></Route>
            <Route path='/myorders' element={<Myorders />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/agent' element={<Agent />}></Route>
          </Routes>
        </main>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} ></Popup>
      </div>
    </>
  );
}

export default App;
