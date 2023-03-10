import BackBtn from '../../main/BackBtn'
import { UserContext } from '../../context/UserContext';
import { useState, useContext } from 'react'
import { NotifContext } from "../../context/NotifContext";
import Clue from '../clues/Clue'
import DndPuzzle from '../puzzles/DndPuzzle';


const LibraryLeft = () => {

const {setNotif} = useContext(NotifContext)
const {user, setUser} = useContext(UserContext)

const [openClue1, setOpenClue1] = useState(false)
const [openClue2, setOpenClue2] = useState(false)

    const handleClick = async (clue_id) => {
        const resp = await Clue(clue_id)
        !!resp.id ? setUser(resp) : setNotif(resp)
    }

const open1 = () => {
    setNotif("This could be useful later on...")
    setOpenClue1(current => !current)
    if (!openClue1) {
        handleClick(2)
    }
}

const open2 = () => {
    setOpenClue2(current => !current)
    setNotif("Hm. Needs a password. I wonder if something you've already found could work.")
}

if (openClue1) {
    return (
    <div className="clue-click-div">
     <button onClick={open1} className="clue-back-btn">x</button>
      <div className="clue-container">
        <h3 className="riddle">It travels all around the world without ever leaving it's corner.<br/>♘</h3>
      </div>
    </div>)
}

if (openClue2) {
    return (
    <div className="dnd-click-div">
    <button onClick={open2} className="clue-back-btn">x</button>
    <div className="dnd-background">
    <DndPuzzle />
    </div>
    </div>)
}


if (!user) return <h1>...loading</h1>

  return (
    
    <div className="library-left-container">
    { user.clues.length >= 1 ? (
        <button onClick={open1} className="ll1"></button>
    ) : null}
    { user.clues.length === 7 && user.hints.length === 3 ? (
        <button onClick={open2} className="ll2"></button>
    ) : null}
            <BackBtn />
        <div className="lib-container">
        <img className="library-view" src={process.env.PUBLIC_URL+"/library-left.jpg"} alt="library view"/>
        </div>
    </div>
  )
}

export default LibraryLeft

