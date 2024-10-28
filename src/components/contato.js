import React, { useEffect, useState } from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

import emailjs from '@emailjs/browser';


function ContatoModal({ show, handleClose, _message, _assunto }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [assunto, setAssunto] = useState(_assunto ? _assunto : '');
  const [message, setMessage] = useState(_message ? _message : '');
  const [preferContact, setPreferContact] = useState({
    call: false,
    whatsapp: false
  });
  const [confirmation, setConfirmation] = useState({
    state: false,
    message: '',
    type: ''
  });

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || phone === '' || assunto === '' || message === '') {
      setConfirmation({
        state: true,
        message: 'Para enviar o email, é necessário preencher todas as informações do formulário.',
        type: 'error'
      });
      return;
    }

    const templateParams = {
      from_name: name,
      assunto: assunto,
      mensagem: message,
      email: email,
      phone: phone,
      prefer_contact: `Ligação: ${preferContact.call === true ? 'SIM' : 'NÃO'}, Whatsapp: ${preferContact.whatsapp === true ? 'SIM' : 'NÃO'}`
    };

    emailjs.send("service_ozgwcfc", "template_zp6r2g4", templateParams, 'AWaJPfAuf6zANoZN7')
      .then((response) => {
        setConfirmation({
          state: true,
          message: 'Seu email foi enviado com sucesso! Entraremos em contato em breve com mais informações.',
          type: 'success'
        });
        setName('');
        setEmail('');
        setPhone('');
        setAssunto('');
        setMessage('');
        setPreferContact({ call: false, whatsapp: false });
      }, (erro) => {
        console.log(erro);
        setConfirmation({
          state: true,
          message: 'Ocorreu um erro ao enviar seu email. Tente novamente mais tarde.',
          type: 'error'
        });
      });
  }

  useEffect(() => {
    if (_assunto && _message) {
      setAssunto(_assunto);
      setMessage(_message);
    }
  }, [show]);

  return (
    <>
      <ReactBootstrap.Modal show={show} onHide={handleClose} centered size="xl">
        <ReactBootstrap.Modal.Header closeButton>
          <ReactBootstrap.Modal.Title>{_assunto ? `Detalhs sobre ${_assunto}` : 'Entrar em contato'}</ReactBootstrap.Modal.Title>
        </ReactBootstrap.Modal.Header>
        <ReactBootstrap.Modal.Body>
          <ReactBootstrap.Container>
            <div className="containerForm">
              <h3 style={{
                textAlign: "center",
                marginBottom: "40px",
                fontSize: "2rem",
                fontWeight: "semibold"
              }}>Envie um e-mail com sua mensagem</h3>
              <ReactBootstrap.Form onSubmit={sendEmail}>
                <ReactBootstrap.Row>
                  <ReactBootstrap.Col xs={12} md={4}>
                    <ReactBootstrap.Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <ReactBootstrap.Form.Label>Digite seu nome:</ReactBootstrap.Form.Label>
                      <ReactBootstrap.Form.Control
                        type="text"
                        placeholder="Seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                    </ReactBootstrap.Form.Group>
                  </ReactBootstrap.Col>

                  <ReactBootstrap.Col xs={12} md={4}>
                    <ReactBootstrap.Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <ReactBootstrap.Form.Label>Digite seu telefone:</ReactBootstrap.Form.Label>
                      <ReactBootstrap.Form.Control
                        type="text"
                        placeholder="Seu telefone"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                      />
                    </ReactBootstrap.Form.Group>
                  </ReactBootstrap.Col>

                  <ReactBootstrap.Col xs={12} md={4}>
                    <ReactBootstrap.Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <ReactBootstrap.Form.Label>Preferir contato:</ReactBootstrap.Form.Label>
                      <div>
                        <ReactBootstrap.Form.Check
                          inline
                          label="Ligação"
                          type="checkbox"
                          checked={preferContact.call}
                          onChange={(e) => setPreferContact({ ...preferContact, call: e.target.checked })}
                        />
                        <ReactBootstrap.Form.Check
                          inline
                          label="Whatsapp"
                          type="checkbox"
                          checked={preferContact.whatsapp}
                          onChange={(e) => setPreferContact({ ...preferContact, whatsapp: e.target.checked })}
                        />
                      </div>
                    </ReactBootstrap.Form.Group>
                  </ReactBootstrap.Col>
                </ReactBootstrap.Row>

                <ReactBootstrap.Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <ReactBootstrap.Form.Label>Digite seu email:</ReactBootstrap.Form.Label>
                  <ReactBootstrap.Form.Control
                    type="email"
                    placeholder="email@exemplo.com.br"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </ReactBootstrap.Form.Group>

                <ReactBootstrap.Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <ReactBootstrap.Form.Label>Informe o assunto:</ReactBootstrap.Form.Label>
                  <ReactBootstrap.Form.Control
                    type="text"
                    placeholder="Qual o assunto"
                    onChange={(e) => setAssunto(e.currentTarget.value)}
                    value={assunto}
                  />
                </ReactBootstrap.Form.Group>

                <ReactBootstrap.Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <ReactBootstrap.Form.Label>Escreva sua mensagem:</ReactBootstrap.Form.Label>
                  <ReactBootstrap.Form.Control as="textarea" rows={3}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                </ReactBootstrap.Form.Group>


                <div className="btnEnviar">
                  <ReactBootstrap.Button variant="primary" type="submit">
                    Enviar
                  </ReactBootstrap.Button>
                </div>
              </ReactBootstrap.Form>
            </div>
          </ReactBootstrap.Container>
        </ReactBootstrap.Modal.Body>
      </ReactBootstrap.Modal>

      <ReactBootstrap.Modal
        show={confirmation.state}
        onHide={() => false}
        backdrop="static"
        keyboard={false}
        centered
      >
        <ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Title>{confirmation.type === 'success' ? "Sucesso!" : "Atenção!"}</ReactBootstrap.Modal.Title>
        </ReactBootstrap.Modal.Header>
        <ReactBootstrap.Modal.Body>{confirmation.message}</ReactBootstrap.Modal.Body>
        <ReactBootstrap.Modal.Footer>
          <ReactBootstrap.Button variant="primary" onClick={() => {
            setConfirmation({ state: false, message: '', type: '' });
          }}>Confirmar</ReactBootstrap.Button>
        </ReactBootstrap.Modal.Footer>
      </ReactBootstrap.Modal>

    </>
  );
}

export default ContatoModal;