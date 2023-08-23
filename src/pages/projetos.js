import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import "../styles/App.css";

import Header from "../components/header";
import Footer from "../components/footer";

import whatsapp from "../img/whatsapp3.webP";

function projetos() {
  return (
    <>
      <Header></Header>

      <section id="avaliacoes">
        <div className="avContainer">
          <ReactBootstrap.Container>
            <h3>Últimos Projetos </h3>

            <div className="depoimentos">
              <ReactBootstrap.Row className="linhaDepoimentos">
                <ReactBootstrap.Col>
                  <div className="projeto">
                    <ReactBootstrap.Image
                      src=""
                      alt="Foto Depoimento 1"
                      title="Foto Depoimento 1"
                    />
                    <h2>NOME PROJETO</h2>
                    <h5>OBRA N° 12381</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </ReactBootstrap.Col>

                <ReactBootstrap.Col>
                  <div className="projeto">
                    <ReactBootstrap.Image
                      src=""
                      alt="Foto Depoimento 2"
                      title="Foto Depoimento 2"
                    />
                    <h2>NOME PROJETO</h2>
                    <h5>OBRA N° 12381</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </ReactBootstrap.Col>
              </ReactBootstrap.Row>
            </div>
          </ReactBootstrap.Container>
        </div>

        <div className="avContainer">
          <ReactBootstrap.Container>
            <div className="depoimentos">
              <ReactBootstrap.Row className="linhaDepoimentos">
                <ReactBootstrap.Col>
                  <div className="projeto">
                    <ReactBootstrap.Image
                      src=""
                      alt="Foto Depoimento 1"
                      title="Foto Depoimento 1"
                    />
                    <h2>NOME PROJETO</h2>
                    <h5>OBRA N° 12381</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </ReactBootstrap.Col>

                <ReactBootstrap.Col>
                  <div className="projeto">
                    <ReactBootstrap.Image
                      src=""
                      alt="Foto Depoimento 2"
                      title="Foto Depoimento 2"
                    />
                    <h2>NOME PROJETO</h2>
                    <h5>OBRA N° 12381</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </ReactBootstrap.Col>

                <ReactBootstrap.Col>
                  <div className="projeto">
                    <ReactBootstrap.Image
                      src=""
                      alt="Foto Depoimento 3"
                      title="Foto Depoimento 3"
                    />
                    <h2>NOME PROJETO</h2>
                    <h5>OBRA N° 12381</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </ReactBootstrap.Col>
              </ReactBootstrap.Row>
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

export default projetos;
