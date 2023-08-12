import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import "../styles/header.css";

import logo from "../img/logo_struct.png";

function header() {
    return (
        <header className="header">
            <ReactBootstrap.Navbar collapseOnSelect expand="lg" variant="light">
                <ReactBootstrap.Container>
                    <a href="/">
                        <ReactBootstrap.Image
                            className="logo"
                            src={logo}
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
                            <ReactBootstrap.Nav.Link
                                className="headerFont"
                                href="#projetos"
                            >
                                Projetos
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
    );
}

export default header;