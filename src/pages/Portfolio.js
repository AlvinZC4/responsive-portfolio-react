import React from "react"
import Container from "../components/Container/Container"
import Row from "../components/Row/Row"
import Col from "../components/Col/Col"
import Header from "../components/Header/Header"
import Project from "../components/Project/Project"

function Portfolio(props) {
    return (
        <Container>
            <Row classes="justify-content-center">
                <Col classes="contentMain col-md-8 all">
                    <Header header="Portfolio"></Header>
                    <Project head="Procasti-dater"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Portfolio