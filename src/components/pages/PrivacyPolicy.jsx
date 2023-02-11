import React from 'react';
import "./ContentPage.css";
import Footer from "../Footer";

const PrivacyPolicy = (props) => {
    return (
        <>
            <div className="contentContainer">
                <div className="content">
                    <h3>Refund Policy</h3>
                    <h2>{props.name}</h2>
                    <p style={{ marginTop: "10px" }}>
                        once you've made a bill payment, you can't undo it to get a refund. Any wrong service information or service
                        numbers are not the responsibility of {props.domain}. However, if during a transaction you made on the
                        {props.domain} website, money was taken from your card or bank account and the bill payment was unsuccessful
                        within 24 hours of the transaction's completion, you must notify us by sending an email to the address
                        listed on the "Contact Us" page of the {props.domain} website. The Service Number, Operator Name, Bill Amount,
                        Transaction Date, Transaction ID, and Order Number should all be included in the email.
                        <br /> <br />
                        If {props.domain} determines that money was actually deducted from your card or bank account without a
                        successful online bill payment, the matter will be looked into, and you will receive a refund for the money
                        within 8 to 10 business days after the day we received your email. The amount will appear in your bank
                        account between 6 and 8 business days, depending on your bank's policy.
                    </p>

                    <h3 style={{ "marginTop": "20px" }}>Privacy Policy</h3>
                    <p style={{ marginTop: "10px" }}>
                        <b>Reservation of Rights</b> <br />
                        We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions. <br /><br />

                        <b>Removal of links from our website</b> <br />
                        If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly. <br /><br />

                        We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date. <br />
                    </p>

                    <h3 style={{ "marginTop": "20px" }}>DISCLAIMER</h3>
                    <p style={{ marginTop: "10px" }}>
                        To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will: <br /><br />

                        limit or exclude our or your liability for death or personal injury; <br />
                        limit or exclude our or your liability for fraud or fraudulent misrepresentation; <br />
                        limit any of our or your liabilities in any way that is not permitted under applicable law; or <br />
                        exclude any of our or your liabilities that may not be excluded under applicable law. <br />
                        The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: <br /> (a) are subject to the preceding paragraph; and <br /> (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty. <br /><br />

                        As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.  <br /><br />
                    </p>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default PrivacyPolicy;