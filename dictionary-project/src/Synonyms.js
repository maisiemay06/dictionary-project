import React from "react";

export default function Synonyms(props) {
    if (props.result) {
        return (
            <div>
                <h2>synonyms</h2>
                <div className="synonyms">
                    {props.result.meanings[0].definitions[0].synonyms.map(function (synonyms, index) {
                        if (index < 12) {
                        return (
                            <div key={index}>
                                <h5>{synonyms}</h5>
                            </div>
                        )}
                    })}
                </div>
            </div>
        )
    } else {
        return null
        
    }
}

