import React from "react";
import Wrapper from "./wrapper";
import { BiCylinder } from "react-icons/bi";
import { GiGasStove } from "react-icons/gi";


const Cylinder = () => {
    
    return (
        <>
            <Wrapper>
                <div className="billContainer">
                    <div className="parentContainer">
                        <div className="billHeading">
                            <div className="iconContainer">
                                <BiCylinder className="icon" />
                            </div>
                            <div className="textContainer">
                                <p style={{ "color": "white" }}>OOPS!!</p>
                                <p style={{ "marginTop": "5rem" }}>Coming Soon!</p>
                            </div>
                        </div>

                        <div className="comingSoonMessage text" style={{color: "white"}}>
                            <h3>We are working on p roviding cylinder booking services on <br /> our platform.... <br />
                                <p>Stay tuned :) </p></h3>
                        </div>
                    </div>

                    <div className="rightImg">
                        <GiGasStove  className="rightIcon"/>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default Cylinder;