import React, { useState, useEffect } from "react";
import Board from "./Board";
import './puzzle.css';


function SlidingPuzzle() {

  return (
    <div className="slide-puzzle">
      {/* <h1>React sliding puzzle</h1> */}
      <Board />
    </div>
  );
}

export default SlidingPuzzle;