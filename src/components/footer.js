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
                  <a href="https://www.instagram.com/"
                    target="blank"
                  ><FaInstagram /> Instagram</a>
                  <a href="https://br.linkedin.com/"
                    target="blank"
                  ><FaLinkedin /> linkedIn</a>
                  <a href="https://pt-br.facebook.com/login/device-based/regular/login/"
                    target="blank"
                  ><FaFacebook /> Facebook</a>
                  <a href="https://wa.me/553175816475?text=Ol%C3%A1%2C+tudo+bem%3F++Mensagem+de+sauda%C3%A7%C3%A3o%3B+"
                    target="blank"
                  ><FaWhatsapp /> Whatsapp</a>
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
