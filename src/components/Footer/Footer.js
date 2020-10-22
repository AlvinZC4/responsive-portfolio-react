import React from "react"
import Container from "../Container/Container"
import Row from "../Row/Row"
import "./styles.css"
import logo from "../../logo.svg"
function Footer(props) {
    return (
        <footer className="footer mt-auto py-3">
            <Container>
                <Row classes={props.classes}>
                    <span className="footer-content">
                        {props.footer}
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    </span>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer