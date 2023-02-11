import React, { useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import './Login.css';


function Register(props) {
  const [password, setpassword] = useState(false);
  const [confirmpassword, setconfirmpassword] = useState(false);
  const [register, setRegister] = useState({})
  const [cpassword, setCpassowrd] = useState("")
  const [error, setError] = useState("");
  const [ierror, setIerror] = useState({})



  const handleRegister = async () => {
    var flag = true
    if (!register.email) {
      setIerror((values) => ({ ...values, email: "Please enter email" }))
      flag = false
    }
    if (!register.name) {
      setIerror((values) => ({ ...values, name: "Please enter name" }))
      flag = false
    }
    if (!register.phone) {
      setIerror((values) => ({ ...values, phone: "Please enter phone number" }))
      flag = false
    }
    if (!register.password) {
      setIerror((values) => ({ ...values, password: "Please enter password" }))
      flag = false
    }
    if (cpassword === "") {
      setIerror((values) => ({ ...values, cpassword: "Please enter password" }))
      flag = false
    }

    if (cpassword !== register.password) {
      setIerror((values) => ({ ...values, cpassword: "Password do not match" }))
      flag = false
    }
    setTimeout(() => {
      setIerror({})
    }, 2000);
    if (flag) {
      try {
        const res = await fetch(`${process.env.REACT_APP_URL}/register`, {
          method: 'POST',
          body: JSON.stringify({
            ...register
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        })
        const data = await res.json()
        if (res.status === 200) {
          if (data.status === true) {
            console.log(data);
            props.setPopupNav("login");
          } else {
            console.log("something went wrong check message");
            setError(data.error)
            setTimeout(() => {
              setError("")
            }, 5000);
          }
        } else {
          console.log("server is not reachable");
          setError("Server is not reachable");
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  const toggleIcon = () => {
    setpassword(password => !password)
  }

  const toggleconfirmIcon = () => {
    setconfirmpassword(confirmpassword => !confirmpassword);
  }
  return (
    <>
      <>

        <div className="loginContainer">
          <div className="row">
            <input type="text" placeholder='Enter Your Name' name="name" onChange={(e) => { setRegister((values) => ({ ...values, [e.target.name]: e.target.value })) }} required />
          </div>
          <div className="fielderror">
            <p>{ierror.name}</p>
          </div>
          <div className="row">
            <input type="text" placeholder='Enter Mobile Number' name="phone" onChange={(e) => { setRegister((values) => ({ ...values, [e.target.name]: parseInt(e.target.value) })) }} required />
          </div>
          <div className="fielderror">
            <p>{ierror.phone}</p>
          </div>
          <div className="row">
            <input type="text" placeholder='Enter Email ID' name="email" onChange={(e) => { setRegister((values) => ({ ...values, [e.target.name]: e.target.value })) }} required />
          </div>
          <div className="fielderror">
            <p>{ierror.email}</p>
          </div>
          <div className="row">
            <input type={password ? 'text' : 'password'} name="password" placeholder='Enter password' onChange={(e) => { setRegister((values) => ({ ...values, [e.target.name]: e.target.value })) }} required />
            <span className="passwordtoggleicon" onClick={toggleIcon}>{password ? <FaEye /> : <FaEyeSlash />}  </span>
          </div>
          <div className="fielderror">
            <p>{ierror.password}</p>
          </div>
          <div className="row">
            <input type={confirmpassword ? 'text' : 'password'} placeholder='Confirm password' onChange={(e) => { setCpassowrd(e.target.value) }} required />
            <span className="passwordtoggleicon" onClick={toggleconfirmIcon}>{confirmpassword ? <FaEye /> : <FaEyeSlash />}  </span>
          </div>
          <div className="fielderror">
            <p>{ierror.cpassword}</p>
          </div>
          <div className="error">
            <p>{error}</p>
          </div>

          <div className="row" style={{ "display": "flex", "justifyContent": "center" }}>
            <button onClick={() => { handleRegister() }}>Register</button>
          </div>
        </div>
      </>
    </>
  )
}

export default Register;
