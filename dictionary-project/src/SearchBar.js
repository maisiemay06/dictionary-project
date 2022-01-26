import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition";
import Synonyms from "./Synonyms";

export default function SearchBar() {
    let [keyword, setKeyword] = useState("");
    let [result, setResult] = useState(null);

    function handleResponse(response) {
        setResult(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiURL).then(handleResponse);
    }

    function handleSearchSubmit(event) {
        setKeyword(event.target.value);
    }
    
    return (
        <div className="main-body">
            <div className="left">
                <div className="search">
                    <h2>search</h2>
                    <form onSubmit={search}>
                        <input type="text" autoFocus={true} onChange={handleSearchSubmit}></input>
                    </form>
                </div>
                <Definition result={result} />
            </div>
           <div className="right">
               
                <Synonyms result={result} />
               
           </div>
        </div>
    )
}