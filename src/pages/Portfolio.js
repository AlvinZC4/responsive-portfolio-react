import React from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Header from "../components/Header/Header";
import Project from "../components/Project/Project";
// import images from "../assets/images"

function Portfolio(props) {
  return (
    <Container>
      <Row classes="justify-content-center">
        <Col classes="contentMain col-md-8 all">
          <Header header="Portfolio"></Header>
          <Project
            head="Procasti-dater"
            image={require("../assets/images/DinnerDate.png")}
            alt="Procrasti-Dater"
            toapp={"https://alvinzc4.github.io/Dinner-And-A-Movie/"}
            textapp={"Procasti-Dater"}
            torepo={"https://github.com/AlvinZC4/Dinner-And-A-Movie"}
            textrepo={"Procasti-Dater Repo"}
            content="Procasti-Dater is an application that allows users to quickly
             set up a date on the fly by searching a specified location for a restaurants 
             based on cusine and events (such as concerts or shows). This app uses 
             Integrated Google Geocode, Google Maps, Google Maps Places, & Ticketmaster 
             API’s and manipulated the DOM with JavaScript by leveraging the DOM API."
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
