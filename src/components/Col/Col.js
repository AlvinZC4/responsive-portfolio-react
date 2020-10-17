import React from "react"

function Col(props) {
    const classes = props.classes.split(" ").map(classes => classes).join(" ")

    return <div className={classes}>{props.children}</div>
}

export default Col