import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-tertiary ">     
        <div class="container-fluid">
        <img src="https://img.freepik.com/premium-vector/word-concept-color-geometric-shapes-blog_205544-12899.jpg" alt="Logo" width="200" height="120" class="d-inline-block align-text-top"></img>
        <a class="navbar-brand text-danger fw-bold fs-1">BLOGAPP</a>
        
        <a href="/SignIn" className="btn btn-secondary">SIGN IN</a>
        <a href="/SignUp" className="btn btn-dark">NEW USER?</a>
        <a href="/" className="btn btn-warning">BACK TO HOME</a>
        
      
       
        
        </div>
        </nav>
        <hr class="border border-success border-1 opacity-50"></hr>
    </div>
    
  )
}

export default Navbar