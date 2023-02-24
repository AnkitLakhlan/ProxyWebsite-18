import React from "react";
import { useState, useEffect } from "react";
import Wrapper from '../components/pages/wrapper';


const FormField = (props) => {
    const [useapi, setApi] = useState({ param1: "", param2: "", param3: "", param4: "" })
    const [useinput, setInput] = useState([])
    const [useOption, setOption] = useState([])
    const [error, setError] = useState("");
    const [gotdata, setGotdata] = useState({})
    const [apiworked, setApiworked] = useState(false);
    const getBill = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`${process.env.REACT_APP_URL}/fetch`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    ...useapi,
                })
            })
            const data = await res.json()
            if (res.status === 200) {
                if (data.status === true) {
                    console.log(data)
                    setGotdata(data.data)
                    setApiworked(true);
                    setApi(true);
                } else {
                    console.log("invalid data or something display message pls")
                    console.log(data.message);
                    setError(data.message)
                    setTimeout(() => {
                        setError("")
                    }, 5000);
                }

            } else {
                console.log("server is invalid please check backend server")
                setError("Server is not reachable");
            }
        } catch (error) {
            console.log(error)
        }
    }
    const getOptions = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_URL}/${props.bill}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            const data = await res.json()
            setOption(data.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getOptions();
        window.scroll({ top: 300, left: 0, behavior: "smooth" });
    }, [props.bill])
    const getParam = async (e) => {
        try {
            setApi({ param1: "", param2: "", param3: "", param4: "" })
            setApiworked(false)
            setInput([])
            const res = await fetch(`${process.env.REACT_APP_URL}/bill`, {
                method: 'POST',
                body: JSON.stringify({
                    biller_id: e.target.value
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            const data = await res.json()
            setApi((values) => ({ ...values, biller_id: e.target.value }))
            setInput(data.data)
        } catch (error) {
            console.log(error)
        }
    }
    const addInfo = (e) => {
        try {
            setApi((values) => ({ ...values, [e.target.name]: e.target.value }))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Wrapper>
                <div className="billContainer">
                    <div className="parentContainer">
                        <div className="billHeading">
                            <div className="iconContainer">
                                {props.icon}
                            </div>
                            <div className="textContainer">
                                <p>{props.message}</p>
                            </div>
                        </div>

                        <div className="formContainer">
                            <form onSubmit={(e) => { getBill(e) }}>
                                <div className="row">
                                    <select name="" id="" onChange={(e) => getParam(e)}>
                                        {
                                            useOption.map((elem) => {
                                                return (
                                                    <option key={elem.index} value={elem.biller_id} defaultValue >{elem.biller_name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                {
                                    useinput.map((elem) => {
                                        return (
                                            <div className="row">
                                                <input value={useapi[elem.param_name]} name={elem.param_name} placeholder={elem.param_desc} onChange={e => addInfo(e)} />
                                            </div>
                                        )
                                    })
                                }
                                <div className="error text">
                                    <p>{error}</p>
                                </div>

                                {apiworked ? <div className="data text">
                                    <div className="dataChild">
                                        <div className="paramName">
                                            Name
                                        </div>
                                        <span>:</span>
                                        <div className="paramData">
                                            {gotdata.name}
                                        </div>
                                    </div>
                                    <div className="dataChild">
                                        <div className="paramName">
                                            Amount
                                        </div>
                                        <span>:</span>
                                        <div className="paramData">
                                            {gotdata.amount}
                                        </div>
                                    </div>
                                    <div className="dataChild">
                                        <div className="paramName">
                                            Due Date
                                        </div>
                                        <span>:</span>
                                        <div className="paramData">
                                            {gotdata.duedate}
                                        </div>
                                    </div>
                                </div> : ""}

                                {apiworked ? (
                                    <div className="row">
                                        <div className="buttonContainer">
                                            <button>Pay Bill</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="row">
                                        <div className="buttonContainer">
                                            <button>Fetch Bill</button>
                                        </div>
                                    </div>
                                )}

                            </form>

                        </div>
                    </div>

                    <div className="rightImg">
                       {props.rightIcon}
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default FormField;