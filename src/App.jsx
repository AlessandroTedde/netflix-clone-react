import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";
import "./App.css";
import TopBar from "./Components/TopBar";
import ActionBar from "./Components/ActionBar";
import ImgRow from "./Components/ImgRow";

function App() {
  return (
    <div className="App bg-dark">
      <TopBar source={logo} />
      <ActionBar />
      <ImgRow title="Trending Now" queryParam="harry%20potter" />
      <ImgRow title="Watch It Again" queryParam="batman" />
      <ImgRow title="New Releases" queryParam="aquaman" />
    </div>
  );
}

export default App;
