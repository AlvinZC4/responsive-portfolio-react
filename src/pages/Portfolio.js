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
          <Project
          head="Work Day Planner"
          image={require("../assets/images/DayPlanner.png")}
          alt="Work Day Planner"
          toapp={"https://alvinzc4.github.io/Work-Day-Scheduler/"}
          textapp={"Work Day Planner"}
          torepo={"https://github.com/AlvinZC4/Work-Day-Scheduler"}
          textrepo={"Work Day Planner Repo"}
          content="The Work Day Planner is a daily event calendar that breaks each day 
           down by the hour for every hour of the typical work day (8am - 5pm) and allows 
           the user to create and save events for each hour. The application displays the
           current day and time and dynamically updates the display of the calendar based
           on the current time. This application makes use of Moment.js and LocalStorage"
          />
          <Project 
          head="Eat-Da-Burger"
          image={require("../assets/images/BurgerApp.png")}
          alt="Eat-Da-Burger"
          toapp={"https://shrouded-journey-36823.herokuapp.com/"}
          textapp={"Eat-Da-Burger"}
          torepo={"https://github.com/AlvinZC4/Eat-da-Burger"}
          textrepo={"Eat-Da-Burger Repo"}
          content="Eat-Da-Burger is an application that allows the user to create as 
           many burgers as they like and then devour them. This application uses a MySQL
           database along with three of the four CRUD operations to Get, Post, and Put the
            user created burgers. The application was created with the MCV model and ultizes 
            Handlebars.js to render data returned from the database."
          />

        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
