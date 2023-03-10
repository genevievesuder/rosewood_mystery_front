import BackBtn from '../../main/BackBtn'
import SlidingPuzzle from '../puzzles/SlidingPuzzle'
import Clue from '../clues/Clue'
import { UserContext } from '../../context/UserContext';
import { useState, useContext } from 'react'
import { NotifContext } from "../../context/NotifContext";


const LibraryRight = () => {

const {setNotif} = useContext(NotifContext)
const {user, setUser} = useContext(UserContext)

const [openClue1, setOpenClue1] = useState(false)
const [openClue2, setOpenClue2] = useState(false)

    const handleClick = async (clue_id) => {
        const resp = await Clue(clue_id)
        !!resp.id ? setUser(resp) : setNotif(resp)
    }

const open1 = () => {
    setOpenClue1(current => !current)
    if (!openClue1) {
        handleClick(3)
    }
}

const open2 = () => {
    setOpenClue2(current => !current)
}

if (openClue1) {
    return (
    <div className="clue-click-div">
     <button onClick={open1} className="clue-back-btn">x</button>
      <div className="poem-clue-container">
      <img className="poem" src={process.env.PUBLIC_URL+"/poem.png"} alt="poem"/>
      </div>
    </div>)
}
if (openClue2) {
    return (
    <div className="clue-click-div">
     <button onClick={open2} className="clue-back-btn">x</button>
      <div className="clue-container-sp">
       <SlidingPuzzle />
      </div>
    </div>)
}


if (!user) return <h1>...loading</h1>

  return (
    
    <div className="library-left-container">
        { user.clues.length >= 2 && user.hints.length >= 1 ? (
        <button onClick={open1} className="lr1"></button>
        ) : null}
        { user.clues.length >= 4 && user.hints.length >= 2 ? (
        <button onClick={open2} className="lr2"></button>
        ) : null}
            <BackBtn />
        <div className="lib-container">
        { (user.clues.length <= 5 && user.hints.length <= 2) || (user.clues.length <= 5 && user.hints.length === 3) ?  (
        <img className="library-view" src={process.env.PUBLIC_URL+"/library-right1.jpg"} alt="library view"/>
        ) : (
        <img className="library-view" src={process.env.PUBLIC_URL+"/library-right2.jpg"} alt="library view"/>
        )}
        </div>
    </div>
  )
}

export default LibraryRight

