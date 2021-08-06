import React from "react";
let playerOneScore = 0;
let playerTwoScore = 0;
let status = false;
const Checking = () => {
  const rematch = () => {
    playerOneScore = 0;
    playerTwoScore = 0;
  };
  const checkWinner = (data) => {
    //if box123 has the same value = win
    //if box147 has the same value = win
    //if box159 has the same value = win
    //if box258 has the same value = win
    //if box369 has the same value = win
    //if box456 has the same value = win
    //if box789 has the same value = win
    //if box357 has the same value = win

    try {
      if (
        data[0].value === data[1].value &&
        data[1].value === data[2].value &&
        data[0].value !== "" &&
        data[1].value !== "" &&
        data[2].value !== ""
      ) {
        console.log("line1");
        console.log("The winner is:", data[0].value);
        if (data[0].value === "X") {
          status = true;
          alert("Player 2 is the winner!");
          playerTwoScore = playerTwoScore + 1;
        } else {
          status = true;
          alert("Player 1 is the winner!");
          playerOneScore = playerOneScore + 1;
        }
        return true;
      }
      if (
        data[0].value === data[4].value &&
        data[4].value === data[8].value &&
        data[0].value !== "" &&
        data[4].value !== "" &&
        data[8].value !== ""
      ) {
        console.log("line2");
        console.log("The winner is:", data[0].value);
        if (data[0].value === "X") {
          status = true;
          alert("Player 2 is the winner!");
          playerTwoScore = playerTwoScore + 1;
        } else {
          status = true;
          alert("Player 1 is the winner!");
          playerOneScore = playerOneScore + 1;
        }
        return true;
      }
      if (
        data[0].value === data[3].value &&
        data[3].value === data[6].value &&
        data[0].value !== "" &&
        data[3].value !== "" &&
        data[6].value !== ""
      ) {
        console.log("line3");
        console.log("The winner is:", data[0].value);
        if (data[0].value === "X") {
          status = true;
          alert("Player 2 is the winner!");
          playerTwoScore = playerTwoScore + 1;
        } else {
          status = true;
          alert("Player 1 is the winner!");
          playerOneScore = playerOneScore + 1;
        }
        return true;
      }
      if (
        data[1].value === data[4].value &&
        data[4].value === data[7].value &&
        data[0].value !== "" &&
        data[4].value !== "" &&
        data[7].value !== ""
      ) {
        console.log("line4");
        console.log("The winner is:", data[1].value);
        if (data[1].value === "X") {
          status = true;
          alert("Player 2 is the winner!");
          playerTwoScore = playerTwoScore + 1;
        } else {
          status = true;
          alert("Player 1 is the winner!");
          playerOneScore = playerOneScore + 1;
        }
        return true;
      }
      if (
        data[2].value === data[5].value &&
        data[5].value === data[8].value &&
        data[2].value !== "" &&
        data[5].value !== "" &&
        data[8].value !== ""
      ) {
        console.log("line5");
        console.log("The winner is:", data[2].value);
        if (data[2].value === "X") {
          status = true;
          alert("Player 2 is the winner!");
          playerTwoScore = playerTwoScore + 1;
        } else {
          status = true;
          alert("Player 1 is the winner!");
          playerOneScore = playerOneScore + 1;
        }
        return true;
      }
      if (
        data[3].value === data[4].value &&
        data[4].value === data[5].value &&
        data[3].value !== "" &&
        data[4].value !== "" &&
        data[5].value !== ""
      ) {
        console.log("line6");
        console.log("The winner is:", data[3].value);
        if (data[3].value === "X") {
          status = true;
          alert("Player 2 is the winner!");
          playerTwoScore = playerTwoScore + 1;
        } else {
          status = true;
          alert("Player 1 is the winner!");
          playerOneScore = playerOneScore + 1;
        }
        return true;
      }
      if (
        data[6].value === data[7].value &&
        data[7].value === data[8].value &&
        data[6].value !== "" &&
        data[7].value !== "" &&
        data[8].value !== ""
      ) {
        console.log("line7");
        console.log("The winner is:", data[6].value);
        if (data[6].value === "X") {
          status = true;
          alert("Player 2 is the winner!");
          playerTwoScore = playerTwoScore + 1;
        } else {
          status = true;
          alert("Player 1 is the winner!");
          playerOneScore = playerOneScore + 1;
        }
        return true;
      }
      if (
        data[2].value === data[4].value &&
        data[4].value === data[6].value &&
        data[2].value !== "" &&
        data[4].value !== "" &&
        data[6].value !== ""
      ) {
        console.log("line8");
        console.log("The winner is:", data[2].value);
        if (data[2].value === "X") {
          status = true;
          alert("Player 2 is the winner!");
          playerTwoScore = playerTwoScore + 1;
        } else {
          status = true;
          alert("Player 1 is the winner!");
          playerOneScore = playerOneScore + 1;
        }
        return true;
      }

      if (
        data[0].value != "" &&
        data[1].value != "" &&
        data[2].value != "" &&
        data[3].value != "" &&
        data[4].value != "" &&
        data[5].value != "" &&
        data[6].value != "" &&
        data[7].value != "" &&
        data[8].value != ""
      ) {
        alert("Match is draw");
        status = true;
        return;
      }
      status = false;
      return false;
    } catch (error) {
      console.log("Checking error", error);
    }
  };
  return { checkWinner, rematch, playerOneScore, playerTwoScore, status };
};

export default Checking;
