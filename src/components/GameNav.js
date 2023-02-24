import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'

const GameNav = () => {
    const navigate = useNavigate()

  return (
    <div className="game-nav"> This is the games navigation where you can go to different areas of the game
        <Link to="/">Exit to Main Menu</Link>
        {/* Will be logout^^ */}
        <Link to="/home">Desk</Link>
        <Link to="/computer">Computer</Link>
        {/* <Link to="/">Blah</Link> */}
    </div>
  )
}

export default GameNav