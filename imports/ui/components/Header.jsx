import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Dropdown, Collapse } from 'bootstrap-4-react';

export default Header = () => {
    return (
      <Navbar className="navbar-suite" expand="lg" fixed="top">
        <Navbar.Brand href="#">
          Navbar
        </Navbar.Brand>
        <Navbar.Toggler target="#navbarSupportedContent" />
        <Collapse navbar id="navbarSupportedContent">
          <Navbar.Nav mr="auto" />
          <Navbar.Nav my="2 lg-0">
            <Nav.Item dropdown>
              <Nav.Link dropdownToggle>Menú</Nav.Link>
              <Dropdown.Menu>
                <Link to="/" className="dropdown-item">
                  <i className="fa fa-dashboard"/> Dashboard
                </Link>
                <Link to="/statistics" className="dropdown-item">
                  <i className="fa fa-bar-chart"/> Statistics
                </Link>
              </Dropdown.Menu>
            </Nav.Item>
            <Nav.Item mr="3" ml="3">
              <Nav.Link disabled>Salir</Nav.Link>
            </Nav.Item>
          </Navbar.Nav>
        </Collapse>
      </Navbar>
    )
}