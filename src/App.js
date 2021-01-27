import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Soy un título</h1>
      <h2>Subtitle</h2>
      <p>Project COR</p>
      <ul>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
      <div data-testid="my-element">Soy un testid</div>
    </div>
  );
}

export default App;
