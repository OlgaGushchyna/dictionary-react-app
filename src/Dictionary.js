import React from "react";

export default function Dictionary() {
  function handleSubmit(event) {
    event.preventDefault();
    alert(event.target[0].value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" />
      </form>
    </div>
  );
}
