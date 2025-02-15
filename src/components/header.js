import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/header.css";

import logo from "../img/logo_struct.webP";

import Contato from "./contato";

function Header() {

  const [viewModalContato, setViewModalContato] = useState(false);


  return (
    <main>
      <header className="header">
        <ReactBootstrap.Navbar collapseOnSelect expand="lg" variant="light">
          <ReactBootstrap.Container>
            <Link to="/">
              <ReactBootstrap.Image
                className="logo"
                src={logo}
                alt="Logo"
                title="Logo"
              />
            </Link>
            <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootstrap.Nav>
                <ReactBootstrap.Nav.Link className="headerFont" href="/">
                  Home
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link className="headerFont" href="/#serviços">
                  Serviços
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link className="headerFont" href="/#sobre">
                  Sobre
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Nav.Link className="headerFont" href="/#clientes">
                  Clientes
                </ReactBootstrap.Nav.Link>
                {/* <ReactBootstrap.Nav.Link className="headerFont" href="/Projetos">
                Projetos
              </ReactBootstrap.Nav.Link> */}
                <ReactBootstrap.Nav.Link className="headerFont" href="" onClick={() => {
                  setViewModalContato(true);
                }}>
                  Contato
                </ReactBootstrap.Nav.Link>
              </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
          </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
      </header>


      <Contato show={viewModalContato} handleClose={() => setViewModalContato(false)} />
    </main>
  );
}

export default Header;
