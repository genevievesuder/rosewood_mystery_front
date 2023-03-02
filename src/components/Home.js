import GameNav from "./GameNav"
import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import { TriggerContext } from '../context/TriggerContext';
import { ViewContext } from "../context/ViewContext";
import Dialogue from "./Dialogue";
import FirstClue from "./FirstClue";
import { NotifContext } from "../context/NotifContext";


const Home = () => {
  const [libraryCard, setLibraryCard] = useState(false)
  const {view, setView} = useContext(ViewContext)
  const {user} = useContext(UserContext)
  const {notif, setNotif} = useContext(NotifContext)
  // const {trigger1, triggerNpc1} = useContext(TriggerContext)
  const navigate = useNavigate()


  const handleShowCard = () => {
    setLibraryCard(currentState => !currentState)
  }

  if (!user) return <h1>...loading</h1>
  if (user.clues.length === 0) return <FirstClue user_id={user.id}/>

  return (
  <>
  {/* {user.clues === [] ? <FirstClue /> : null } */}
  <div>
    <div onClick={() => navigate("/computer")} className="box"></div>
    <div className="home-container">
       <img className="home-view" src={process.env.PUBLIC_URL+"/desk.png"} alt="viewfromdesk"/>
    </div>
  </div>
 
  { view === "npc1" ? (
    <div>
      <div className="npc-info-box">
      <button className="buttons" onClick={handleShowCard}>View Library card</button>
      { libraryCard ? (
      <div className="library-card">
        <span className="card-logo">Rosewood Public Library</span><br/>
        <span>Name</span><br/>
        <span>Address</span>
      </div>
      ) :  null }
      </div>
        <div onClick={() => navigate("/computer")} className="box"></div>
        <div className="home-container">
          <Dialogue/>
          <img className="home-view" src={process.env.PUBLIC_URL+"/npc1.png"} alt="viewfromdesk"/>
        </div>
    </div>
  ) : null}
  </>
  )
}

export default Home