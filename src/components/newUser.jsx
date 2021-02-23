import React from 'react';
import { NavLink } from 'react-router-dom';

const NewUser = () => {
    return(
        <div className="newUserHead">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                    <NavLink exact activeClassName="active-menu" className="nav-link active" aria-current="page" to="/register/newUser/addNewUser">AddNewUsers</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink exact activeClassName="active-menu" className="nav-link" to="/register/newUser/listofUsers">ListofUsers</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default NewUser;