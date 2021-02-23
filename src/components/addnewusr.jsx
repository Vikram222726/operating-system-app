import React,{useState} from 'react';

const AddNewUser = () => {
    const [name,setName] = useState("");
    const [mob,setMob] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [notify,setNotify] = useState("");
    const [not2,setNot2] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }
    
    const handleMob = (e) => {
        setMob(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleAddress = (e) => {
        setAddress(e.target.value);
    }

    const storeData = () => {
        let newData = {
            newName: name,
            newMob: mob,
            newEmail: email,
            newAddress: address
        }
        if(localStorage.getItem('data') === null){
            localStorage.setItem('data','[]');
        }
        let oldData = JSON.parse(localStorage.getItem('data'));
        oldData.push(newData);
        localStorage.setItem('data',JSON.stringify(oldData));
        setName(""); setMob(""); setEmail(""); setAddress(""); setNot2("New User is Successfully Added!");
    }

    const validateForm = () => {
        if(name === ""){ setNotify("Please Enter your name"); return;}
        for(let i=0;i<name.length;i++){
            if(name[i] === " "){ setNotify("Space in UserName is not allowed"); return;}
            if(name[i] >= '0' && name[i] <='9'){ setNotify("Invalid UserName"); return;}
            if(name[i] === '!' || name[i] === '@' || name[i] === '#' || name[i] === '$' || name[i] === '%'){
                setNotify("Invalid UserName"); return;
            }
        }
        if(mob === ""){ setNotify("Enter your Mobile Number"); return;}
        if(mob.length !== 10){ setNotify("Invalid Mobile Number"); return;}
        for(let i=0;i<mob.length;i++){
            if(mob[i] >= '0' && mob[i] <='9'){ continue;}
            setNotify("Only Numerical characters allowed in Mobile Number"); return;
        }
        if(email === ""){ setNotify("Enter your Email Id"); return;}
        if(email.length < 6){ setNotify("Invalid Email Id"); return;}
        let f1=-1,f2=-1;
        for(let i=0;i<email.length;i++){
            if(email[i] === '@'){ f1=i;}
            if(email[i] === '.'){ f2=i;}
        }
        if(f1 === -1 || f2 === -1 || f1 === 0 || f2 === 0 || (f1+1 === f2) || f2 === email.length-1 || f1 === email.length-1){ setNotify("Invalid Email Id"); return;}
        if(address === ""){setNotify("Please Enter your address"); return;}
        setNotify("");
        //localStorage.clear();
        storeData();
    }

    return(
        <div className="addnewusr">
            <div className="container-fluid flud">
                <div className="row">
                    <div className="col-3 mx-auto">
                        <h2 className="addusr">Add New User</h2>
                    </div>
                </div>        
                <div className="row">
                    <div className="col-3 mx-auto box2 order-2 order-lg-1">
                        <div className="row">
                            <div className="col-3">
                                <h5 className="noteme">{notify}</h5>
                                <h5 className="notemi">{not2}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 label">
                                <label htmlFor="username" className="lbls">UserName</label>
                                <input type="text" className="form-control-lg bxs " value={name} onChange={handleName}  autoComplete="off" name="name" id="name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 label">
                                <label htmlFor="mobileno" className="mobno lbls">Mobile Number</label>
                                <input type="text" className="form-control-lg bxs" value={mob} onChange={handleMob} autoComplete="off" name="mobileno" id="mobileno" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 label">
                                <label htmlFor="email" className="lbls">Email</label>
                                <input type="email" className="form-control-lg bxs" value={email} onChange={handleEmail} autoComplete="off" name="email" id="email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 label">
                                <label htmlFor="address" className="lbls">Address</label>
                                <textarea className="bxs adds" rows="4" cols="20" value={address} onChange={handleAddress} placeholder="Enter your address" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 ">
                            <button type="button" onClick={validateForm} className="btn btn-outline-primary btns2">Add User</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewUser;