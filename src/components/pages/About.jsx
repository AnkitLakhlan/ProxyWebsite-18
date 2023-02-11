import React from 'react';
import "./ContentPage.css"
import Footer from "../Footer"

const About = (props) => {
    return (
        <>

            <div className="contentContainer">
                <div className="content">
                    <h3>About Us</h3>
                    <h3>{props.name}</h3>
                    <p style={{ marginTop: "10px" }}>
                        We are India’s first customer centric platform, which supports the true digital India ideology. We provide
                        Utilities services under one roof. We’re dedicated to providing you the best of services, with a focus on
                        dependability, customer service etc.
                        {props.domain} is a unique concept in India, a concept that has never been used before and is exclusive
                        to {props.domain}. You would say that a lot of such apps exist in the market. Well, here's where {props.domain}
                        is different- it lets you earn and will get cashback on every recharge and offline bill payment.
                        <br /> <br />
                        Most of people going online for recharge and bill payment. So if you thinking for easy recharge and bill pay
                        then {props.domain} is the best option for you. {props.domain} is a leading online recharge (Airtel, Vodafone,
                        Idea, Tata Indicom,Reliance, Bsnl, Aircel, Tata Docomo) and bill pay (electric bill, water bill, recharge
                        bill and Gas Bill )site in India. Everyone get on every
                        recharge and Bill payment's up to 10% Instant cash Back in your cashback wallet.
                        <br /><br />
                        {props.domain} is 100% safe and secure , Recharge , Billpayment , crowd funding & financial services
                        platform , steering on the mission of “utilities for all ”. With so many facilities and counting,
                        {props.domain} be a one step shopping and bill payment solution to all your payments needs. {props.domain} is a
                        unique referral marketing app.
                        <br /><br />

                        Users can earn commission in their earning wallet through {props.domain} by referring the app to their
                        friends and loved ones. Additionally all the transactions done by these referrals earn you a commission. The
                        more people you refer, the more commission you get an opportunity to earn. You can refer the application
                        easily through SMS, WhatsApp, Facebook and Email or through other mediums.
                        <br /><br />
                        But hold on, {props.domain} doesn't let you earn just through referrals, you also earn through the transactions
                        done by these referrals- a predetermined commission structure is in place by {props.domain} for transactions
                        done by your referred friends. Not only that, when these referred friends of yours further refer the app to
                        more people, you also receive commission on transactions done by these referrals too. This way, your
                        'referral tree' grows and you get to reap the sweet benefits of it. Just imagine, if you just refer people
                        in multiples of minimum two and also encourage them to transact with the application, you are sure to earn a
                        lot of commission from this. The choice is yours, how much do you want to earn in commissions and how many
                        people do you want to refer.
                        <br /><br />
                        We offer services related to online payment of electricity bill, water bill, gas payment, mobile recharge
                        etc. We provide these services to consumers all over india.
                        <br /><br />
                        We hope you enjoy our service as much as we enjoy offering them to you. If you have any questions or
                        comments, please don’t hesitate to contact us. Thank you for visiting our site.
                        <br /><br />
                        Why we are
                        <br />
                        {props.domain} has almost everything you'll need to either increase the scope of your present service
                        offerings or launch your new multi-service company. You can provide your customers with the same services
                        that we do through {props.domain}, but you can run your business independently and under your own name.
                        <br /><br />
                        Our Mission
                        <br />
                        Operating {props.domain} is challenging, but it also speeds up and simplifies your life. We offer our clients
                        just the best services. Paying a bill online or an online recharge are just a few examples of the many
                        services available.
                        <br /><br />
                        Our Vision
                        <br />
                        Our main objective as a business is to satisfy our customers' needs and wants. To improve our customers, we
                        offer a wide range of services.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default About;