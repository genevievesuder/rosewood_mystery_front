import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import FirstClue from "./FirstClue";
import { NotifContext } from "../context/NotifContext";
// import Dialogue from "./Dialogue";
import Npc1 from "./Npc1";

const Home = () => {
  // const [libraryCard, setLibraryCard] = useState(false)
  const {user} = useContext(UserContext)
  const {notif, setNotif} = useContext(NotifContext)
  const navigate = useNavigate()


  // const handleShowCard = () => {
  //   setLibraryCard(currentState => !currentState)
  // }

  if (!user) return <h1>...loading</h1>
  if (user.clues.length === 0) return <FirstClue user_id={user.id}/>
  if (user.clues.length === 2 && user.hints.length === 0) return <Npc1 user_id={user.id}/>

  return (
  <div>
    <div onClick={() => navigate("/computer")} className="box"></div>
    <div className="home-container">
       <img className="home-view" src={process.env.PUBLIC_URL+"/desk.png"} alt="viewfromdesk"/>
    </div>
  </div>
  )
}

export default Home