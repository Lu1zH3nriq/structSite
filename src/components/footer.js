import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import "../styles/App.css";

import logo from "../img/logo.webP";
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

function footer() {

  const anoAtual = new Date().getFullYear();
  const message = "Olá, tudo bem? Gostaria de saber mais sobre os serviços da Struct Engenharia. Poderia me ajudar?";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/553175816475?text=${encodedMessage}`;


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
                <p>engenharia.struct@gmail.com</p>
                <p>(55) 31 7581-6475</p>
                <p>Rua teste, 981, Teste</p>
                <p>Belo Horizonte - MG</p>
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
                  <a href={whatsappLink}
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
