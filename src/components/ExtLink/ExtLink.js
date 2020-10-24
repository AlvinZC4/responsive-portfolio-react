import React from "react"
import "./styles.css"

function ExtLink(props) {

    return (
        <a className="links" target="blank" href={props.to}>{props.text}</a>
    )
}

export default ExtLink
