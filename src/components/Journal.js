import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import JournalClues from './JournalClues';

const Journal = () => {
  const {user} = useContext(UserContext)
  console.log(user)
const [clue1, setClue1] = useState(false)
//Will do w each clue and hint


  return (
    <div className="journal-container">
      <img className="pen" src={process.env.PUBLIC_URL+"/pen.png"} alt="pen"/>
      <img className="doodle" src={process.env.PUBLIC_URL+"/doodle.png"} alt="star doodle"/>
    <div className="todo-doodle">
      <span><u>To do:</u></span><br/>
      <span>Stock Non-fiction 2370-3000 ✗</span><br/>
      <span>Organize backroom</span><br/>
      <span>Call Mom back...</span>
    </div>

        <div className="journal-clues-left">
          {/* add stuff? */}
        </div>
      <div className="journal-clues-right">
          <span className="journal-clue">This is a clue.. maybe this will lead you in the right direction</span><br/>❧<br/>
      <JournalClues clues={user.clues}/>
      </div>
       <div className="journal-left"></div>
       <div className="journal-right"></div>
    </div>
  )
}

export default Journal