import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import FirstClue from "../clues/FirstClue";
import Npc1 from "../npc/Npc1";
import Npc3 from "../npc/Npc3";
import Npc2 from "../npc/Npc2";
import Backroom from './Backroom';


const Home = () => {
  const {user} = useContext(UserContext)
  const navigate = useNavigate()
  const [backroom, setBackroom] = useState(false)


  if (!user) return <h1>...loading</h1>
  if (user.clues.length === 0) return <FirstClue user_id={user.id}/>
  if (user.clues.length >= 3 && user.hints.length === 0) return <Npc1 user_id={user.id}/>
  if (user.clues.length === 5 && user.hints.length === 1) return <Npc3 user_id={user.id}/>
  if (user.clues.length === 6 && user.hints.length === 2) return <Npc2 user_id={user.id}/>
  if (backroom) return <Backroom />

 
  return (
  <div>
    { user.clues.length >= 6 && user.hints.length >= 3 ? (
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