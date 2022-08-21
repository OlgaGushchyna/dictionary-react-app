import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [results, setResults] = useState(null);
  function handleResponce(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let keyword = event.target[0].value;
    let urlApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(urlApi).then(handleResponce);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" />
      </form>
      <Results results={results} />
    </div>
  );
}
