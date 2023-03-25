import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"
import logo from "../assets/logo.png"
import burger from "../assets/burger-bar.png"
import { useState } from "react"


const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(prevState => !prevState)
    }

    return (
        <div className="nav-bar">
            <div className="nav-wrapper">
                <Link className="nav-brand display-font bold" to="/">
                    <img className="nav-logo" src={logo} alt="Website logo" />
                    <span className="primary">mcj.</span>galvez
                </Link>
                <nav className="nav-container">
                    <div className={show ? "nav-items" : "nav-items show"}>
                        <NavLink to="/about" className="nav-item">About</NavLink>
                        <NavLink to="/skills" className="nav-item">Skills</NavLink>
                        <NavLink to="/projects" className="nav-item">Projects</NavLink>
                        <NavLink to="/contact" className="nav-item">Contact</NavLink>
                    </div>
                    {/* Burger Menu */}
                    <img
                        className="burger-menu"
                        onClick={handleClick}
                        src={burger}
                        alt="Burger menu" />
                </nav>
            </div>

        </div>
    )
}

export default Navbar