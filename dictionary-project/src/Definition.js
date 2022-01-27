import React from "react";
import Meaning from "./Meaning.js";

export default function Definition(props) {
    if (props.result) {
        return (
        <div className="definition card">
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