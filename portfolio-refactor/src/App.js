import "./App.css";
import Metamask from "./components/Metamask";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <p>Welcome to PortFolio</p>
      <div>
        <h5>This is your</h5>
        <h1>PortFolio</h1>
        <h5>
          Create and buy a Folio token represented by any combination of crypto
          assets
        </h5>
      </div>
      <div>
        <Metamask />
      </div>
      <div>
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
