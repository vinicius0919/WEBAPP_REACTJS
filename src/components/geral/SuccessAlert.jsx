import React from "react";

export default function SuccessAlert(props){

    return(
    <div class="alert alert-success" role="alert">
        {props.text}
    </div>
    )
}