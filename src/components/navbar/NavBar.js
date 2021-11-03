import React from 'react'
import './navbar.css'

const NavBar = () => {
    return (

    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "white"}}>
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#">The Dojo Blog</a>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">New Blog</a>
                    </li>
                </ul>  
            </div>
        </div>
    </nav>

    )
}

export default NavBar
