import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useState, useContext, useEffect } from 'react'
// import { UserContext } from '../context/UserContext';
// import { NotifContext } from '../context/NotifContext';
// import Hint from './Hint'

const Npc4 = () => {
// const {user, setUser} = useContext(UserContext)
// const {setNotif} = useContext(NotifContext)
// const navigate = useNavigate()

// const handleGiveHint = async (hint_id) => {
//     const resp = await Hint(hint_id)
//     console.log(resp)
//     !!resp.id ? setUser(resp) : setNotif(resp)
//     navigate("/home")
// }

const dialogue = ["Hello there.", "...", "May I help you, child?", "...", "...", "...", "I just love this book. It's about exploring the great unknown.", "...", "...", "...", "I wish I could go on an adventure.. but it's too late for me now. Don't waste your youth, young one.","...","...", "It's nice to see you again.","Are you enjoying the library?", "There are many worlds within these walls.","...","...","Oh how I wish I would have done more with my life...", "I wish I could go to Paris.", "Paris is the city of lights, you know.", "...", "...", "...", "May I help you?"];

let greeting = dialogue[Math.floor(Math.random()*dialogue.length)];
// const [i, incrementIndex] = useState(0)
// const [text, setText] = useState(`${dialogue[i]}`);

//EQUALS UNDEFINED!!! NEED TO FIX.
// function handleClick() {
//     setText(`${dialogue[i + 1]}`);
//     incrementIndex(i + 1)
    
//   }

//   const navigate = useNavigate()

  return (      
      <div>
        {/* <button onClick={() => handleGiveHint(1)} className="buttons">x</button> */}
        <div className="dialogue-box">
        <p className="dialogue">{greeting}</p>
        {/* <button onClick={handleClick}>Next</button> */}
        </div>
        <div className="npc5-container">
          <img className="npcol" src={process.env.PUBLIC_URL+"/npcol.png"} alt="an old woman sits and reads a book"/>
        </div>
      </div>
  )
}

export default Npc4