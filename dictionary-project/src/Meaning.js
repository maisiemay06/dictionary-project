import React from "react";

export default function Meaning(props) {
    return (
        <span>
            <h5>{props.meaning.partOfSpeech}</h5>
            <p>{props.meaning.definitions[0].definition}</p>
            <i>"{props.meaning.definitions[0].example}"</i>
        </span>
    )
}