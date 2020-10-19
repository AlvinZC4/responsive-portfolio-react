import React from "react"
import "./styles.css"

function ExtLink(props) {

    return (
        <a className="links" href={props.to}>{props.text}</a>
    )
}

export default ExtLink
