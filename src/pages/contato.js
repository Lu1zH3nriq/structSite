import React from "react";
import { useState } from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

import emailjs from '@emailjs/browser';

import Header from "../components/header";
import Footer from "../components/footer";

import whatsapp from "../img/whatsapp3.webP";

function Contato() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [assunto, setAssunto] = useState('')
  const [message, setMessage] = useState('')


  function sendEmail(e) {
    e.preventDefault();

    if(name === '' || email === '' || assunto === '' || message === '' ){
      alert("É necessário preencher todos os campos!")
      return
    }

    const templateParams = {
      from_name: name,
      assunto: assunto,
      message: message,
      email: email
    }
    emailjs.send("service_xzvqg29", "template_7xwlmz8" , templateParams, "zH9YAS0KtviBfAapZ")
    .then( (response) => {
      alert("EMAIL ENVIADO COM SUCESSO !")
      setName('')
      setEmail('')
      setAssunto('')
      setMessage('')  
    }, (erro) => {
      alert("EMAIL NÃO ENVIADO. ERRO INTERNO DO SERVIDOR. CONTATE O DESENVOLVEDOR !")
    })
  }

  return (
    <>
      <Header></Header>

      <section id="contato">
        <div className="formContato">
          <ReactBootstrap.Container>
            <div className="containerForm">
              <h3>Envie um e-mail com sua mensagem </h3>
              <ReactBootstrap.Form onSubmit={sendEmail}>
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
                    onChange={(e) => setName(e.target.value)}
                    value={name}
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
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                    onChange={(e) => setAssunto(e.currentTarget.value)}
                    value={assunto}
                  />
                </ReactBootstrap.Form.Group>

                <ReactBootstrap.Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <ReactBootstrap.Form.Label>
                    Escreva sua mensagem:
                  </ReactBootstrap.Form.Label>
                  <ReactBootstrap.Form.Control as="textarea" rows={3}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                </ReactBootstrap.Form.Group>

                <div className="btnEnviar">
                  <input className="button" type="submit" value="Enviar" />
                </div>
              </ReactBootstrap.Form>


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

export default Contato;
