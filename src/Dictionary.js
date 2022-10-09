import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponce(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handlePexelResponce(response) {
    setPhotos(response.data.photos);
  }
  function search(keyword) {
    let urlApi = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(urlApi).then(handleResponce);

    let pexelsApiKey =
      "563492ad6f91700001000001980c1bb4621d413bb1b56566174bf002";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelResponce);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    setLoaded(true);
    search(props.defaultKeyword);
    return "Loading...";
  }
}
