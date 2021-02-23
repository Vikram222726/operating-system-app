import { Alert } from 'bootstrap';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import NewDiv from './newComp';

const Register = () => {
    const [email,setEmail] = useState("");
    const [password,setPassWord] = useState("");
    const [notify,setNotify] = useState("");
    const [logged,setLogged] = useState("");
    const [cont,setCont] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassWord(e.target.value);
    }

    const validateForm = (e) => {
        if(email === ""){ setNotify("Please enter your Email"); return;}
        if(password === ""){ setNotify("Please enter your Password"); return;}
        if(email !== "admin@namasys.co" || password !== "admin123"){ setNotify("Invalid Email or Password"); return;}
        setNotify("");
        setCont("Continue")
        setLogged("You are successfully logged in");
    }

    return(
        <div className="register-head">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto size">
                        LOG-IN
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 mx-auto box order-2 order-lg-1">
                        <div className="row">
                            <div className="col-3 ">
                                <h5 className="ntfy">{notify}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 label">
                                <label htmlFor="username" className="labels">Email</label>
                                <input type="email" className="textbx" value={email} onChange={handleEmail} autoComplete="off" name="email" id="email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 label">
                                <label htmlFor="username" className="labels">Password</label>
                                <input type="password" className="textbx" value={password} onChange={handlePassword} autoComplete="off" name="password" id="password" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 ">
                            <button type="button" onClick={validateForm} className="btn btn-outline-primary btns">Login</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <h5 className="logged">{logged}</h5>
                                <Link to="/register/newUser" className="cont">{cont}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;