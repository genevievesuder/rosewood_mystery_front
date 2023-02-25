import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'

const GameNav = () => {
    const navigate = useNavigate()

  return (
    <div className="game-nav">
        <Link className="game-nav-link" to="/library">☜ Library</Link>
        <Link className="game-nav-link" to="/home">Desk</Link>
        <Link className="game-nav-link" to="/computer">Computer</Link>
        <Link className="game-nav-link" to="/journal">Journal</Link>
        <Link className="game-nav-link" to="/">Exit to Main Menu ☞</Link>
        {/* Will be logout^^ */}
    </div>
  )
}

export default GameNav