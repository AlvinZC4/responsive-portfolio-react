import React from "react"
import Row from "../Row/Row"
import Col from "../Col/Col"
import PortHead from "../PortHeader/PortHeader"

function Project(props) {
    return (
        <Row classes="justify-content-center my-3 project">
            <Col classes="col-md-6">
                <PortHead head={props.head}/>
            </Col>
        </Row>
    )
}

export default Project