import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import "../styles/App.css";

import Header from "../components/header";

import consultoriaImg from "../img/consultoria.jpg";
import projetosImg from "../img/projetos.jpg";
import fiscalizacaoImg from "../img/fiscalizacao.jpg";
import fotoEmpresa from "../img/fotoEmpresa.jpg";

import fotoDepoimento1 from "../img/FotoDepoimento1.jpg";
import fotoDepoimento2 from "../img/FotoDepoimento3.jpg";
import fotoDepoimento3 from "../img/FotoDepoimento2.jpg";
import whatsapp from "../img/whatsapp2.png";

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
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="btnSaibaMais">
                  <ReactBootstrap.Button variant="secondary">
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="btnSaibaMais">
                  <ReactBootstrap.Button variant="secondary">
                    Mais detalhes
                  </ReactBootstrap.Button>
                </div>
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>

            <ReactBootstrap.Row className="linhas">
              <ReactBootstrap.Col className="colunaTxt">
                <h2>Fiscalização de Obras</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="btnSaibaMais">
                  <ReactBootstrap.Button variant="secondary">
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
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
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
            <h3>Veja o que alguns de nossos clientes dizem </h3>

            <div className="depoimentos">
              <ReactBootstrap.Row className="linhaDepoimentos">
                <ReactBootstrap.Col className="colunaDepoimentos">
                  <div className="depoimento">
                    <ReactBootstrap.Image
                      src={fotoDepoimento1}
                      alt="Foto Depoimento 1"
                      title="Foto Depoimento 1"
                    />
                    <h2>João</h2>
                    <h5>CEO na empresa ASKDKAS</h5>
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
                  <div className="depoimento">
                    <ReactBootstrap.Image
                      src={fotoDepoimento2}
                      alt="Foto Depoimento 2"
                      title="Foto Depoimento 2"
                    />
                    <h2>Maria</h2>
                    <h5>Diretora Executiva na empresa askda</h5>
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
                  <div className="depoimento">
                    <ReactBootstrap.Image
                      src={fotoDepoimento3}
                      alt="Foto Depoimento 3"
                      title="Foto Depoimento 3"
                    />
                    <h2>José</h2>
                    <h5>Diretor de projetos na empresa askdk</h5>
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

      <div className="btnWhatsapp">
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


      <footer>
        
      </footer>
    </>
  );
}

export default Home;
