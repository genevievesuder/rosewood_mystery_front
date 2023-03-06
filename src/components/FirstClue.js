import { useState, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { ClueContext } from '../context/ClueContext'
import { NotifContext } from "../context/NotifContext";
import Clue from './Clue'
import { UserContext } from '../context/UserContext';


const FirstClue = (user_id) => {
  const [stickyNote, setStickyNote] = useState(false)
  const navigate = useNavigate()
  const {notif, setNotif} = useContext(NotifContext)
  const {user, setUser} = useContext(UserContext)


const handleClick = async () => {
  const resp = await Clue(user.clues.length +1)
  console.log(resp)
  !!resp.id ? setUser(resp) : setNotif(resp)
  setNotif("Check your journal")
}


  return (
    <div>
    {!stickyNote ? (
        <>
        <div onClick={() => setStickyNote(true)}className="sticky-note"></div>
         <div className="home-container">
           <img className="home-view" src={process.env.PUBLIC_URL+"/firstclue.png"} alt="sticky note on monitor"/>
         </div>
        </>
    ) : (
        <div className="first-clue">
            <span className="s1">Welcome to Rosewood Public Library</span><br/>
            <div className="gameplay-container">
            <p className="s3"><br/>
            You've just moved to the town of Rosewood and begun your new job at the local library. <br/>❧<br/>Gameplay<br/><br/>
            Exploring the library will lead you to clues. After you find a clue it will be added to your journal.<br/>❧<br/>Unravel the secrets of Rosewood Library...<br/>❧</p>
            <p className="s3"></p><br/>
        <button onClick={handleClick} className="start">Add clue to journal & begin</button>
            </div>
            
        </div>)}
    </div>
  )
}

export default FirstClue