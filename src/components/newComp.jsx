import React from 'react';
import { Link } from 'react-router-dom';

const NewDiv = () => {
    return(
        <div>
            <h5>Hello</h5>
            <Link to="/register/newUser" className="newDivBtn">Continue</Link>
        </div>
    );
}

export default NewDiv;