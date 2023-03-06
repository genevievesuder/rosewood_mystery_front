import BackBtn from '../../main/BackBtn'
import SlidingPuzzle from '../puzzles/SlidingPuzzle'
import Clue from '../Clue'
import { UserContext } from '../../context/UserContext';
import { useState, useContext } from 'react'
// import {useNavigate} from 'react-router-dom'
import { NotifContext } from "../../context/NotifContext";


const LibraryRight = () => {

    const {notif, setNotif} = useContext(NotifContext)
    const {user, setUser} = useContext(UserContext)
  

    const [openClue1, setOpenClue1] = useState(false)
    const [openClue2, setOpenClue2] = useState(false)
    const [openClue3, setOpenClue3] = useState(false)

    const handleClick = async (clue_id) => {
        const resp = await Clue(clue_id)
        console.log(resp)
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
const open3 = () => {
    setOpenClue3(current => !current)
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
if (openClue3) {
    return (
    <div className="clue-click-div">
     <button onClick={open3} className="clue-back-btn">x</button>
      <div className="clue-container">
       <p>welcome to Clue 3!!!!!!</p>
      </div>
    </div>)
}


  return (
    
    <div className="library-left-container">
        { user.clues.length >= 2 && user.hints.length >= 1 ? (
        <button onClick={open1} className="lr1"></button>
        ) : null}
        { user.clues.length >= 4 ? (
        <button onClick={open2} className="lr2"></button>
        ) : null}
        <button onClick={open3} className="lr3"></button>
            <BackBtn />
        <div className="lib-container">
        <img className="library-view" src={process.env.PUBLIC_URL+"/library-right.jpg"} alt="library view"/>
        </div>
    </div>
  )
}

export default LibraryRight

