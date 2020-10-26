import React, {useState} from "react";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";
import Col from "../components/Col/Col";
import Header from "../components/Header/Header";
import Project from "../components/Project/Project";
import projectArray from "../assets/Projects/Projects.json"

function Portfolio() {

  const [projects, setProjects] = useState(projectArray)
  console.log(projects)

  return (
    <Container>
      <Row classes="justify-content-center">
        <Col classes="contentMain col-md-8 all">
          <Header header="Portfolio"></Header>
          {projects.map((item, index) => <Project key={index} stuff={item} />)}
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
