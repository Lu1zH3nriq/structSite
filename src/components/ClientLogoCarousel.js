import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import alvoradaLogo from "../img/alvoradaLogo.jpeg";
import brumLogo from "../img/broomLogo.jpeg";
import carraoLogo from "../img/carraologo.jpeg";
import metalLogo from "../img/metalogo.jpeg";
import pontualLogo from "../img/pontualLogo.jpeg";
import postoJambeiroLogo from "../img/postojambeiroLogo.jpeg";
import ReMLogo from "../img/ReMLogo.jpeg";

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
      img: alvoradaLogo,
      nome: "Alvorada Auto Peças"
    },
    {
      img: brumLogo,
      nome: "Brum Wood Móveis Planejados"
    },
    {
      img: carraoLogo,
      nome: "Carrão Auto Peças"
    },
    {
      img: metalLogo,
      nome: "MetalArt Soluções em Aço"
    },
    {
      img: pontualLogo,
      nome: "Pontual Peças e Acessórios"
    },
    {
      img: postoJambeiroLogo,
      nome: "Posto Jambeiro"
    },
    {
      img: ReMLogo,
      nome: "R&M Estruturas Metálicas"
    },
  ];

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
                  minHeight: "120px",
                  maxHeight: "120px",
                  objectFit: "contain"
                }} />
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }} >
              <p style={{
                color: '#354044',
              }} >{logo.nome}</p>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default ClientLogoCarousel;