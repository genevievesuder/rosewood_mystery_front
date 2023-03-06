import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import { NotifContext } from '../context/NotifContext';
import Hint from './Hint'

const Npc3 = () => {
const {user, setUser} = useContext(UserContext)
const {setNotif} = useContext(NotifContext)
const navigate = useNavigate()

const handleGiveHint = async (hint_id) => {
    const resp = await Hint(hint_id)
    console.log(resp)
    !!resp.id ? setUser(resp) : setNotif(resp)
    navigate("/home")
    setNotif("You received a hint")
}

const dialogue = ["Hello! How are you today?", "Did I catch you at a bad time? You look busy, I can come back later!", "Alright then, thank you. Kind of an odd situation, but I just need to return this book.", "My library card? Funny story... I don't actually have an account here.", "I was tidying up my apartment and I found this book on my shelf.", "I have no idea how it got there, but I opened it up and saw the RPL stamp on it.. So, here I am! ...sounding like a crazy person.", "Anyway! Here you go, this belongs to you.", "Well, I guess I'll see ya next time a creepy old book mysteriously appears in my house!"];

const [i, incrementIndex] = useState(0)
const [text, setText] = useState(`${dialogue[i]}`);

//EQUALS UNDEFINED!!! NEED TO FIX.
function handleClick() {
    setText(`${dialogue[i + 1]}`);
    incrementIndex(i + 1)
    
  }

//   const navigate = useNavigate()
if (!user) return <h1>...loading</h1>
  return (      
      <div>
        <button onClick={() => handleGiveHint(3)} className="npc-exit">x</button>
        <div className="npc-name-box">
          <h4 className="npc-name">Ian Bennett</h4>
        </div>
        <div className="dialogue-box">
        <p className="dialogue">{text}</p>
        <button onClick={handleClick}>Next</button>
        </div>
        <div className="home-container">
          <img className="npc1" src={process.env.PUBLIC_URL+"/npc3.jpg"} alt="viewfromdesk"/>
        </div>
      </div>
  )
}

export default Npc3