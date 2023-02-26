import GameNav from "./GameNav"
import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import { TriggerContext } from '../context/TriggerContext';
import { ViewContext } from "../context/ViewContext";
import Dialogue from "./Dialogue";

const Home = () => {
  const [libraryCard, setLibraryCard] = useState(false)
  const {view, setView} = useContext(ViewContext)
  // const {user} = useContext(UserContext)
  // const {trigger1, triggerNpc1} = useContext(TriggerContext)


const handleShowCard = () => {
  setLibraryCard(currentState => !currentState)
}

  const navigate = useNavigate()
  return (
  <>
   { view === "main" ? (
  <div>
    <div onClick={() => navigate("/computer")} className="box"></div>
    <div className="home-container">
       <img className="home-view" src={process.env.PUBLIC_URL+"/better.png"} alt="viewfromdesk"/>
    </div>
  </div>
   ) : null}
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