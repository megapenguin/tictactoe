import React, { useState, useContext } from "react";
import Checking from "../checking/Checking";
import AppContext from "../../context/AppContext";

const boxValue = [
  {
    id: 1,
    value: "",
  },
  {
    id: 2,
    value: "",
  },
  {
    id: 3,
    value: "",
  },
  {
    id: 4,
    value: "",
  },
  {
    id: 5,
    value: "",
  },
  {
    id: 6,
    value: "",
  },
  {
    id: 7,
    value: "",
  },
  {
    id: 8,
    value: "",
  },
  {
    id: 9,
    value: "",
  },
];
const boxList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const Table = () => {
  const { addMove, refreshGame } = useContext(AppContext);
  const [value, setValue] = useState(boxValue);
  const [boxId, setBoxId] = useState(boxList);
  const [turn, setTurn] = useState(false);
  const [count, setCount] = useState(1);
  const [match, setMatch] = useState(1);
  const [play, setPlay] = useState(false);

  const clickedBox = (id) => {
    let newList = boxId.filter((box) => box != id);
    setBoxId(newList);
  };
  const rematch = () => {
    Checking().rematch();
    playAgain();
  };
  const onClick = (id) => {
    let move = [];
    let updatedValue;

    try {
      if (Checking().playerOneScore !== 2 && Checking().playerTwoScore !== 2) {
        console.log(
          Checking().playerOneScore != 2 || Checking().playerTwoScore != 2
        );
        boxId.map((box) => {
          if (box == id) {
            if (Checking().checkWinner(value) !== true) {
              setCount(count + 1);
              if (count <= 10) {
                if (turn === false) {
                  move = {
                    player: 1,
                    value: "O",
                    boxId: id,
                    moveNumber: count,
                  };
                  addMove(move);
                } else {
                  move = {
                    player: 2,
                    value: "X",
                    boxId: id,
                    moveNumber: count,
                  };
                  addMove(move);
                }
              } else {
                setPlay(true);
                alert("Please restart the game");
              }
              updatedValue = value.map((val) =>
                val.id == id ? { ...val, value: turn ? "X" : "O" } : val
              );
              setValue(updatedValue);
              setTurn(!turn);
              clickedBox(id);
            } else {
              Checking().checkWinner(boxValue);
            }
          } else {
            return;
          }
        });
      }
    } catch (error) {
      console.log("error", error);
    }
    if (boxId.length === 0) {
      Checking().status = true;
      alert("The Match is a draw");
    }
    console.log("Win?", Checking().checkWinner(updatedValue));
  };

  const playAgain = () => {
    setValue(boxValue);
    setPlay(false);
    refreshGame();
    setCount(1);
    setBoxId(boxList);
    setTurn(false);
    setMatch(match + 1);
    Checking().checkWinner(boxValue);
  };
  return (
    <div>
      <h1>TIC TAC TOE</h1>
      <h4>Match #{match}</h4>
      <div className="container">
        <table>
          <tr>
            <td id="1" onClick={(e) => onClick(e.target.id)}>
              <p>{value[0].value}</p>
            </td>
            <td id="2" className="vert" onClick={(e) => onClick(e.target.id)}>
              <p>{value[1].value}</p>
            </td>
            <td id="3" onClick={(e) => onClick(e.target.id)}>
              <p>{value[2].value}</p>
            </td>
          </tr>
          <tr>
            <td id="4" className="hori" onClick={(e) => onClick(e.target.id)}>
              <p>{value[3].value}</p>
            </td>
            <td
              id="5"
              className="vert hori"
              onClick={(e) => onClick(e.target.id)}
            >
              <p>{value[4].value}</p>
            </td>
            <td id="6" className="hori" onClick={(e) => onClick(e.target.id)}>
              <p>{value[5].value}</p>
            </td>
          </tr>
          <tr>
            <td id="7" onClick={(e) => onClick(e.target.id)}>
              <p>{value[6].value}</p>
            </td>
            <td id="8" className="vert" onClick={(e) => onClick(e.target.id)}>
              <p>{value[7].value}</p>
            </td>
            <td id="9" onClick={(e) => onClick(e.target.id)}>
              <p>{value[8].value}</p>
            </td>
          </tr>
        </table>
      </div>
      <div>
        {Checking().status === true &&
        Checking().playerOneScore !== 2 &&
        Checking().playerTwoScore !== 2 ? (
          <button
            className="btn btn-block"
            style={{ background: "green" }}
            onClick={() => playAgain()}
          >
            Play Again
          </button>
        ) : (
          ""
        )}
        {console.log(
          "Rematch?",
          Checking().playerOneScore === 2 || Checking().playerTwoScore === 2
        )}
        {Checking().playerOneScore == 2 ? (
          <h1 style={{ color: "blue" }}>Player One Wins!</h1>
        ) : (
          ""
        )}
        {Checking().playerTwoScore == 2 ? (
          <h1 style={{ color: "blue" }}>Player Two Wins!</h1>
        ) : (
          ""
        )}
        {Checking().playerOneScore === 2 || Checking().playerTwoScore === 3 ? (
          <button
            className="btn btn-block"
            style={{ background: "red" }}
            onClick={() => rematch()}
          >
            Rematch
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Table;
