import React, { useState } from 'react';
import './Login.css'
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const [passwordState, setPasswordState] = useState(false);
  const [login, setLogin] = useState({});
  const [ierror, setIerror] = useState({})
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const toggleIcon = () => {
    setPasswordState(prevState => !prevState);
  }




  const handleLogin = async (e) => {
    e.preventDefault()
    var flag = true
    if (!login.email) {
      flag = false
      setIerror((...values) => ({ ...values, email: "Enter your Email" }))
    }
    if (!login.password) {
      flag = false
      setIerror((...values) => ({ ...values, password: "Enter your Password" }))
    }
    if (flag) {
      try {
        const res = await fetch(`${process.env.REACT_APP_URL}/login`, {
          method: 'POST',
          body: JSON.stringify({
            ...login
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        })
        const data = await res.json()
        if (res.status === 200) {
          if (data.status === true) {
            console.log(data);
            props.setIsLoggedIn(true)
            localStorage.setItem('auth', data.data.token);
            localStorage.setItem('user', data.data.name)
            props.setTrigger(false);
            navigate('/myorders')
          } else {
            console.log(data)
            setError(data.error)
            setTimeout(() => {
              setError("")
            }, 5000);
          }
        } else {
          console.log("server is not reachable or down");
          setError("Server is not reachable");
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <>

      <div className="loginContainer">
        <form onSubmit={(e) => { handleLogin(e) }}>
          <div className="row">
            <input type="text" placeholder='Enter Registered Email' name="email" onChange={(e) => { setLogin((values) => ({ ...values, [e.target.name]: e.target.value })) }} />
          </div>
          <div className="fielderror">
            <p>{ierror.email}</p>
          </div>

          <div className="row">
            <input type={passwordState ? "text" : "password"} name="password" placeholder='Enter Password' onChange={(e) => { setLogin((values) => ({ ...values, [e.target.name]: e.target.value })) }} />
            <span className="passwordtoggleicon" onClick={toggleIcon}>{passwordState ? <FaEye /> : <FaEyeSlash />}  </span>
          </div>
          <div className="fielderror">
            <p>{ierror.password}</p>
          </div>

          <div className="error">
            <p>{error}</p>
          </div>

          <div className="row" style={{ "display": "flex", "justifyContent": "center" }}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>

    </>
  )
}

export default Login;
