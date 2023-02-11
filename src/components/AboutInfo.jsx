import React from "react";
import aboutImg from "./images/about.jpg";
import "./AboutInfo.css";


const AboutInfo = (props) => {
    return (
        <>
            <section className="aboutInfo">
                <div className="aboutInfoContainer">
                    <div className="aboutInfo-Content">
                        <div className="aboutImg">
                            <img src={aboutImg} alt="" />
                        </div>
                        <div className="aboutText">
                            <div className="title">
                                <h2>About {props.domain}</h2>
                            </div>
                            <div className="content text">
                                <p>
                                    We are India’s first customer centric platform, which supports the true digital India ideology. We provide
                                    Utilities services under one roof. We’re dedicated to providing you the best of services, with a focus on
                                    dependability, customer service etc.
                                    {props.domain} is a unique concept in India, a concept that has never been used before and is exclusive
                                    to {props.domain}. You would say that a lot of such apps exist in the market.
                                </p>
                                <p style={{marginTop: "20rem"}}> Well, here's where {props.domain}
                                    is different- it lets you earn and will get cashback on every recharge and offline bill payment.
                                </p>
                                <div className="readMoreBtnContainer">
                                    <button className="text">Read More</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutInfo;