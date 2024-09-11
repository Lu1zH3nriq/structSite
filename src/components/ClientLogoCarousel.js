import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import clienteLogo1 from "../img/clienteLogo1.webP";
import clienteLogo2 from "../img/clienteLogo2.webP";
import clienteLogo3 from "../img/clienteLogo3.webP";
import clienteLogo4 from "../img/clienteLogo4.webP";
import clienteLogo5 from "../img/clienteLogo5.webP";
import clienteLogo6 from "../img/clienteLogo6.webP";
import clienteLogo7 from "../img/clienteLogo7.webP";
import clienteLogo8 from "../img/clienteLogo8.webP";

const ClientLogoCarousel = () => {
  const settings = {
    dots: true, // Exibe os indicadores de navegação (opcional)
    infinite: true, // Faz com que o carousel seja infinito
    speed: 500, // Velocidade de transição
    slidesToShow: 5, // Número de logos a serem exibidos ao mesmo tempo
    slidesToScroll: 1, // Quantidade de logos que são roladas por vez
    autoplay: true, // Ativa a rotação automática
    autoplaySpeed: 2000, // Tempo em milissegundos para rotação automática
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const logos = [
    {
      img: clienteLogo1,
      nome: "Cliente 1"
    },
    {
      img: clienteLogo2,
      nome: "Cliente 2"
    },
    {
      img: clienteLogo3,
      nome: "Cliente 3"
    },
    {
      img: clienteLogo4,
      nome: "Cliente 4"
    },
    {
      img: clienteLogo5,
      nome: "Cliente 5"
    },
    {
      img: clienteLogo6,
      nome: "Cliente 6"
    },
    {
      img: clienteLogo7,
      nome: "Cliente 7"
    },
    {
      img: clienteLogo8,
      nome: "Cliente 8"
    }
  ]; // Substitua com os caminhos das logos dos seus clientes

  return (
    <div style={{ padding: '5% 0% 10% 0%' }}>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <>
            <div key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <img src={logo.img} alt={`Logo ${index}`}
                style={{
                  width: "80%",
                  height: "80%",
                  maxWidth: "100px",
                  maxHeight: "100px",
                  objectFit: "contain"
                }} />
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }} >
              <p>{logo.nome}</p>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default ClientLogoCarousel;