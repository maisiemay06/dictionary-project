import React, { useState } from "react";
import Meaning from "./Meaning.js";

export default function Definition(props) {
    console.log(props.result);
    if (props.result) {
        return (
        <div className="definition row align-items-start">
            <h1>{props.result.word}</h1>
            {props.result.meanings.map(function (meaning, index) {
                return (
                    <span key={index}>
                        <Meaning meaning={meaning}/>
                        
                    </span>
                )
            })}
        </div>
        )
} else {
    return null
}
}