import React, { useState } from "react";

export default function Definition(props) {
    console.log(props.result);
    return (
        <div className="definition row align-items-start">
            <h1 id="word">{props.result.word}</h1>
            <p id="description">a book or electronic resource that lists the words of a language (typically in alphabetical order) and gives their meaning, or gives the equivalent words in a different language, often also providing information about pronunciation, origin, and usage.</p>
            <p id="example">"I'll look up 'love' in the dictionary"</p>
        </div>
    )
}