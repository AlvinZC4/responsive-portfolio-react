import React from "react"
import "./styles.css"

function PortHeader(props) {
    return (
    <div className="row">
        <div className="col-12 mb-2 d-flex justify-content-center ml-3 projecthead">
            <h3>{props.head}</h3>
        </div>
    </div>
    )
}

export default PortHeader