import React from "react";
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = (props) => {
    const authSetup = () => {
        const authkey = localStorage.getItem("auth")
        if (authkey) { props.setIsLoggedIn(true) }
    }
    useEffect(() => {
        authSetup()
    }, []);
    const navigate = useNavigate();
    const handleSignout = () => {
        localStorage.removeItem("auth");
        props.setIsLoggedIn(false);
        navigate('/')
    }

    let userName = ""
    if(props.isLoggedIn){
        let str = localStorage.getItem("user").split(" ")[0];
        userName = str.charAt(0).toUpperCase() + str.slice(1);
    }

    function showNavbar() {
        let navbar = document.querySelector('.navigationBar');
        let navList = document.querySelector('.navList')
        navList.classList.toggle('v-class');
        navbar.classList.toggle('h-nav');
    }
    return (
        <>
            <nav className="navigationBar h-nav">
                <div className="logo">
                    <p>ShortPay</p>
                </div>

                <ul className="navList v-class">
                    <li>
                        <NavLink to="/" activeclassname="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeclassname="active">About</NavLink>
                    </li>

                    {props.isLoggedIn ? (
                        <li>
                            <NavLink to="/myorders" activeclassname="active">My Orders</NavLink>
                        </li>
                    ) : ""}

                    <li>
                        <NavLink to="/contact" activeclassname="active">Contact</NavLink>
                    </li>

                    {props.isLoggedIn ? (
                        <>
                            <li>
                                <div className="userData">
                                    <span><AiOutlineUser className="userLoginIcon" /></span>
                                    <p className="userName">{userName}</p>
                                </div>
                            </li>
                            <li>
                                <button onClick={() => { handleSignout() }} className="logout">
                                    <p className="btnText">Sign out</p><span><BiLogIn className="logoutIcon" /></span>
                                </button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <button onClick={() => props.setButtonPopup(buttonProp => !buttonProp)}>
                                <span><AiOutlineUser className="userIcon" /></span><p className="btnText">Login/Signup</p>
                            </button>
                        </li>
                    )}
                </ul>

                <div className="burger" onClick={showNavbar}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;