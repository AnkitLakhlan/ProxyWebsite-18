import styled from 'styled-components';

const Wrapper = styled.div`
    input {
        padding: 10px 12px;
        border: none;
        border: 2px solid #adadad;
        border-radius: 5px;
        width: 100%;
        font-size: 15rem;
    }

    input:focus {
        border-bottom: 2px solid #149dcc;
        outline: none;
    }

   .billContainer {
        width: 100%;
        padding: 50px 20px;
        display: flex;
        background-color: #55b4d4;
    }

    .billContainer .parentContainer {
        width: 50%;
        margin: 0 auto;
        margin-right: 0px;
    }

    .billContainer .parentContainer .comingSoonMessage h3 {
        margin-top: 30px;
    }

    .billContainer .parentContainer .comingSoonMessage p {
        margin-top: 10px;
    }

    .billContainer .rightImg {
        width: 30%;
    }

    .billContainer .rightImg .rightIcon{
        font-size: 130rem;
        color: white;
        margin-top: 30px;
    }

    .billContainer .parentContainer  .billHeading {
        width: 100%;
        display: flex !important;
        align-items: center;
        color: white;
    }

    .billContainer .parentContainer .billHeading p {
        font-size: 20rem;
    }

    .billContainer .parentContainer  .billHeading .iconContainer {
        margin-right: 10px;
    }

    .billContainer .parentContainer  .billHeading .iconContainer .icon {
        color: white;
        font-size: 30rem;
    }

    .billContainer .parentContainer .formContainer {
        width: 100%;
    }

    .billContainer .parentContainer  .formContainer .row {
        width: 60%;
        margin-top: 40px;
    }

    .billContainer .parentContainer  .formContainer .row select {
        padding: 10px 12px;
        border: none;
        border-bottom: 2px solid #adadad;
        width: 100%;
    }

    .billContainer .parentContainer  .formContainer .row select:focus {
        border-bottom: 2px solid #149dcc;
        outline: none;
    }

    .billContainer .parentContainer  .formContainer .row select option {
        width: 100%;
    }

    .billContainer .parentContainer  .formContainer .row .buttonContainer {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .billContainer .parentContainer  .formContainer .row .buttonContainer button {
        padding: 10px 15px;
        width: 50%;
        border-radius: 8px;
        border: none;
        background: white;
        color: black;
        font-weight: 500;
        font-size: 19.2rem;
        cursor: pointer;
        border-radius: 10px;
        min-width: 130px;
    }

    .billContainer .parentContainer  .formContainer .error {
        margin-top: 10px;
        width: 60%;
        display: flex;
        justify-content: center;
    }

    .billContainer .parentContainer  .formContainer  .error p {
        color: red;
        font-weight: bold;
    }

    .billContainer .parentContainer  .formContainer .data {
        width: 80%;
        margin: 0 auto;
    }

    .billContainer .parentContainer .formContainer .data .dataChild {
        display: flex;
        text-align: left;
      
    }

    .billContainer .parentContainer .formContainer .data .dataChild .paramName {
        width: 20%;
    }

    .billContainer .parentContainer .formContainer .data .dataChild span {
        width: 10%;
    }

    @media screen and (max-width: 550px) {
        .billContainer .rightImg {
            display: none;
        }

        .billContainer .parentContainer {
            width: 100%;
        }

        .billContainer .parentContainer  .formContainer .row  {
            width: 100%;
            min-width: 200px;
        }
    }

    
`;

export default Wrapper;