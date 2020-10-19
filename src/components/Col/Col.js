import React from "react"

function Col(props) {
    return <div className={`col-12 ${props.classes}`}>{props.children}</div>
}

export default Col