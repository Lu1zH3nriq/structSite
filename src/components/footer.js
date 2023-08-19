import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import "../styles/App.css";

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
                  <h5>LOGO</h5>
                  <p>
                    &copy; {anoAtual} Struct - Engenharias. Todos os direitos
                    reservados.
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
                    <p>insta</p>
                    <p>linkedIn</p>
                    <p>face</p>
                    <p>whatsapp</p>
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
