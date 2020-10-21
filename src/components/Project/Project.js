import React from "react";
import Row from "../Row/Row";
import Col from "../Col/Col";
import PortHead from "../PortHeader/PortHeader";
import ProImage from "../ProImage/ProImage";
import ExtLink from "../ExtLink/ExtLink";
import "./styles.css"

function Project(props) {
  return (
    <Row classes="justify-content-center my-3 project">
      <Col>
        <PortHead head={props.head} />
        <Row classes="mt-2">
          <Col classes="col-lg-6">
            <Row>
              <Col classes="d-flex mt-3 justify-content-center">
                <ProImage image={props.image} alt={props.alt} />
              </Col>
            </Row>
            <Row>
              <Col classes="d-flex justify-content-center">
                <ExtLink
                  to={props.toapp}
                  text={props.textapp}
                />
              </Col>
            </Row>
            <Row>
              <Col classes="d-flex justify-content-center">
                <ExtLink
                  to={props.torepo}
                  text={props.textrepo}
                />
              </Col>
            </Row>
          </Col>
          <Col classes="col-lg-6 mt-2">
            <p className="tab">
              Procasti-Dater is an application that allows users to quickly set
              up a date on the fly by searching a specified location for a
              restaurants based on cusine and events (such as concerts or
              shows). This app uses Integrated Google Geocode, Google Maps, Google Maps Places, &
              Ticketmaster API’s and manipulated the DOM with JavaScript by
              leveraging the DOM API.
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Project;
