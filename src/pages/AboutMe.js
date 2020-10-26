import React from "react"
import { Link } from "react-router-dom"
import Container from "../components/Container/Container"
import Row from "../components/Row/Row"
import Col from "../components/Col/Col"
import ExtLink from "../components/ExtLink/ExtLink"
import Header from "../components/Header/Header"
import ProfilePic from "../components/ProfilePic/ProfilePic"

function AboutMe(props) {
    return (
        <Container>
            <Row classes="justify-content-center">
                <Col classes="contentMain col-md-8 all">
                    <Header header="About Me"/>
                    <Row>
                        <Col>
                            <ProfilePic />
                            <p>My name is Alvin Cox and I from Prince George County, Virginia, which is located about twenty-five minutes south of Richmond, VA. I am enrolled in a six-month Full Stack programming cohort. Programming languages that I have experience with include HTML, CSS, & JavaScript. I also have experience with ES6, React.js, MySQL Database, Mongo Database, Node.js, Express, and using AJAX and Axios to make API calls.</p>

                            <p>Currently I work as a Validation Engineer for a contracting company where I validate the installation and
                            functionallity of automation systems that are used in the manufacturing of pharmaceutical drugs. This position
                            requires very detailed testing and documentation to ensure systems meet FDA regulations.</p>

                            <p>I am a graduate of Randolph-Macon College where I majored in Physics and minored in Mathematics and Astrophysics. I also have an Associate’s Degree in Mechanical Engineering Technology.</p>
                        </Col>
                    </Row>
                    <Header header="Additional Links"/>
                    <Row>
                        <Col classes="my-2 d-flex justify-content-center links">
                            <Link className="links" target="blank" to={require("../assets/images/AlvinResume.pdf")}>My Resume</Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col classes="my-2 d-flex justify-content-center links">
                            <ExtLink to="https://www.linkedin.com/in/alvin-cox-275a82106/" text="My LinkedIn Profile"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col classes="my-2 d-flex justify-content-center links">
                            <ExtLink to="https://github.com/AlvinZC4" text="My GitHub Profile"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col classes="my-2 d-flex justify-content-center links">
                            <ExtLink to="mailto:alvinzcoxiv@gmail.com" text="Send Me an E-Mail"/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe