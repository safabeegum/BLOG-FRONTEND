import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const SignUp = () => {

    const [input, setInput]=new useState(
        {
            "firstname":"",
            "lastname":"",
            "phone":"",  
            "email":"",  
            "username":"", 
            "password":"",
            "confirmpass":""
        }
    )

    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        if (input.password==input.confirmpass) 
        {
            let newInput = {"firstname": input.firstname, "lastname":input.lastname, "phone": input.phone, "email": input.email, "username": input.username, "password": input.password}
            
            axios.post("http://localhost:8080/signup",newInput).then(
                (response) => {
                       console.log(response.data) 
                       if (response.data.status=="Success") 
                       {
                            alert("Registered Successfully")
                            setInput(
                                {"firstname":"",
                                "lastname":"",
                                "phone":"",  
                                "email":"",  
                                "username":"", 
                                "password":"",
                                "confirmpass":""})
                       } 
                       else 
                       {
                            alert("Email ID already Exists")
                            setInput(
                                {"firstname":"",
                                "lastname":"",
                                "phone":"",  
                                "email":"",  
                                "username":"", 
                                "password":"",
                                "confirmpass":""})
                       }
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
        
        } 
        else 
        {
            alert("Password and Confirm Password doesn't match")
        }
    }

  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                    {/* signup form start */}
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">FIRST NAME</label>
                            <input type="text" className="form-control" name='firstname' value={input.firstname} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">LAST NAME</label>
                            <input type="text" className="form-control" name='lastname' value={input.lastname} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">CONTACT NUMBER</label>
                            <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">EMAIL ID</label>
                            <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">USERNAME</label>
                            <input type="text" className="form-control" name='username' value={input.username} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">PASSWORD</label>
                            <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                            <input type="password" className="form-control" name='confirmpass' value={input.confirmpass} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-success">REGISTER</button>
                        </div>

                        
                        {/* signup form end */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp