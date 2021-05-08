import './App.css';
import React from "react";
import Home from './components/Home';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { 
  Navbar,
  Nav,
  Row,
  Col,
  Button
 } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Router>
      <div>
      <Navbar bg="dark" variant="dark">
      <Row>
        <Col>
          <Navbar.Brand className="d-inline-block" href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto d-inline-block">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </Nav>
        </Col>
        <Col>
          <Button className="btn-sm m-2" variant="outline-light">Primary</Button>
          <Button className="btn-sm m-2" variant="outline-light">Secondary</Button>
        </Col>
      </Row>
      </Navbar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
