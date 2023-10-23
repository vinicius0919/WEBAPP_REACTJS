import React, { useContext } from "react";
import AuthContext from "../contexts/auth";
import { Link, useNavigate } from "react-router-dom";

//import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import './Carousel.css';

const Components = {
  Header: () => {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  },

  Sidebar: () => {
    return (
      <div>
        <h2>Sidebar</h2>
      </div>
    );
  },

  MainContent: () => {
    return (
      <div>
        <h2>Main Content</h2>
      </div>
    );
  },

  Carousel: () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    return (
      <Slider {...settings}>
        {[...Array(10).keys()].map((index) => (
          <div key={index}>
            <div className="card">
              <h3>Card {index + 1}</h3>
            </div>
          </div>
        ))}
      </Slider>
    );
  },
};


const Teste = () => {
  return (
    <div>
      <Components.Carousel />
      <Components.MainContent />
      <h1>PAINEL PRINCIPAL</h1>
    </div>
  );
};

export default Teste;
