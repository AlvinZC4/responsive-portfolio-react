import React from "react";
import Row from "../Row/Row";
import Col from "../Col/Col";
import ColH from "../ColH/ColH";
import PortHead from "../PortHeader/PortHeader";
import ProImage from "../ProImage/ProImage";
import ExtLink from "../ExtLink/ExtLink";

function Project(props) {
  return (
    <Row classes="justify-content-center my-3 project">
      <Col>
        <PortHead head={props.head} />
        <Row>
          <ColH classes="col-6">
            <Row>
                <Col classes="d-flex justify-content-center">
                    <ProImage image={props.image} alt={props.alt} />
                </Col>
            </Row>
            <Row>
                <Col classes="d-flex justify-content-center">
                    <ExtLink
                    to="https://alvinzc4.github.io/Dinner-And-A-Movie/"
                    text="Procasti-dater"
                    />
                </Col>
            </Row>
            <Row>
                <Col classes="d-flex justify-content-center">
                    <ExtLink
                    to="https://github.com/AlvinZC4/Dinner-And-A-Movie"
                    text="Procasti-dater Repo"
                    />
                </Col>
            </Row>
          </ColH>
          <ColH classes="col-6 mt-2">
            <p>
              Procasti-Dater is an application that allows users to quickly set
              up a date on the fly. The application will search an area
              specified by the user for restaurants based on the type of cusine
              that has been selected and at the same time the app will also show
              any events that are scheduled in the area (such as concerts or
              shows).
            </p>
          </ColH>
        </Row>
      </Col>
    </Row>
  );
}

export default Project;
