import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

import Header from "../components/header";
import Footer from "../components/footer";

import whatsapp from "../img/whatsapp3.webP";

function contato() {
  return (
    <>
      <Header></Header>

      <section id="contato">
        <div className="formContato">
          <ReactBootstrap.Container>
            <div className="containerForm">
              <h3>Envie um e-mail com sua mensagem </h3>
              <ReactBootstrap.Form>
                <ReactBootstrap.Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <ReactBootstrap.Form.Label>
                    Digite seu nome:
                  </ReactBootstrap.Form.Label>
                  <ReactBootstrap.Form.Control
                    type="text"
                    placeholder="Seu nome"
                  />
                </ReactBootstrap.Form.Group>

                <ReactBootstrap.Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <ReactBootstrap.Form.Label>
                    Digite seu email:
                  </ReactBootstrap.Form.Label>
                  <ReactBootstrap.Form.Control
                    type="email"
                    placeholder="email@exemplo.com.br"
                  />
                </ReactBootstrap.Form.Group>

                <ReactBootstrap.Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <ReactBootstrap.Form.Label>
                    Informe o assunto:
                  </ReactBootstrap.Form.Label>
                  <ReactBootstrap.Form.Control
                    type="text"
                    placeholder="Qual o assunto"
                  />
                </ReactBootstrap.Form.Group>

                <ReactBootstrap.Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <ReactBootstrap.Form.Label>
                    Escreva sua mensagem:
                  </ReactBootstrap.Form.Label>
                  <ReactBootstrap.Form.Control as="textarea" rows={3} />
                </ReactBootstrap.Form.Group>
              </ReactBootstrap.Form>

              <div className="btnEnviar">
                <button>Enviar</button>
              </div>
            </div>
          </ReactBootstrap.Container>
        </div>
      </section>

      <div>
        <a
          href="https://wa.me/553175816475?text=Ol%C3%A1%2C+tudo+bem%3F++Mensagem+de+sauda%C3%A7%C3%A3o%3B+"
          target="blank"
        >
          <img
            className="fixedButton"
            src={whatsapp}
            alt="Whatsapp"
            title="Whatsapp"
          />
        </a>
      </div>
      <Footer></Footer>
    </>
  );
}

export default contato;
