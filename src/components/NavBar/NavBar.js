import React from "react"
import "./style.css"

function NavBar() {
    return (
        <nav className="py-0 d-block d-md-flex navbar navbar-expand-mb navbar-light barall">
            <span className="navbar-brand navtext d-flex justify-content-center mb-0 ml-5 px-5 h1">Alvin Z. Cox IV</span>
            <nav className="nav">
            <a className="nav-link active" href="index.html">About</a>
            <a className="nav-link" href="portfolio.html">Portfolio</a>
            <a className="nav-link" href="contact.html">Contact</a>
            </nav>
        </nav>
    )
}

export default NavBar