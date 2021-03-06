import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

function NavBar(props) {
    return (
        <nav className="py-0 d-block d-md-flex navbar navbar-expand-mb navbar-light barall">
            <span className="navbar-brand navtext d-flex justify-content-center my-1 ml-5 px-5 h1">Alvin Z. Cox IV</span>
            <nav className="nav">
            <Link className="nav-link" to={"/"}>About Me</Link>
            <Link className="nav-link" to={"/portfolio/"}>Portfolio</Link>
            </nav>
        </nav>
    )
}

export default NavBar