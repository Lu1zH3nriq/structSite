import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import "../styles/App.css";

function Home() {
  return (
    <>
      <header className="header">
        <ReactBootstrap.Navbar collapseOnSelect expand="lg" variant="light">
          <ReactBootstrap.Container>
            <a href="/">
              <ReactBootstrap.Image
                className="logo"
                src='#'
                alt="Logo"
                title="Logo"
              />
            </a>
            <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootstrap.Nav>
                <ReactBootstrap.Nav.Link className="headerFont" href="/">
                  Home
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link
                  className="headerFont"
                  href="#serviços"
                >
                  Serviços
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link className="headerFont" href="#sobre">
                  Sobre
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link className="headerFont" href="#contato">
                  Contato
                </ReactBootstrap.Nav.Link>
              </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
          </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
      </header>
    </>
  );
}

export default Home;
