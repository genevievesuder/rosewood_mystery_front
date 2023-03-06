import BackBtn from '../../main/BackBtn'
import { UserContext } from '../../context/UserContext';
import { useState, useContext } from 'react'
// import {useNavigate} from 'react-router-dom'
import { NotifContext } from "../../context/NotifContext";
import Clue from '../Clue'

const LibraryLeft = () => {

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
        handleClick(2)
        setNotif("Clue discovered")
    }
}
const open2 = () => {
    setOpenClue2(current => !current)
    if (!openClue1) {
        handleClick(3)
    }
}
const open3 = () => {
    setOpenClue3(current => !current)
    if (!openClue1) {
        handleClick(4)
    }
}

if (openClue1) {
    return (
    <div className="clue-click-div">
     <button onClick={open1} className="clue-back-btn">x</button>
      <div className="clue-container">
        <h3 className="riddle">It travels all around the world without ever leaving it's corner.<br/>♖</h3>
      </div>
    </div>)
}
if (openClue2) {
    return (
    <div className="clue-click-div">
     <button onClick={open2} className="clue-back-btn">x</button>
      <div className="clue-container">
       <p>welcome to Clue 2!!!!!!</p>
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

if (!user) return <h1>...loading</h1>

  return (
    
    <div className="library-left-container">
    { user.clues.length === 1 ? (
        <button onClick={open1} className="ll1"></button>
    ) : null}
        <button onClick={open2} className="ll2"></button>
        <button onClick={open3} className="ll3"></button>
            <BackBtn />
        <div className="lib-container">
        <img className="library-view" src={process.env.PUBLIC_URL+"/library-left.jpg"} alt="library view"/>
        </div>
    </div>
  )
}

export default LibraryLeft

