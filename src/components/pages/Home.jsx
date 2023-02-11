import React, { useEffect } from 'react';
import './Home.css';
import { GoDeviceMobile } from "react-icons/go";
import { GiRadarDish, GiGasStove, GiWifiRouter } from "react-icons/gi";
import { IoBulbOutline } from "react-icons/io5";
import { FaHandHoldingWater } from "react-icons/fa";
import { BiCylinder } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { RiBillLine } from "react-icons/ri"
import { AiOutlineArrowDown } from "react-icons/ai"
import { Link, useParams } from "react-router-dom";
import AboutInfo from "../AboutInfo"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Outlet } from 'react-router-dom';

import Banner from '../Banner';
import Footer from "../Footer";
import { FaMobileAlt } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci"

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    function toggleHeight() {
        let payments = document.getElementById("payments");
        payments.classList.toggle("increaseHeight");

        let icon = document.getElementById("moreIcon");
        icon.classList.toggle("rotate");

        let itemRow = document.getElementById("itemRow");
        itemRow.classList.toggle("v-class-icons")
    }
    return (
        <>
            <div className="homeWrapper">
                <Banner />
                <div className="paymentContainer" id="payments">
                    <div className="paymentOptions">
                        <div className="itemRow">
                            <Link to="/prepaid" className="item">
                                <div className="iconContainer">
                                    <FaMobileAlt className='icon' />
                                </div>
                                <div className="imageText text">
                                    <p>Prepaid</p>
                                </div>
                            </Link>
                            <Link to="/postpaid" className="item postpaid">
                                <div className="iconContainer">
                                    <GoDeviceMobile className='icon' />
                                </div>
                                <div className="imageText text">
                                    <p>Postpaid</p>
                                </div>
                            </Link>
                            <Link to="/dth" className="item dth">
                                <div className="iconContainer">
                                    <GiRadarDish className='icon' />
                                </div>
                                <div className="imageText text">
                                    <p>DTH</p>
                                </div>
                            </Link>
                            <Link to="/electricity" className="item electricity">
                                <div className="iconContainer">
                                    <IoBulbOutline className='icon' />
                                </div>
                                <div className="imageText text">
                                    <p>Electricity</p>
                                </div>
                            </Link>

                        </div>
                        <div className="itemRow v-class-icons " id='itemRow'>
                            <Link to="/gas" className="item gas">
                                <div className="iconContainer">
                                    <GiGasStove className='icon' />
                                </div>
                                <div className="imageText text">
                                    <p>Gas</p>
                                </div>
                            </Link>
                            <Link to="/broadband" className="item broadband">
                                <div className="iconContainer">
                                    <GiWifiRouter className="icon" />
                                </div>
                                <div className="imageText text">
                                    <p>Broadband</p>
                                </div>
                            </Link>
                            <Link to="/cylinder" className="item  cylinder">
                                <div className="iconContainer">
                                    <BiCylinder className="icon" />
                                </div>
                                <div className="imageText text">
                                    <p>Cylinder</p>
                                </div>
                            </Link>
                            <Link to="/landline" className="item  landline">
                                <div className="iconContainer">
                                    <BsTelephone className="icon" />
                                </div>
                                <div className="imageText text">
                                    <p>Landline</p>
                                </div>
                            </Link>
                            <Link to="/water" className="item water">
                                <div className="iconContainer">
                                    <FaHandHoldingWater className='icon' />
                                </div>
                                <div className="imageText text">
                                    <p>Water</p>
                                </div>
                            </Link>
                        </div>
                        <button className='morebtn' onClick={toggleHeight} ><AiOutlineArrowDown className='moreIcon' id='moreIcon'/>More</button>
                    </div>
                    
                </div>

                <Outlet />

                <section className="features">
                    <div className="features-overlay"></div>
                    <div className="overlay-container">
                        <div className="features-text">
                            <div className="features-text-row">
                                <div className="features-card">
                                    <div className="features-icon-container">
                                        <CiMobile1 className='features-icon' />
                                    </div>
                                    <div className="features-card-text">
                                        <h4>Mobile Recharge</h4>
                                        <p>Prepaid/Postpaid recharges for mobile networks like Aircel,BSNL, Airtel , Idea , Reliance ,Tata, Vodafone and Uninor.</p>
                                    </div>
                                </div>
                                <div className="features-card ml30">
                                    <div className="features-icon-container">
                                        <GiRadarDish className='features-icon' />
                                    </div>
                                    <div className="features-card-text">
                                        <h4>DTH Recharge</h4>
                                        <p>Prepaid/Postpaid recharges for mobile networks like Aircel,BSNL, Airtel , Idea , Reliance ,Tata, Vodafone and Uninor.</p>
                                    </div>
                                </div>
                                <div className="features-card ml30">
                                    <div className="features-icon-container">
                                        <RiBillLine className='features-icon' />
                                    </div>
                                    <div className="features-card-text">
                                        <h4>Utility Bills</h4>
                                        <p>All types of utility bill payments like electricity bills, water bills, cylinder booking etc with the ease of payments.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="aboutWrapper">
                    <AboutInfo domain="Shortpay.in" />
                </div>



                <Footer/>
            </div>

        </>
    );
}

export default Home;