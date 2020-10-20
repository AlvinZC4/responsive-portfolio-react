import React from "react"
import "./styles.css"

function ProImage(props) {
    return (
        <img className="project-image" src={props.image} alt={props.alt}/>
    )
}

export default ProImage