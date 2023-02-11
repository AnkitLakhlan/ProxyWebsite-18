import React, { useState } from 'react';
import styled from 'styled-components';
import btnImg from './images/closeBtn.png';
import Login from './pages/Login';
import Register from './pages/Register';

const Wrapper = styled.div`
    .popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0,0,0,0.2);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
   }

    .popup .popupBG {
        width: 100%;
        position: absolute;
        height: 100vh;
   }

    .popup .popup-inner {
        position: relative;
        padding: 32px;
        width: 100%;
        max-width: 500px;
        background: #55b4d4;
        border-radius: 20px;
        min-height: 200px;
    }

    .popup .popup-inner .closeBtn {
        position: absolute;
        top: 16px;
        right: 16px;
    }

    .popup .popup-inner .closeBtn img {
        width: 30px;
        cursor: pointer;
    }

    .popup .popup-inner .topNavigation ul {
        display: flex;
        gap: 2px;
        width: 80%;
        padding-bottom: 10px;
        justify-content: space-evenly;
    }

    .popup .popup-inner .topNavigation ul li{
        list-style: none;
    }

    .popup .popup-inner .topNavigation ul li button {
        border: none;
        font-size: 18rem;
        font-weight: 500;
        color: white;
        background: none;
        cursor: pointer;
    }

    .popup .popup-inner .popupContent {
        margin-top: 30px;
    }

`;

function Popup(props) {
    const [popupNav, setPopupNav] = useState('login');

    return (props.trigger) ? (
        <Wrapper>
            <div className="popup">
                <div className='popupBG' onClick={() => props.setTrigger(false)} ></div>
                <div className="popup-inner">
                    <div className="closeBtn">
                        <img src={btnImg} alt="" onClick={() => props.setTrigger(false)} />
                    </div>
                    <div className="topNavigation">
                        <ul>
                            <li><button onClick={() => setPopupNav('login')}>Login</button></li> 
                            <li>||</li>
                            <li><button onClick={() => setPopupNav('register')}>Register</button></li>
                        </ul>
                    </div>
                    <div className="popupContent">
                        {popupNav === 'login' ? <Login  isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} setTrigger={props.setTrigger}/> : popupNav === 'register' ? <Register setTrigger={props.setTrigger} setPopupNav={setPopupNav}/> : null}
                    </div>
                </div>
            </div>
        </Wrapper>
    ) : " ";
};

export default Popup;
