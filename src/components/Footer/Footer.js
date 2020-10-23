import React from "react"
import Container from "../Container/Container"
import Row from "../Row/Row"
import "./styles.css"
function Footer(props) {
    return (
        <footer className="footer mt-auto py-3">
            <Container>
                <Row classes={props.classes}>
                    <span className="footer-content">
                        {props.footer}
                    </span>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer