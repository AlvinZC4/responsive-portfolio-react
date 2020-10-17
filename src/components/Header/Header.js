import React from "react"

function Header(props) {
    return (
        <div className="header row">
            <div className="col-12">
                <h2>{props.header}</h2>
            </div>
        </div>
    )
}

export default Header