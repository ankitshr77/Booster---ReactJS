import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container mt-2 mb-5'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand logoclass" to="/">BOOSTER</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link mx-2 buttonclass" aria-current="page" to="/features">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2 buttonclass" aria-current="page" to="/pricing">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2 buttonclass" aria-current="page" to="/resources">Resources</Link>
        </li>
        
        
      </ul>
      <form className="d-flex" role="search">
        <button className="btn mx-2 font-weight-bold buttonclass valbtn" type="submit">Log In</button>
        <button className="btn mx-2 signupbtn font-weight-bold valbtn" type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
