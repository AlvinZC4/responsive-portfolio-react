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
            head="Procasti-Dater"
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
          <Project
            head="Employee Directory"
            image={require("../assets/images/EmployeeDirectory.png")}
            alt="Employee Directory"
            toapp={"https://alvinzc4.github.io/Employee-Directory/"}
            textapp={"Employee Directory"}
            torepo={"https://github.com/AlvinZC4/Employee-Directory"}
            textrepo={"Employee Directory Repo"}
            content="The Employee Directory application makes an API call to get 50
             random employees. The employees can be searched and sorted by first name
             or last name. This is a front-end applcation that was created using React.js
             and ultizies axios as well as current React syntax such as useState and useEffect"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
