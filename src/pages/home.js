import React, { useEffect, useState } from "react";
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

import ContatoModal from "../components/contato";

function Home() {
  const message = "Olá, tudo bem? Gostaria de saber mais sobre os serviços da Struct Engenharia. Poderia me ajudar?";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/553175816475?text=${encodedMessage}`;

  const [viewModalContato, setViewModalContato] = useState({
    visible: false,
    message: '',
    assunto: ''
  });


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

  function handleSelectService(service) {

    const messageService = message + ` Gostaria de informações sobre o serviço de ${service}`;
    const assunt = service;

    setViewModalContato({
      visible: true,
      message: messageService,
      assunto: assunt
    });

  }

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
              <ReactBootstrap.Button className="btnCTA" variant="secondary" onClick={() => {
                setViewModalContato({
                  visible: true,
                  message: '',
                  assunto: ''
                });
              }}>
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
                  <ReactBootstrap.Button variant="secondary" onClick={() => {
                    handleSelectService('Consultoria');
                  }}>
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
                  <ReactBootstrap.Button variant="secondary" onClick={() => {
                    handleSelectService('Projetos');
                  }}>
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
                  <ReactBootstrap.Button variant="secondary" onClick={() => {
                    handleSelectService('Fiscalização de Obras');
                  }} >
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
            <h3 style={{ textAlign: "center" }}>Quem somos</h3>
            <ReactBootstrap.Row style={{
              paddingBottom: "10%",
              width: "80%",
              margin: "0 auto",
              textAlign: "center"
            }}>
              <ReactBootstrap.Col className="colunaTxtSobre">
                <h2>Struct Engenharia</h2>
                <p>
                  Atuamos em Belo Horizonte e região, desenvolvendo projetos de engenharia, execução e acompanhamento de obras e soluções técnicas para diversos serviços. Buscamos sempre oferecer transparência, segurança e o melhor custo para nossos clientes.
                  Nosso diferencial está na atenção especial que oferecemos a cada um de nossos projetos, como se fosse nosso próprio empreendimento.
                </p>
                <h2>Missão</h2>
                <p>
                  "Proporcionar soluções de engenharia civil inovadoras e sustentáveis, entregando projetos de alta qualidade que atendam às necessidades dos nossos clientes e transformem a visão da população sobre obras, mostrando seu impacto positivo na sociedade."
                </p>
                <h2>Visão</h2>
                <p>
                  "Ser reconhecida como uma referência no setor de engenharia civil, destacando-se pela excelência em projetos e execução de obras que não apenas atendem às expectativas, mas também transformam a percepção da comunidade sobre a importância e os benefícios das construções para o desenvolvimento urbano."
                </p>
                <h2>Valores</h2>
                <ul style={{ listStylePosition: "inside" }}>
                  <li>Qualidade: Compromisso com a excelência em todos os aspectos dos nossos projetos e obras.</li>
                  <li>Inovação: Busca constante por novas tecnologias e soluções criativas que otimizem nossos processos.</li>
                  <li>Sustentabilidade: Responsabilidade com o meio ambiente, promovendo práticas que preservem os recursos naturais.</li>
                  <li>Ética: Transparência e integridade em todas as nossas relações com clientes, parceiros e colaboradores.</li>
                  <li>Colaboração: Valorização do trabalho em equipe e do diálogo aberto, fomentando um ambiente colaborativo.</li>
                  <li>Segurança: Prioridade à segurança de nossos colaboradores e à qualidade das obras executadas.</li>
                  <li>Transformação: Compromisso em mudar a percepção pública sobre obras, destacando seu valor e contribuição para a qualidade de vida.</li>
                </ul>
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



      <ContatoModal
        show={viewModalContato.visible}
        handleClose={() => setViewModalContato({ ...viewModalContato, visible: false })}
        _message={viewModalContato.message}
        _assunto={viewModalContato.assunto}
      />
    </>
  );
}

export default Home;
