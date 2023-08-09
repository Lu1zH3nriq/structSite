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
              <ReactBootstrap.Button className="btnCTA" 
              variant="secondary">Faça um orçamento</ReactBootstrap.Button>
            </div>
          </ReactBootstrap.Container>
        </div>
      </section>

      <section id="serviços">
        <br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </section>

      <section id="sobre">
        <br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </section>
    </>
  );
}

export default Home;
