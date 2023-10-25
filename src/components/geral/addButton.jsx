import React, { useState } from "react";
import imgAddButton from "../../assets/mais.png"
import { Link } from "react-router-dom"

export default function AddButton(props) {
    const [hovered, setHovered] = useState(false)
    const styleImg = {
        width: hovered ? "55px" : "50px"
    }
    function mouseUp() {
        setHovered(true)
    }
    function mouseLeave() {
        setHovered(false)
    }

    return (
        <div className="row justify-content-center" style={{ marginBottom: "40px", height: "60px" }}>
            <div className="col-auto align-self-center">
                <Link to="adicionar" style={{
                    boxShadow: "0px 0px 20px -2px black",
                    borderRadius: "30px"
                }}
                    onMouseEnter={mouseUp}
                    onMouseLeave={mouseLeave}
                >
                    <img style={styleImg} src={imgAddButton} alt={props.alt} />
                </Link>
                {hovered &&
                    <p style={{
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: "19px",
                        letterSpacing: "-0.8px",
                        wordSpacing: " 1.6px",
                        color: " #2B81FF",
                        fontWeight: "700",
                        textDecoration: "none",
                        fontStyle: "normal",
                        fontVariant: "normal",
                        textTransform: "none"
                    }}>Adicionar uma nova empresa</p>}
            </div>
        </div>
    )
}