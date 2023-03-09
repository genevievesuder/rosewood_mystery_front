import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import { NotifContext } from '../context/NotifContext';
import Hint from './Hint'

const Npc2 = () => {
const {user, setUser} = useContext(UserContext)
const {setNotif} = useContext(NotifContext)
const navigate = useNavigate()

const handleGiveHint = async (hint_id) => {
    const resp = await Hint(hint_id)
    console.log(resp)
    !!resp.id ? setUser(resp) : setNotif(resp)
    navigate("/home")
}

const dialogue = ["Excuse me", "How am I supposed to take reading selfies while it's freezing cold in here!?", "Well?", "Ugh. Just forget it, you probably don't even know how to use a thermostat.", "Whatever, I'm getting out of here. This library is so creepy anyway."];

const [i, incrementIndex] = useState(0)
const [text, setText] = useState(`${dialogue[i]}`);

//EQUALS UNDEFINED!!! NEED TO FIX.
// function handleClick() {
//     setText(`${dialogue[i + 1]}`);
//     incrementIndex(i + 1)
//   }

  function handleClick() {
    setText(`${dialogue[i+ 1]}`);
    if (i < dialogue.length - 2) incrementIndex(i + 1)///Try this
    else return (
      <button onClick={handleGiveHint(2)}>Ok</button>
    )
  }

  // if (i < dialogue.length) incrementIndex(i + 1)///Try this
  // else return (
  //   <button onClick={handleGiveHint(2)}>Ok</button>
  // )

//   const navigate = useNavigate()
if (!user) return <h1>...loading</h1>
  return (      
      <div>
        <button onClick={() => handleGiveHint(2)} className="npc-exit">x</button>
        <div className="npc-name-box">
          <h4 className="npc-name">Emma Osbourne</h4>
        </div>
        <div className="dialogue-box">
        <p className="dialogue">{text}</p>
        <button onClick={handleClick}>Next</button>
        </div>
        <div className="home-container">
          <img className="npc1" src={process.env.PUBLIC_URL+"/npc2.jpg"} alt="viewfromdesk"/>
        </div>
      </div>
  )
}

export default Npc2