import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import "../styles/App.css";

import Header from "../components/header";

import consultoriaImg from "../img/consultoria.jpg";
import projetosImg from "../img/projetos.jpg";
import fiscalizacaoImg from "../img/fiscalizacao.jpg";
import fotoEmpresa from "../img/fotoEmpresa.jpg";

function Home() {
  return (
    <>
      <Header></Header>


      <section id="home">
        <div className="fundoMainFrame">
          <ReactBootstrap.Container>
            <div className="textos">
              <h4>Texto pequeno de efeito!</h4>
              <h1>TEXTO GRANDE CHAMATIVO </h1>
              <h1>Slogam</h1>
              <ReactBootstrap.Button className="btnCTA" variant="secondary">
                Faça um orçamento
              </ReactBootstrap.Button>
            </div>
          </ReactBootstrap.Container>
        </div>
      </section>

      <section id="serviços">
        <ReactBootstrap.Container>

          <div className="projetosContainer">

            <h3>Serviços</h3>

            <ReactBootstrap.Row className="linhas">


              <ReactBootstrap.Col className="colunaTxt">
                <h2>Consultoria</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="btnSaibaMais">
                  <ReactBootstrap.Button
                    variant="secondary"
                  >
                    Mais detalhes
                  </ReactBootstrap.Button>
                </div>
              </ReactBootstrap.Col>


              <ReactBootstrap.Col className="colunaImgDir">
                <ReactBootstrap.Image
                  className="img"
                  src={consultoriaImg}
                  alt=" Foto 1"
                  title=" Foto 1"
                />
              </ReactBootstrap.Col>


            </ReactBootstrap.Row>

            <ReactBootstrap.Row className="linhas ">

              <ReactBootstrap.Col className="colunaImgEsq">
                <ReactBootstrap.Image
                  className="img"
                  src={projetosImg}
                  alt="Foto 2"
                  tite=" Foto 2"
                />
              </ReactBootstrap.Col>


              <ReactBootstrap.Col className="colunaTxt">
                <h2>Desenvolvimento de Projetos</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="btnSaibaMais">
                  <ReactBootstrap.Button
                    variant="secondary"
                  >
                    Mais detalhes
                  </ReactBootstrap.Button>
                </div>
              </ReactBootstrap.Col>

            </ReactBootstrap.Row>

            <ReactBootstrap.Row className="linhas">

              <ReactBootstrap.Col className="colunaTxt">
                <h2>Fiscalização de Obras</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="btnSaibaMais">
                  <ReactBootstrap.Button
                    variant="secondary"
                  >
                    Mais detalhes
                  </ReactBootstrap.Button>
                </div>
              </ReactBootstrap.Col>


              <ReactBootstrap.Col className="colunaImgDir">
                <ReactBootstrap.Image
                  className="img"
                  src={fiscalizacaoImg}
                  alt=" Foto 3 "
                  title=" Foto 3"
                />
              </ReactBootstrap.Col>

            </ReactBootstrap.Row>

          </div>
        </ReactBootstrap.Container>
      </section>

      <section id="sobre">

        <div className="sobreContainer">
          <ReactBootstrap.Container>
            <h3>Quem somos</h3>

            <ReactBootstrap.Row className="linhaSobre">


              <ReactBootstrap.Col className="colunaTxtSobre">
                <h2>Consultoria</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </ReactBootstrap.Col>


              <ReactBootstrap.Col className="colunaImgSobre">
                <ReactBootstrap.Image
                  className="imgSobre"
                  src={fotoEmpresa}
                  alt=" Foto Empresa"
                  title=" Foto Empresa"
                />
              </ReactBootstrap.Col>


            </ReactBootstrap.Row>


          </ReactBootstrap.Container>

        </div>

      </section>

      <section id="avaliacoes">

        <div className="avContainer">
          <ReactBootstrap.Container>
            <h3>Nossos Clientes</h3>
          </ReactBootstrap.Container>
            
        </div>

      </section>
    </>
  );
}

export default Home;
