import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashLink as Link } from'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Mary Jiang',
      headerLinks: [
        { title: 'Home', path: '/home' },
        { title: 'Projects', path: '/#projects' }, // /#projects
        { title: 'About', path: '/#about' },
        { title: 'Contact', path: '/#contact' }
      ],
      projects: {
        title: 'Projects',
      },
      about: {
        title: 'About',
      },
      contact: {
        title: 'Contact',
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="light" fixed="top" style={{ outline: '1px solid' }}>
            <Navbar.Brand className="nav-link" href="/">Mary Jiang</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" smooth to="/#projects">Projects</Link>
                <Link className="nav-link" smooth to="/#about">About</Link>
                <Link className="nav-link" smooth to="/#contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <Home />} />
          <Route path="/projects" render={() => <Projects title={this.state.projects.title} />} />
          <Route path="/about" render={() => <About title={this.state.about.title} />} />
          <Route path="/contact" render={() => <Contact title={this.state.contact.title} />} />

          {/* <Footer /> */}
        </Container>
      </Router>
    );
  }
}

export default App;
