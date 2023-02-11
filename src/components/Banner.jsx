import React from "react";
import styled from 'styled-components';
import bannerImg from "./images/banner.png"

const Wrapper = styled.div`
    .bannercontainer {
        font-family: 'Rubik', sans-serif !important;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 60px;
        background-color: #149dcc;
        background: linear-gradient(45deg, #149dcc, #000000);
        min-height: 400px;
        font-family: 'Rubik', sans-serif;

        .overlay {
            position: absolute;
            top: 90px;
            display: flex;
            align-item: center;
            .banner-image img {
                max-width: 478px;
            }

            .banner-text {
                margin-top: 100px;
                margin-left: 50px;
                font-weight: bold;

                h2 {
                    font-size: 32rem;
                    color: white;
                }

                p {
                    font-size: 16rem;
                    color: white;
                    max-width: 400px;
                    margin-top: 15px;
                    line-height: 28px;
                }
            }
        }

    }

    @media screen and (max-width: 900px) {
        .bannercontainer .overlay .banner-image img {
            max-width: 300px;
            margin-top: 80px;
        }
    }

    @media screen and (max-width: 572px) {
        .bannercontainer .overlay .banner-image img {
            max-width: 200px;
            margin-top: 120px;
        }
    }

    @media screen and (max-width: 400px) {
        .bannercontainer .overlay .banner-image img {
            display: none;
        }
    }
    
`;

const banner = (props) => {
    return (
        <>
            <Wrapper>
                <div className="bannercontainer">
                    <div className="overlay">
                        <div className="banner-image">
                            <img src={bannerImg} alt="" />
                        </div>
                        <div className="banner-text">
                            <h2>Dueepay</h2>
                            <p>Easy & instant online recharge, eletricity bill payment, dth recharge, broadband recharge and many more services under one roof Pay-Bill.</p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
}

export default banner;