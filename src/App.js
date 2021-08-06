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
          <h1>Scores</h1>
          <h1 style={{ marginTop: "3rem" }}>P1(O)</h1>
          <h1>{Checking().playerOneScore} Pts</h1>
          <h1 style={{ marginTop: "7rem" }}>P2(X)</h1>
          <h1>{Checking().playerTwoScore} Pts</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
