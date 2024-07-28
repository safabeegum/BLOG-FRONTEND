import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const SignIn = () => {

    const navigate = useNavigate()

    const [input, setInput] = useState(
        {"email":"",
            "password":""}
    )
    const inputHandler=(event) =>{
        setInput({...input,[event.target.name]: event.target.value})
    }

    const readValues=() =>{
        console.log(input)
    

        axios.post("http://localhost:8080/signin",input).then(
            (response) => {
                    console.log(response.data)
                    if (response.data.status=="Incorrect Password")
                    {
                        alert("Incorrect Password")   
                    } 
                    else
                    {
                        let token = response.data.token
                        let userId = response.data.userId

                        console.log(userId)
                        console.log(token)

                        sessionStorage.setItem("userId",userId)
                        sessionStorage.setItem("token",token)

                        navigate("/CreatePost")
                    }
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">EMAIL ID</label>
                            <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">PASSWORD</label>
                            <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValues} className="btn btn-success">LOGIN</button>
                        </div>

                        

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn