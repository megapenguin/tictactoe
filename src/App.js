import "./App.css";
import AppContext from "./context/AppContext";
import Table from "./components/table/Table";
import MoveList from "./components/movelist/MovelList";
import { useContext } from "react";
import Checking from "./components/checking/Checking";

function App() {
  const { state } = useContext(AppContext);
  return (
    <div>
      <div class="topnav"></div>
      <div
        className="App"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        <div className="column">
          <MoveList />
        </div>
        <div className="column">
          <Table />
        </div>
        <div className="column">
          <h1>SCORES</h1>
          <h1 style={{ marginTop: "4rem" }}>P1(O)</h1>
          <h2>{Checking().playerOneScore} pts</h2>
          <h1 style={{ marginTop: "7rem" }}>P2(X)</h1>
          <h2>{Checking().playerTwoScore} pts</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
