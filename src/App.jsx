import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import Container from "./components/Container.jsx";

function App() {
  const imgArr = [logo, logo, logo, logo, logo, logo];
  return (
    <div className="App">
      <Header img={logo} />
      <Container imgArr={imgArr} />
    </div>
  );
}

export default App;
