import React, { useState } from 'react';
import contactImg from "../images/contact.jpg";
import Footer from "../Footer"
import btnImg from '../images/closeBtn.png';
import noteImg from '../images/thankyou.jpg';
import { AiOutlineMail } from 'react-icons/ai';
import { Wrapper } from './InfoPage';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
function Contact() {
    const [apidata, setApidata] = useState({});
    const [error, setError] = useState("")
    const [showPopUp, setshowPopup] = useState(false);
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const userSchema = yup.object().shape({
        name: yup.string().required("This field is Required"),
        email: yup.string().email("Invalid Email").required("This field is required"),
        phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required("This field is required"),
        message: yup.string().required("This field is Required")
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userSchema),
    });

    const customSubmit = async () => {
        if (Object.keys(errors).length === 0) {
            const res = await fetch(`${process.env.REACT_APP_URL}/contact`, {
                method: 'POST',
                headers: {
                    "Content-type": "Application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    ...apidata
                })
            })
            const data = await res.json()
            console.log(data)
            if (res.status === 200) {
                if (data.status === true) {
                    setshowPopup(true);
                } else {
                    setError(data.message)
                    setTimeout(() => {
                        setError("")
                    }, 3000);
                }
            } else {
                setError("Server is not Reachable")
                setTimeout(() => {
                    setError("")
                }, 3000);
            }
        }
    }



    return (
        <>
            <Wrapper>
                <div className="infoContainer">
                    <div className="leftSection">
                        <div className="imgContainer">
                            <img src={contactImg} alt="" />
                        </div>

                        <div className="contactInfo text">
                            <p style={{ fontWeight: "600" }}>Contact Details:</p>
                            <p>B/1387, FIRST FLOOR FLOOR<br />
                                BLOCK-B, JAHANGIRPURI, NEW DELHI <br />
                                NORTH WEST DELHI, DELHI-11033</p>
                            <p className='mailcontainer'><span><AiOutlineMail className='mailIcon' /></span><span className='mailText'>contactus.natraders@gmail.com
                            </span></p>
                        </div>
                    </div>

                    <div className="contactform text">
                        <h2>Let us know if you have a query</h2>
                        <form onSubmit={handleSubmit(customSubmit)}>
                            <div className="row">
                                <input type="text" name="name" placeholder='Name' {...register("name")} onChange={(e) => { setApidata((values) => ({ ...values, [e.target.name]: e.target.value })) }} />
                            </div>
                            <div className="fielderror text">
                                <p>{errors.name?.message}</p>
                            </div>
                            <div className="row">
                                <input type="text" name="email" placeholder='Email ID' {...register("email")} onChange={(e) => { setApidata((values) => ({ ...values, [e.target.name]: e.target.value })) }} />
                            </div>
                            <div className="fielderror text">
                                <p>{errors.email?.message}</p>
                            </div>
                            <div className="row">
                                <input type="text" name="phone" placeholder='Mobile Number'{...register("phone")} onChange={(e) => { setApidata((values) => ({ ...values, [e.target.name]: parseInt(e.target.value) })) }} />
                            </div>
                            <div className="fielderror text">
                                <p>{errors.phone?.message}</p>
                            </div>
                            <div className="row">
                                <textarea name="message" id="" cols="30" rows="5" placeholder='Enter your query' {...register("message")} onChange={(e) => { setApidata((values) => ({ ...values, [e.target.name]: e.target.value })) }}></textarea>
                            </div>
                            <div className="fielderror text">
                                <p>{errors.message?.message}</p>
                            </div>

                            <div className="error text">
                                <p>{error}</p>
                            </div>
                            <div className="row">
                                <div className="buttonContainer">
                                    <button type="submit">Submit Query</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {showPopUp ? (


                    <div className="popup">
                        <div className='popupBG' onClick={() => setshowPopup(false)} ></div>
                        <div className="popup-inner">
                            <div className="closeBtn">
                                <img src={btnImg} alt="" onClick={() => setshowPopup(false)} />
                            </div>
                            <div className="popupContent">
                                <div className="gratitudeImg text">
                                    <img src={noteImg} alt="" />
                                    <h3>Thank you for Contacting Us</h3>
                                    <p>You will hearing from us Soon, till then keep browsing!!!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ""
                }
            </Wrapper>

            <Footer />
        </>
    )
}

export default Contact;
