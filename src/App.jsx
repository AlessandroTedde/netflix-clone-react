import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";
import "./App.css";
import TopBar from "./Components/TopBar";
import ActionBar from "./Components/ActionBar";

function App() {
  return (
    <div className="App">
      <TopBar source={logo} />
      <ActionBar />
    </div>
  );
}

export default App;
