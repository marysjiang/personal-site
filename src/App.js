import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HashLink as Link } from'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Home from './pages/Home';
import Projects from './pages/Projects'
import T2PPage from './pages/T2PPage';
import KKRunnerPage from './pages/KKRunnerPage';
import FilmPhotographyPage from './pages/FilmPhotographyPage';
import GraphicDesignPage from './pages/GraphicDesignPage';

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
          {/* <Navbar className="border-bottom" bg="light" fixed="top" style={{ outline: '1px solid' }}> */}
          <Navbar bg="transparent" fixed="top">
            <Navbar.Brand className="nav-link" href="/"><p class="header">Mary Jiang</p></Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" smooth to="/#projects"><p class="header">Projects</p></Link>
                <Link className="nav-link" smooth to="/#about"><p class="header">About</p></Link>
                <Link className="nav-link" smooth to="/#contact"><p class="header">Contact</p></Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" render={() => <Home />} />
          <Route path="/projects/tale-of-two-partners" render={() => <T2PPage />} />
          <Route path="/projects/kk-runner" render={() => <KKRunnerPage />} />
          <Route path="/projects/graphic-design" render={() => <GraphicDesignPage />} />
          <Route path="/projects/film-photography" render={() => <FilmPhotographyPage />} />

          {/* <Route path="/#projects" render={() => <Projects />} /> */}
          {/* <Switch>
            <Route path="/" exact render={() => <Home />} />
          </Switch> */}
          
          {/* <Route path="/tale-of-two-partners" render={() => <Project title={this.state.}} */}
          {/* <Route path="/projects" render={() => <Projects title={this.state.projects.title} />} />
          <Route path="/about" render={() => <About title={this.state.about.title} />} />
          <Route path="/contact" render={() => <Contact title={this.state.contact.title} />} /> */}

          {/* <Footer /> */}
        </Container>
      </Router>
    );
  }
}

export default App;
