import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const Home = () => {
    return(
        <div className="home-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row heads">
                            <div className="col-md-6 pt-10 mt-10 pt-lg-0 order-2 order-lg-1">
                                <h1>Let's learn everything about <strong className="os">Operating System</strong></h1>
                                <h4 className="unix"><b>UNIX</b> is basically a simple operating system, but you have to be a genius to understand the simplicity.</h4>
                                <div className="btn-link"><Link to="/about">Let's Start</Link></div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 head-img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;