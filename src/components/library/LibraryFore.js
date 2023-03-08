import BackBtn from '../../main/BackBtn'
import Clue from '../Clue'
import { UserContext } from '../../context/UserContext';
import { useState, useContext } from 'react'
// import {useNavigate} from 'react-router-dom'
import { NotifContext } from "../../context/NotifContext";
import Npc5 from './Npc4'

const LibraryRight = () => {

    
    const {notif, setNotif} = useContext(NotifContext)
    const {user, setUser} = useContext(UserContext)
  
    const [flipImg, setFlipImg] = useState(false)
    const [openClue1, setOpenClue1] = useState(false)
    const [openClue2, setOpenClue2] = useState(false)
    const [openClue3, setOpenClue3] = useState(false)

    const handleClick = async (clue_id) => {
        const resp = await Clue(clue_id)
        console.log(resp)
        !!resp.id ? setUser(resp) : setNotif(resp)
        // setNotif("Clue discovered")
    }

const open1 = () => {
    setOpenClue1(current => !current)
}
const open2 = () => {
    setOpenClue2(current => !current)
    if (!openClue2) {
        handleClick(7)
        setNotif("It looks like it could open...")
    }
}
const open3 = () => {
    setOpenClue3(current => !current)
    if (!openClue3 && user.clues.length === 3) {
        handleClick(4)
    }
}


const handleFlip = () => {
    setFlipImg(current => !current)
    setNotif("Interesting..")
}

if (openClue1) {
    return (
    <div style={{textAlign:'center'}}>
     <button onClick={open1} className="npc-exit">x</button>
      <Npc5 />
    </div>)
}
// { user.clues.length === 6  ? (
if (openClue2) {
    return (
        <div className="home-container" style={{textAlign:'center'}}>
        <button onClick={open2} className="clue-back-btn">x</button>
         <img className="globe" src={process.env.PUBLIC_URL+"/globe.png"} alt="library view"/>
    </div>)
}
if (openClue3) {
    return (
    <div className="clue-click-div">
     <button onClick={open3} className="clue-back-btn">x</button>
     { user.clues.length >= 3 && user.hints.length === 1 ? (
     <button onClick={handleFlip} className="flip-btn">↷</button>
     ) : null}
      <div className="clue-container">
    {!flipImg ? (
      <img className="photograph" src={process.env.PUBLIC_URL+"/photograph.png"} alt="photograph"/>
    ) : (
      <img className="photograph" src={process.env.PUBLIC_URL+"/letter.png"} alt="letter"/>
    )}
      </div>
    </div>)
}


if (!user) return <h1>...loading</h1>

  return (
    
    <div className="library-left-container">
        <button onClick={open1} className="lf1"></button>
        <button onClick={open2} className="lf2"></button>
        {/* { user.clues.length >= 3 ? ( */}
         <button onClick={open3} className="lf3"></button>
        {/* ) : null} */}
            <BackBtn />
        <div className="lib-container">
        <img className="home-view" src={process.env.PUBLIC_URL+"/library-fore.png"} alt="library view"/>
        </div>
    </div>
  )
}

export default LibraryRight

