import React from 'react';
import "./ContentPage.css";
import Footer from "../Footer"

const Services = (props) => {
    return (
        <>
            <div className="contentContainer">
                <div className="content">
                    <h3>Our Services</h3>
                    <h2>{props.name}</h2>
                    <p style={{ marginTop: "10px" }}>
                        ELECTRICITY BILL PAYMENT ON {props.domain}
                        <br />
                        All the leading providers are supported by {props.domain} across different states in the country for
                        electricity bill payment. You will receive timely payment reminders whenever a bill is created against that
                        customer number/id after completing your first electricity bill payment on {props.domain}.
                        <br /><br />
                        GAS BILL PAYMNET ON {props.domain}
                        <br />
                        You can use {props.domain} to pay for all of the major gas providers in the country. You will receive timely
                        payment reminders whenever a bill is generated against that consumer id after making your first Gas bill
                        payment on {props.domain}.
                        <br /><br />
                        WATER BILL PAYMENT
                        <br />
                        For water bill payment, all of the major providers in various Indian states accept bill payments using
                        {props.domain}.
                        <br /><br />
                        DTH RECHARGE
                        <br />
                        {props.domain} supports all the leading DTH providers. You may effortlessly recharge your Airtel digital TV,
                        Videocon D2H, Dish TV, Reliance Digital TV, Sun Direct, and Tata Sky digital televisions. You will receive
                        timely recharge reminders far in advance of the due date, ensuring that your entertainment never comes to a
                        halt.
                        <br /><br />
                        MOBILE RECHARGE
                        <br />
                        All of the major network providers are supported by {props.domain}. You can effortlessly do Jio recharge,
                        Airtel recharge, Vi prepaid recharge, BSNL recharge, and MTNL recharge with the {props.domain}. You will
                        receive timely recharge reminders before to the due date, ensuring that your validity term is never
                        exceeded. On mobile recharges, {props.domain} also offers exclusive cashback offers and promotions.
                    </p>

                    <h3 style={{ "marginTop": "20px" }}>Features</h3>
                    <p style={{ marginTop: "10px" }}>

                        100% SECURE And RELIABLE
                        <br />
                        Transactions are fully secure , and your data is not shared with anyone.Your Bank account is safe.

                        <br /><br />

                        REFER And EARN
                        <br />
                        Refer to your friends and get a chance to earn 10% or above cashback on next transaction.
                        <br /><br />

                        FAST And ROBUST
                        <br />
                        Built with latest Technology stack and integrated payment gateway, {props.domain} provides you with fast, secure
                        and reliable bill payments on the go, anywhere, anytime.
                    </p>
                </div>
            </div>
            <Footer domain="Hotcharge.in
" email="contactus.arenterprises@yahoo.com
"/>
        </>
    );
}

export default Services;