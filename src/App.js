import logo from "./logo.png";
import Sign from "./Sign";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <Sign />
        </footer>
      </div>
    </div>
  );
}
