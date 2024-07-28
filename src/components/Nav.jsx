import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

    const navigate = useNavigate()

    const LogOut=() => {
        sessionStorage.clear()
        navigate("/")
    }

  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-tertiary ">     
        <div class="container-fluid">
        <img src="https://img.freepik.com/premium-vector/word-concept-color-geometric-shapes-blog_205544-12899.jpg" alt="Logo" width="200" height="120" class="d-inline-block align-text-top"></img>
        <a class="navbar-brand text-danger fw-bold fs-1">BLOGAPP</a>
        <a href="/CreatePost" className="btn btn-dark">CREATE A POST</a>
        <a href="/ViewMyPost" className="btn btn-dark">VIEW MY POSTS</a>
        <a href="/ViewAll" className="btn btn-dark">VIEW ALL POSTS</a>
        <button onClick={LogOut} className="btn btn-danger">LOGOUT</button>
    </div>
    </nav>
    <hr class="border border-success border-1 opacity-50"></hr>
</div>
  )
}

export default Nav