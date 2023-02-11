import styled from 'styled-components';

export const Wrapper = styled.div`
    overflow-x: hidden;
    .infoContainer {
        margin: 90px auto 50px auto;
        width: 90%;
        display: flex;
        justify-content: space-evenly;
        background: #55b4d4;
    }

    
    .infoContainer .leftSection {
        text-align: center;
    }

    .infoContainer .leftSection .imgContainer  img{
        max-width: 650px;
    }

    .infoContainer .leftSection .imgContainer .agentImg {
        max-width: 600px;
        margin-top: 50px;
        border-radius: 10px;
    }

    .infoContainer .leftSection  .contactInfo {
        text-align: center;
    }

    .infoContainer .leftSection  .contactInfo p {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
        color: white;
    }

    .infoContainer .leftSection  .contactInfo .mailIcon {
        margin-top: 7px;
        font-size: 22rem;
        margin-right: 8px;
    }    

    .infoContainer .leftSection  .contactInfo .mailText {
        font-size: 18rem;
    }

    .infoContainer .contactform {
        margin-top: 20px;
        width: 30%;
    }

    .infoContainer .contactform h2 {
        color: white
    }

    .infoContainer .contactform form .fielderror p{
        color: red;
        margin-top: 5px;
        font-size: 13rem;
    }   

    .infoContainer .contactform form  .error {
        margin-top: 10px;
        width: 100%;
        display: flex;
        justify-content:center;
    }

    .infoContainer .contactform form  .error p {
        color: red;
        font-weight: bold;
        text-align: center;
    }


    .infoContainer .contactform form .row {
        margin-top: 20px;
        width: 100%;
    }

    .infoContainer .contactform form .row input, textarea {
        padding: 15px 12px;
        border: none;
        border-bottom: 2px solid #adadad;
        border-radius: 5px;
        width: 100%;
        font-size: 15rem;
    }

    .infoContainer .contactform form .row input:focus {
        border-bottom: 2px solid #149dcc;
        outline:none;
    }

    .infoContainer .contactform form .row textarea:focus {
        border-bottom: 2px solid #149dcc;
        outline:none;
    }

    .infoContainer .contactform form .row .buttonContainer {
        width: 100%;
        text-align: center;
    }

    .infoContainer .contactform form .row .buttonContainer button {
        padding: 10px 15px;
        width: 60%;
        border-radius: 8px;
        border: none;
        background: white;
        color: black;
        font-weight: 500;
        font-size: 19.2rem;
        cursor: pointer;
        border-radius: 10px;
        min-width: 200px;
    }

    ${'' /* Popup style  */}
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
        background: #fff;
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

    .popup .popup-inner .popupContent .gratitudeImg {
        width: 100%;
        text-align: center;
    }

    .popup .popup-inner .popupContent .gratitudeImg h3 {
        color: #adadad;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    .popup .popup-inner .popupContent .gratitudeImg p {
        color: #adadad;
    }

    @media only screen and (max-width: 1112px) {
        .infoContainer {
            flex-direction: column;
        }

        .infoContainer .contactform {
            width: 70%;
            margin-left: auto;
            margin-right: auto;
        }
    }

    @media only screen and (max-width: 600px) {
        .infoContainer .leftSection .imgContainer  img{
            max-width: 300px !important;
        }
    }

`;
