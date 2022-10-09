import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleResponce(response) {
    setResults(response.data[0]);
  }

  function search(keyword) {
    let urlApi = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(urlApi).then(handleResponce);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(event.target[0].value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input type="search" defaultValue={props.defaultKeyword} />
          </form>
          <div className="hint">
            <small> suggested words: forest, yoga, wine, cheese...</small>
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    setLoaded(true);
    search(props.defaultKeyword);
    return "Loading...";
  }
}
