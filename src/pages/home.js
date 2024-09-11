import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import "../styles/App.css";

import ScrollReveal from "scrollreveal";
import Header from "../components/header";
import Footer from "../components/footer";
import ClientLogoCarousel from "../components/ClientLogoCarousel";

import consultoriaImg from "../img/consultoria.webP";
import projetosImg from "../img/projetos.webP";
import fiscalizacaoImg from "../img/fiscalizacao.webP";
import fotoEmpresa from "../img/fotoEmpresa.webP";
import whatsapp from "../img/whatsapp3.webP";

function Home() {
  const message = "Olá, tudo bem? Gostaria de saber mais sobre os serviços da Struct Engenharia. Poderia me ajudar?";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/553175816475?text=${encodedMessage}`;


  useEffect(() => {
    const animacaoInicio = ScrollReveal({
      origin: "bottom",
      distance: "30px",
      duration: 1000,
      delay: 100,
      opacity: 0,
      easing: "ease",
      reset: "true",
    });

    animacaoInicio.reveal(".textos");
  }, []);

  useEffect(() => {
    const animacaoServicos = ScrollReveal({
      origin: "bottom",
      distance: "30px",
      duration: 1000,
      delay: 100,
      opacity: 0,
      easing: "ease",
      reset: "false",
    });

    animacaoServicos.reveal(".linhas");
  }, []);

  return (
    <>
      <Header />

      <section id="home">
        <div className="fundoMainFrame">
          <ReactBootstrap.Container>
            <div className="textos">
              <p>Sua busca por serviços de engenharia civil termina aqui!</p>
              <h1>S T R U C T</h1>
              <h3>ENGENHARIA</h3>
              <h6>PROJETOS E ACESSORIA TÉCNICA</h6>
              <ReactBootstrap.Button href="/Contato" className="btnCTA" variant="secondary">
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
                  Oferecemos assessoria técnica em engenharia civil para atender as necessidades diversas de nossos clientes, buscando sempre a melhor alternativa seja qual for a questão. Aliamos sempre segurança, economia e praticidade, afinal, o mercado da construção civil atual exige cada vez mais para o sucesso de sua obra
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
                  Desenvolvemos Projeto Arquitetônico, Estrutural, Elétrico de baixa tensão, Hidrossanitário, Prevenção e Combate a Incêndio e Pânico e mais! Seja qual for a sua necessidade, entre em contato para saber como podemos te atender.
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
                  Oferecemos o serviço de execução de obras, desde a elaboração do planejamento até a entrega final, sempre fiscalizando seu empreendimento para garantir o correto seguimento dos projetos, a aplicação das normas pertinentes e a execução segura dentro do menor prazo.
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
                <h2>Struct Engenharia</h2>
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
                <h2>Missão</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <h2>Visão</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <h2>Valores</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </ReactBootstrap.Col>

              <ReactBootstrap.Col className="colunaImgSobre">
                <ReactBootstrap.Image
                  className="imgSobre"
                  src={fotoEmpresa}
                  alt="Foto Empresa"
                  title="Foto Empresa"
                />
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>
          </ReactBootstrap.Container>
        </div>
      </section>

      <section id="clientes">
        <div className="avContainer">
          <ReactBootstrap.Container>
            <h3>Nossos clientes </h3>
            <div>
              <ClientLogoCarousel />
            </div>
          </ReactBootstrap.Container>
        </div>
      </section>

      <a
        href={whatsappLink}
        target="blank"
      >
        <img
          className="fixedButton"
          src={whatsapp}
          alt="Whatsapp"
          title="Whatsapp"
        />
      </a>

      <Footer />
    </>
  );
}

export default Home;
