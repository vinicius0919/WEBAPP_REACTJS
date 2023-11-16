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
            <div id="btnBox" className="col-auto align-self-center">
                <Link to="adicionar" id="addButton" 
                    onMouseEnter={mouseUp}
                    onMouseLeave={mouseLeave}
                >
                    <img style={styleImg} src={imgAddButton} alt={props.alt} />
                </Link>
                {hovered &&
                    <h2 style={{
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: "19px",
                        color: " #2B81FF",
                        fontWeight: "700"
                    }}>Adicionar uma nova empresa</h2>}
            </div>
    )
}