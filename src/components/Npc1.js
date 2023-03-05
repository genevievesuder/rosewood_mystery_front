import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import { NotifContext } from '../context/NotifContext';
import Hint from './Hint'

const Npc1 = () => {
const {user, setUser} = useContext(UserContext)
const {setNotif} = useContext(NotifContext)
const navigate = useNavigate()

const handleGiveHint = async (hint_id) => {
    const resp = await Hint(hint_id)
    console.log(resp)
    !!resp.id ? setUser(resp) : setNotif(resp)
    navigate("/home")
}

const dialogue = ["Hi there, you must be new here. I haven't seen you before.", `Well it's nice to meet you ${user.character_name}, I'm Theo`, "I've been coming here since I was a little girl. I love poetry, and this library has a wonderful collection.", "I recommend checking it out. Look for the book with a crescent moon on it. It's my favorite.", "Well, I'll see you around!"];

const [i, incrementIndex] = useState(0)
const [text, setText] = useState(`${dialogue[i]}`);

//EQUALS UNDEFINED!!! NEED TO FIX.
function handleClick() {
    setText(`${dialogue[i + 1]}`);
    incrementIndex(i + 1)
    
  }

//   const navigate = useNavigate()

  return (      
      <div>
        <button onClick={() => handleGiveHint(1)} className="buttons">x</button>
        <div className="dialogue-box">
        <p className="dialogue">{text}</p>
        <button onClick={handleClick}>Next</button>
        </div>
        <div className="home-container">
          <img className="home-view" src={process.env.PUBLIC_URL+"/npc1.png"} alt="viewfromdesk"/>
        </div>
      </div>
  )
}

export default Npc1