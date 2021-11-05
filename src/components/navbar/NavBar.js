import {Link} from 'react-router-dom'
import './navbar.css'


const NavBar = () => {
    return (

    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "white"}}>
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link className="navbar-brand" to="/">The Dojo Blog</Link>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/create">New Blog</Link>
                    </li>
                </ul>  
            </div>
        </div>
    </nav>

    )
}

export default NavBar
