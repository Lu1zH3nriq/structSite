import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import "../styles/App.css";

import Header from "../components/header";

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
            <h3>Projetos</h3>
            <ReactBootstrap.Row className="linhas">
              <ReactBootstrap.Col className="colunaTxt">
                <h2>Sites e Landing Pages</h2>
                <p>
                  Desenvolvi sites institucionais e landing pages persuasivas
                  com intuito de levar ao usuario uma experiência visual limpa,
                  simples que traga conforto em sua navegação. Desenvolvido com
                  JavaScript e elementos de HMTL e CSS, além de utilizar
                  bibliotecas para deixar tudo responsivo e se adaptar a
                  qualquer tamanho de tela. Tenho experiência em framworks
                  voltados para o frontend como React e Angular para estruturar
                  meus projetos e torná-los mais fluidos.
                </p>
                <div className="btnSaibaMais">
                  <ReactBootstrap.Button
                    variant="secondary"
                  >
                    Mais detalhes
                  </ReactBootstrap.Button>
                </div>
              </ReactBootstrap.Col>
              <ReactBootstrap.Col className="colunaImg">
                <ReactBootstrap.Image
                  src=""
                  alt=""
                  title=""
                />
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>

            <ReactBootstrap.Row className="linhas ">
              <ReactBootstrap.Col className="colunaImg">
                <ReactBootstrap.Image
                  src=""
                  alt=""
                  tite=""
                />l
              </ReactBootstrap.Col>
              <ReactBootstrap.Col className="colunaTxt">
                <h2>Aplicações Web</h2>
                <p>
                  Desenvolvi um aplicativo de gestão de bares e restaurantes com
                  controle de estoque e vendas, com uma estrutura de comandas. O
                  software foi desenvolvido com React usando arquitetura MVC,
                  junto com banco de dados relacional MySQL. E também um backend
                  escrito em NodeJS para integrar dois sistemas, um portal de
                  gestão de cotabilidade e um ERP. O projeto foi desenvolvido em
                  NodeJS usando Express e o banco de dados não relacional
                  MongoDB.
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
                <h2>Desenvolvimento Mobile</h2>
                <p>
                  Desenvolvi um aplicativo mobile para gestão de obras de uma
                  construtora e seus respectivos gastos com materiais e
                  ferramentas, com uma estrutura parecida com centro de custos
                  de cada obra. O software foi desenvolvido com React Native e
                  usando arquitetura MVC, junto com um banco de dados não
                  relacional MongoDB.
                </p>
                <div className="btnSaibaMais">
                  <ReactBootstrap.Button
                    variant="secondary"
                  >
                    Mais detalhes
                  </ReactBootstrap.Button>
                </div>
              </ReactBootstrap.Col>
              <ReactBootstrap.Col className="colunaImg">
                <ReactBootstrap.Image
                  src=" "
                  alt=" "
                  title=" "
                />
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>
          </div>
        </ReactBootstrap.Container>
      </section>

      <section id="sobre">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </>
  );
}

export default Home;
