import React from "react";
import Row from "../Row/Row";
import Col from "../Col/Col";
import PortHead from "../PortHeader/PortHeader";
import ProImage from "../ProImage/ProImage";
import ExtLink from "../ExtLink/ExtLink";
import "./styles.css"

function Project(props) {
  const {stuff} = props
  console.log(props)

  return (
    <Row classes="justify-content-center my-3 project">
      <Col>
        <PortHead head={stuff.head} />
        <Row classes="mt-2">
          <Col classes="col-lg-6">
            <Row>
              <Col classes="d-flex mt-3 justify-content-center">
                <ProImage image={stuff.image} alt={stuff.alt} />
              </Col>
            </Row>
            <Row>
              <Col classes="d-flex justify-content-center">
                <ExtLink
                  to={stuff.toapp}
                  text={stuff.textapp}
                />
              </Col>
            </Row>
            <Row>
              <Col classes="d-flex justify-content-center">
                <ExtLink
                  to={stuff.torepo}
                  text={stuff.textrepo}
                />
              </Col>
            </Row>
          </Col>
          <Col classes="col-lg-6 mt-2">
            <p className="tab">{stuff.content}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Project;
