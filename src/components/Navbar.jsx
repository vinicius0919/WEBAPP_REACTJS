import React, { useState } from "react";
import optionsData from "../datas/options.json";
import Sidebar from "./Sidebar";

import menubtn from "../assets/menu-aberto.png";
import "../styles/Navbar.css";

const tittleStl = {
  fontFamily: "Impact, Charcoal, sans-serif",
  fontSize: "2.5rem",
  wordSpacing: "2px",
  color: "#000000",
  fontWeight: "400",
  fontStyle: "italic",
  textAlign: "center"
};

const Navbar = () => {
  return (
    <div>
      <div>
      <button
        className="btn"
        type="button"
        style={{ position: "absolute"}}
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        <img src={menubtn} alt="menu-btn" width="15px" height="15px" />
      </button>
      </div>

      <h1 style={tittleStl}>SISTEMA</h1>

      <div
        className="offcanvas offcanvas-start"
        data-bs-backdrop="static"
        tabIndex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropLabel">
            TRADENOW
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="conteiner">
            <div className="row">
              {optionsData.options.map((option, index) => (
                <Sidebar options={option} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
