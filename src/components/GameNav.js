import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import { NotifContext } from '../context/NotifContext';

// NotifContext import>>
// import { NotifContext } from '../context/NotifContext';
// const {notif, setNotif} = useContext(NotifContext)


const GameNav = () => {
  const {notif, setNotif} = useContext(NotifContext)
  const {user, handleLogout} = useContext(UserContext)
  const navigate = useNavigate()
  const [areYouSure, setAreYouSure] = useState(false)

  // const handleGameExit = () => {
  //   setAreYouSure(true)
  // }

  return (
    <>
    <div className="game-nav">
        <Link className="game-nav-link" to="/library">☜ Library</Link>
        <Link className="game-nav-link" to="/home">Desk</Link>
        <Link className="game-nav-link" to="/computer">Computer</Link>
        <Link className="game-nav-link" to="/journal">Journal</Link>
        <Link onClick={() => setAreYouSure(true)} className="game-nav-link">Exit to Main Menu ☞</Link>
    </div>
    { areYouSure ? (
    <div className="are-you-sure-container">
      <div className="logout-box"> 
      <span>Are you sure you want to exit?</span><br></br>
      <button onClick={handleLogout}>Log out</button>
      <button onClick={() => setAreYouSure(false)}>Keep playing</button>
      </div>
    </div>
    ) : null}
    </>
  )
}

export default GameNav