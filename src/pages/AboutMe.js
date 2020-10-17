import React from "react"
import Container from "../components/Container/Container"
import Row from "../components/Row/Row"
import Col from "../components/Col/Col"
import Header from "../components/Header/Header"

function AboutMe(props) {
    return (
        <Container>
            <Row>
                <Col classes="contentMain col-12 all">
                    <Header header="About Me"></Header>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe