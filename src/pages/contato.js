import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

import Header from "../components/header";
import Footer from "../components/footer";

import whatsapp from "../img/whatsapp2.png";

function contato() {
  return (
    <>
      <Header></Header>
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