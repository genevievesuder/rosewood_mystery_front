import { Link } from 'react-router-dom'

const GameNav = () => {

  return (
    <div className="game-nav">
        <Link className="game-nav-link" to="/library">☜ Library</Link>
        <Link className="game-nav-link" to="/home">Desk</Link>
        <Link className="game-nav-link" to="/computer">Computer</Link>
        <Link className="game-nav-link" to="/journal">Journal</Link>
        <Link className="game-nav-link" to="/exit">Exit to Main Menu ☞</Link>
    </div>

  )
}

export default GameNav