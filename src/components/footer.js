import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import "../styles/App.css";

import logo from "../img/logo.webP";
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa6";


function footer() {

  const anoAtual = new Date().getFullYear();

  return (
    <footer>
      <div className="footer">
        <ReactBootstrap.Container>
          <div className="contentFooter">
            <ReactBootstrap.Row className="linhaFooter">
              <ReactBootstrap.Col className="colunaFooter">
                <h5>Struct Engenharia</h5>
                <img src={logo}
                  alt="Logo"
                  title="Logo" />
                <p>
                  &copy; {anoAtual} Struct - Engenharia.
                </p>
                <p>
                  Todos os direitos reservados.
                </p>
              </ReactBootstrap.Col>
              <ReactBootstrap.Col className="colunaFooter">
                <h5>Contato</h5>
                <p>email.email@email.com</p>
                <p>(XX) XXXX - XXXX </p>
                <p>Rua teste, 981, Teste</p>
                <p>Exemplo - MG</p>
              </ReactBootstrap.Col>
              <ReactBootstrap.Col className="colunaFooter">
                <h5>Social</h5>
                <div className="socialIcons">
                  <a href=""><FaInstagram /> Instagram</a>
                  <a href=""><FaLinkedin /> linkedIn</a>
                  <a href=""><FaFacebook /> Facebook</a>
                  <a href=""><FaWhatsapp /> Whatsapp</a>
                </div>
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>
          </div>
        </ReactBootstrap.Container>
      </div>
    </footer>
  );
}

export default footer;
