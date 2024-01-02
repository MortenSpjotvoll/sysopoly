import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../logo/Logo';
import './Navigation.scss';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const openClass = open ? 'is_open' : 'is_closed';

  return (
    <Container fluid className="navContainer">
      <Row className="navRow">
        <Col className="logo">
          <Logo />
        </Col>
        <Col>
          <div
            className={`burger ${openClass}`}
            role="button"
            aria-label="burger-menu"
            tabIndex={0}
            onClick={() => setOpen(!open)}
            onKeyUp={() => setOpen(!open)}
          >
            <div />
            <div />
            <div />
          </div>
          <ul className={`rightNav ${openClass}`}>
            <li className="nav-link">
              <a href="home">Home</a>
            </li>
            <li className="nav-link">
              <a href="test">Test</a>
            </li>
            <li className="nav-link">
              <a href="about">About</a>
            </li>
            <li className="nav-link">
              <a href="portfolio">Portfolio</a>
            </li>
            <li className="nav-link">
              <a href="contact">Contact</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
