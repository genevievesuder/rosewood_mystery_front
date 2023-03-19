import React, { useState } from "react";
import Tile from "./Tile";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants"
import { canSwap, shuffle, swap, isSolved } from "./helpers"
import './puzzle.css';
import Clue from '../clues/Clue'
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react'
import { NotifContext } from "../../context/NotifContext";


function Board() {

  const {setNotif} = useContext(NotifContext)
  const {user, setUser} = useContext(UserContext)


  const handleClick = async (clue_id) => {
      const resp = await Clue(clue_id)
      !!resp.id ? setUser(resp) : setNotif(resp)
  }

  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles)
    setTiles(shuffledTiles);
  }

  const swapTiles = (tileIndex) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1))
      setTiles(swappedTiles)
    }
  }

  const handleTileClick = (index) => {
    swapTiles(index)
  }

  const handleShuffleClick = () => {
    shuffleTiles()
  }

  const handleStartClick = () => {
    shuffleTiles()
    setIsStarted(true)
  }

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };
  const hasWon = isSolved(tiles)

  return (
    <>
      <ul style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}
          />
        ))}
      </ul> 
      {hasWon && isStarted && <div>
        { user.clues.length === 5  && user.hints.length >= 2 ? (
        <>
        <div className="puzzle-clue-letter"><img src={process.env.PUBLIC_URL+"/letter2.png"} alt="letter"/></div><br/>
        <button className="puzzle-button" onClick={() => handleClick(5)}>Collect clue</button>
        </>
        ) : (
          <div className="puzzle-solved">
          <p className="puzzle-clue">Puzzle solved!</p><br/>
          </div>
        )}
        </div>}
      {!isStarted ?
        (<button className="buttons" onClick={() => handleStartClick()}>Start</button>) :
        (<button className="buttons" onClick={() => handleShuffleClick()}>↻</button>)}
    </>
  );
}

export default Board;