import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
    .footercontainer {
        width: 100%;
    }
    footer {
        background-color: #149dcc;
        background: linear-gradient(45deg, #149dcc, #000000);
        padding: 20px 0px 0px 0px;
        color: black;
        text-align: center;
        font-weight: bold;
        width: 100%;
        min-height: 200px;  
    }

    footer .copyright {
        margin-top: 20px;
        color: white;
        background-color: #149dcc;
        background: linear-gradient(45deg, #149dcc, #000000);
        width: 100%;
        padding: 10px 0px;
    }

    footer .copyright span a {
        color: white;
        text-decoration: none;
    }

    footer .copyright span a:hover {
        text-decoration: underline;
    }   

    footer .footerParent {
        display: flex;
        justify-content: space-evenly;
    }


    footer .footerParent h3{
        color: white;
        font-size: 18.288rem;
        line-height: 26px;
        margin-bottom: 10px;
    }


    footer .footerParent ul {
        list-style: none;
    }


    footer .footerParent ul li a {
        color: white;
        cursor: pointer;
        font-size: 16rem;
        line-height: 30px;
        text-decoration: none;
    }

    footer .footerParent .child p {
        max-width: 50%;
        font-size: 16rem;
    }

    @media only screen and (max-width: 500px) {
        footer .footerParent {
            flex-wrap: wrap;
        }
    }

`;

const Footer = (props) => {
    function scrollTop ()  {
        window.scrollTo(0,0)
    }
    return (
        <>
            <Wrapper>
                <div className="footercontainer">
                    <footer>

                        <div className="footerParent">
                            <div className="child">
                                <h3>Quick Links</h3>
                                <ul className="linkList">

                                    <li onClick={scrollTop}><Link to="/about">About</Link></li>
                                    <li onClick={scrollTop}><Link to="/contact">Contact</Link></li>
                                    <li onClick={scrollTop}><Link to="/termsandconditions">Terms and Conditions</Link></li>
                                    <li onClick={scrollTop}><Link to="/privacypolicy">Privacy Policy</Link></li>
                                    <li onClick={scrollTop}><Link to="/services">Services</Link></li>
                                </ul>
                            </div>
                            <div className="child">
                                <h3>Need Help?</h3>
                                <ul className="linkList">
                                    <li onClick={scrollTop}>
                                        <Link to="/privacypolicy">Our Policies</Link>
                                    </li>
                                    <li onClick={scrollTop}>
                                        <Link to="/termsandconditions">Terms and Conditions</Link>
                                    </li>
                                    <li onClick={scrollTop}>
                                        <Link to="/contact">Contact Us</Link>
                                    </li>
                                    <li onClick={scrollTop}>
                                        <Link to="/agent">Become Agent</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="child">
                                <h3>Security Brand</h3>
                                <ul className="linkList">
                                    <li onClick={scrollTop}><Link to="/privacypolicy">Refund Policy</Link></li>
                                    <li onClick={scrollTop}><Link to="/privacypolicy">Disclaimer</Link></li>
                                    <li onClick={scrollTop}><Link to="/termsandconditions">Terms and Conditions</Link></li>
                                </ul>
                            </div>

                        </div>
                        <div className="copyright text">
                            <span><b>© 2018-2023 N.A. TRADERS  All Rights Reserved</b> | ShortPay is a product of N.A. TRADERS</span>
                        </div>
                    </footer>
                </div>
            </Wrapper>
        </>
    );
};

export default Footer;