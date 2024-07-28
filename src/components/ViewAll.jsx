import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const ViewAll = () => {

    const [data,setData]=useState([

    ])

    const fetchData=()=> {
        axios.post("http://localhost:8080/viewall", {}, {
            headers:{"token":sessionStorage.getItem("token"), "Content-Type":"application/json"}
    }).then(
        (response)=>{
            console.log(response.data)
            setData(response.data)
        }
    ).catch(
        (error) => {
            console.log(error)
        }
    )
}

    useEffect( ()=> {fetchData()},[])


  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    
                    <div className="row g-3">

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            {data.map(
                                (value,index) => {
                                    return <div class="card mb-3">
                                    
                                    <div class="row g-0">
                                      <div class="col-md-4">
                                        <img src="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid rounded-start" alt="..."></img>
                                      </div>
                                      <div class="col-md-8">
                                        <div class="card-body">
                                          <h5 class="card-title">{value.Message}</h5>
                                          
                                          <p class="card-text"><small class="text-body-secondary">Posted on {value.postedDate}</small></p>
                                        </div>
                                      </div>
                                    </div>

                                
                                  </div>
                                }
                            )}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll