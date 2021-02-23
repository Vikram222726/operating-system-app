import { data } from 'jquery';
import React,{useState} from 'react';

const ListofUsers = () => {
    const userData = JSON.parse(localStorage.getItem('data'));
    const [mydata,setMydata] = useState(userData);

    const handleDelete = (e) => {
        const newArr = mydata.filter(data => data.newEmail !== e.target.id);
        setMydata(newArr);
        localStorage.clear();
        localStorage.setItem('data',JSON.stringify(newArr));
    }

    return(
        <div className="listofUser">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto order-1 order-lg-2">
                        <h4 className="lou"><u>List of Users</u></h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 mx-auto order-1 order-lg-2">
                        <h4 className="lol">{mydata.length === 0 ? "No users have been added currently!" : (
                            <table className="table">
                                <thead className="thead">
                                    <tr>
                                        <th>UserName</th>
                                        <th>Mobile Number</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Remove User</th>
                                    </tr>
                                </thead>
                                <tbody className="tbody">
                                    {mydata.map(data => <tr key={data.newName}>
                                        <td>{data.newName}</td>
                                        <td>{data.newMob}</td>
                                        <td>{data.newEmail}</td>
                                        <td>{data.newAddress}</td>
                                        <td><button id={data.newEmail} className="btn btn-danger" onClick={handleDelete} >DELETE</button></td>
                                        </tr>)}
                                </tbody>
                            </table>
                        )}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListofUsers;