import React from "react"
import Container from "../components/Container/Container"
import Row from "../components/Row/Row"
import Col from "../components/Col/Col"
import Header from "../components/Header/Header"
import ProfilePic from "../components/ProfilePic/ProfilePic"

function AboutMe(props) {
    return (
        <Container>
            <Row classes="justify-content-center">
                <Col classes="contentMain col-md-8 all">
                    <Header header="About Me"></Header>
                    <Row>
                        <Col>
                            <ProfilePic />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe