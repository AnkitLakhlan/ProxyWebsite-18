import React from "react";
import { GoDeviceMobile } from "react-icons/go";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import Wrapper from "./wrapper";

const Prepaid = (props) => {
    return (
        <>
            <Wrapper>
                <div className="billContainer">
                    <div className="parentContainer">
                        <div className="billHeading">
                            <div className="iconContainer">
                                <GoDeviceMobile className="icon"/>
                            </div>
                            <div className="textContainer">
                                <p>Recharge or Pay Mobile Bill</p>
                            </div>
                        </div>
                        <div className="formContainer">
                            <form>
                                <div className="row">
                                    {/* <InputField placeholder="enter mobile number" /> */}
                                </div>
                                <div className="row">
                                    <select name="" id="">
                                        <option value="" defaultValue disabled>Select Operator</option>
                                        <option value="" >Airtel</option>
                                        <option value="" >Jio</option>
                                        <option value="" >Vi</option>
                                    </select>
                                </div>
                                {/* <div className="row">
                                    <input type="text" placeholder="enter number"/>
                                </div>
                                <div className="row">
                                    <input type="text" placeholder="enter amount"/>
                                </div> */}
                                <div className="row">
                                    <div className="buttonContainer">
                                        <button>Pay</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="rightImg">
                        <HiOutlineDevicePhoneMobile className="rightIcon"/>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default Prepaid;