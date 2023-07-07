'use client'
import Square from "./(components)/sqare/page";
import React from "react";

export default function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const handleClick = (i) => {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    console.log(nextSquares);
    setSquares(nextSquares, squares);
  }
  return (
        <div className="border p-10 mx-[500px] bg-slate-300">
            <div className="board-row flex gap-2">
                <Square value="squares[0]" onSquareClick={handleClick} />
                <Square value="squares[1]" onSquareClick={handleClick} />
                <Square value="squares[2]" onSquareClick={handleClick} />
            </div>
            <div className="board-row flex gap-2">
                <Square value="squares[3]" onSquareClick={handleClick} />
                <Square value="squares[4]" onSquareClick={handleClick} />
                <Square value="squares[5]" onSquareClick={handleClick} />
            </div>
            <div className="board-row flex gap-2">
                <Square value="squares[6]" onSquareClick={handleClick}  />
                <Square value="squares[7]" onSquareClick={handleClick}  />
                <Square value="squares[8]" onSquareClick={handleClick} />
            </div>
        </div>
  )
}
