import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Wrapper>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/portfolio/" component={Portfolio} />
        </Wrapper>
        <Footer footer="Created using React.js" classes="justify-content-end"/>
      </div>
    </Router>
  );
}

export default App;
