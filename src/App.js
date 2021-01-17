import logo from "./logo.svg";
import "./App.css";
import useCounter from "./useCounter";

function App() {
  const { counter, incrementNumber } = useCounter(10);

  return (
    <div className="App">
      <header className="App-header">
        <h1 data-testid="app-title">Project COR</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => incrementNumber(5)}>{counter}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          id="parrafo"
        >
          Learn React
        </a>
        <p data-testid="manzanas">Manzana</p>
        <p data-testid="manzanas">Manzana</p>
        <p data-testid="manzanas">Manzana</p>
        <ul>
          <li>Nueva</li>
          <li>En proceso</li>
          <li>Finalizada</li>
          <li>Estancada</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
