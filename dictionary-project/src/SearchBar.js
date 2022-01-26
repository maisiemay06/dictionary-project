import React, { useState } from "react";

export default function SearchBar() {
    let [keyword, setKeyword] = useState("");
    function search(event) {
        event.preventDefault();
        alert("searching")
    }
    
    return (
        <div className="search row align-items-end">
            <h2>search</h2>
            <form onSubmit={search}>
                <input type="text" autoFocus={true}></input>
            </form>
        </div>
    )
}