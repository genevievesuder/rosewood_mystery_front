import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import FirstClue from "./FirstClue";
import { NotifContext } from "../context/NotifContext";
// import Dialogue from "./Dialogue";
import Npc1 from "./Npc1";
import Npc3 from "./Npc3";
import Npc2 from "./Npc2";
import Backroom from './Backroom';


const Home = () => {
  // const [libraryCard, setLibraryCard] = useState(false)
  const {user} = useContext(UserContext)
  const {notif, setNotif} = useContext(NotifContext)
  const navigate = useNavigate()
const [backroom, setBackroom] = useState(false)

  // const handleShowCard = () => {
  //   setLibraryCard(currentState => !currentState)
  // }

  if (!user) return <h1>...loading</h1>
  if (user.clues.length === 0) return <FirstClue user_id={user.id}/>
  if (user.clues.length === 2 && user.hints.length === 0) return <Npc1 user_id={user.id}/>
  if (user.clues.length === 4 && user.hints.length === 1) return <Npc3 user_id={user.id}/>
  if (user.clues.length === 5 && user.hints.length === 2) return <Npc2 user_id={user.id}/>
  if (backroom) return <Backroom />

  return (
  <div>
    { user.clues.length >= 5 && user.hints.length >= 3 ? (
    <button onClick={() => setBackroom(true)} className="backroom-btn">Enter backroom ➔</button>
    ) : null}
    <div onClick={() => navigate("/computer")} className="box"></div>
    <div className="home-container">
       <img className="home-view" src={process.env.PUBLIC_URL+"/desk.png"} alt="viewfromdesk"/>
    </div>
  </div>
  )
}

export default Home