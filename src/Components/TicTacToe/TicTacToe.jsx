import React, { useState } from "react";
import "./style.css";
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setXTurn] = useState(true);
  const [winner, SetWinner] = useState("");
  
const checkwinner =(board)=>{
    const winningCombination =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let combin of winningCombination){
        const [a,b,c]=combin;
        if(board[a] && board[a]==board[b] && board[a]==board[c]){
            return board[a];
        }
    }
    return null;

}


  const handleClick = (index)=>{
    if (board[index] || winner) return;
 
    const newboard=[...board];
    if(isXTurn){
        newboard[index]='X';
    }
    else{
        newboard[index]='O';
    }
    setBoard(newboard);
    setXTurn(!isXTurn);
    const winnerplayer = checkwinner(newboard)
      if(winnerplayer){
        SetWinner(winnerplayer);
      }
  }
  


  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const resetGame = () => {
    setBoard("");
    SetWinner("");
    
  };

  return (
    <>
      <div className="board">
        <div className="bord-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="bord-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="bord-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <h2>
        {winner
            ? `winner is :${winner}`
            : `Next turn : ${isXTurn ? "X" : "O"}`
          }
            
        </h2>
      
        <button className="reset" onClick={resetGame}>
          Reset
        </button>
      </div>
    </>
  );
};

export default TicTacToe;
