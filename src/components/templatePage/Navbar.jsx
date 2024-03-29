import React from "react";
import optionsData from "../../datas/options.json";
import Sidebar from "./Sidebar";

import menubtn from "../../assets/menu-aberto.png";

const tittleStl = {
  fontFamily: "Impact, Charcoal, sans-serif",
  fontSize: "2.5rem",
  wordSpacing: "2px",
  color: "#000000",
  fontWeight: "400",
  fontStyle: "italic",
  textAlign: "center"
};

const Navbar = (props) => {
  return (
    <div>
      <button
        className="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <img id="menuIcon" src={menubtn} alt="menu-btn" />
      </button>

      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {optionsData.options.map((option, index) => (
            <Sidebar options={option} key={index} index={index} />
          ))}
        </div>
      </div>

      {false && (<div
        className="offcanvas offcanvas-start"
        data-bs-backdrop="static"
        tabIndex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropLabel">
            Olá, {props.name}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          {optionsData.options.map((option, index) => (
            <Sidebar options={option} key={index} index={index} />
          ))}
        </div>
      </div>)}
    </div>
  );
};

export default Navbar;
