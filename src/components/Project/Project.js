import React from "react"
import Row from "../Row/Row"
import Col from "../Col/Col"
import ColH from "../ColH/ColH"
import PortHead from "../PortHeader/PortHeader"
import ProImage from "../ProImage/ProImage"

function Project(props) {
    return (
        <Row classes="justify-content-center my-3 project">
            <Col classes="col-md-6">
                <PortHead head={props.head}/>
                <Row>
                    <ColH classes="col-6">
                        <ProImage image={props.image} alt={props.alt}/>
                    </ColH>
                </Row>
            </Col>
        </Row>
    )
}

export default Project