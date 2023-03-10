import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import { NotifContext } from '../../context/NotifContext';
import Hint from '../clues/Hint'

const Npc1 = () => {
const {user, setUser} = useContext(UserContext)
const {setNotif} = useContext(NotifContext)
const navigate = useNavigate()

const handleGiveHint = async (hint_id) => {
    const resp = await Hint(hint_id)
    !!resp.id ? setUser(resp) : setNotif(resp)
    navigate("/home")
    setNotif("You received a hint.")
}

const dialogue = ["Hi there, you must be new here. I haven't seen you before.", `It's nice to meet you ${user.character_name}, I'm Theo`, "I've been coming here since I was a little girl. I love poetry, and this library has a wonderful collection.", "I recommend checking it out. Look for the book with a crescent moon on it. It's my favorite.", "Well, I'll see you around!", ""];
debugger
const [i, incrementIndex] = useState(0)
const [text, setText] = useState(`${dialogue[i]}`);


  function handleClick() {
    setText(`${dialogue[i+ 1]}`);
    if (i < dialogue.length - 2) incrementIndex(i + 1)
    else return (
      <button onClick={handleGiveHint(1)}>Ok</button>
    )
  }

if (!user) return <h1>...loading</h1>
  return (      
      <div>
        <button onClick={() => handleGiveHint(1)} className="npc-exit">x</button>
        <div className="npc-name-box">
          <h4 className="npc-name">Theo Marsh</h4>
        </div>
        <div className="dialogue-box">
        <p className="dialogue">{text}</p>
        <button onClick={handleClick}>Next</button>
        </div>
        <div className="home-container">
          <img className="npc1" src={process.env.PUBLIC_URL+"/npc1.jpg"} alt="viewfromdesk"/>
        </div>
      </div>
  )
}

export default Npc1