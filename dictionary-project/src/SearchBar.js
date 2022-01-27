import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition";
import Synonyms from "./Synonyms";

export default function SearchBar(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [result, setResult] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResult(response.data[0]);
    }

    function search() {
        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiURL).then(handleResponse);
    }

    function handleSearchSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    
   function load() {
       setLoaded(true);
       search();
    }

    if (loaded) {
        return (
            <div className="main-body">
                <div className="card search">
                    
                    <form onSubmit={handleSearchSubmit}>
                        <input type="text" autoFocus={true} onChange={handleKeywordChange} placeholder="search..."></input>
                    </form>
                </div>
                <Definition result={result} />
                <Synonyms result={result} />
            </div>
        )
    } else {
        load();
        return "loading...";
    }
}