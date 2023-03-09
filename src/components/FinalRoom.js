import BackBtn from "../main/BackBtn"
import Clue from './Clue'
import { UserContext } from '../context/UserContext';
import { useState, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { NotifContext } from "../context/NotifContext";

const FinalRoom = () => {
    const {notif, setNotif} = useContext(NotifContext)
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const [grabCrystal, setGrabCrystal] = useState(false)
    const [openClue2, setOpenClue2] = useState(false)
    const [turn, setTurn] = useState(false)

    const handleClick = async (clue_id) => {
        const resp = await Clue(clue_id)
        console.log(resp)
        !!resp.id ? setUser(resp) : setNotif(resp)
    }


const handleTurn = () => {
    handleClick(10)
}

const placeCrystal = () => {
    setOpenClue2(true)
}

    if (openClue2 && user.clues.length === 9) {
        return (
            <div className="final-room-container" style={{textAlign:'center'}}>
                <button onClick={handleTurn} className="turn-around">Turn around</button>
                <img className="globe" src={process.env.PUBLIC_URL+"/finalbook.jpg"} alt="the crystal fits perfectly inside the book"/>
            </div>)
    }

    if (user.clues.length === 10) {
        return (
            <div className="final-room-container" style={{textAlign:'center'}}>
                <h1 className="end-game">I can finally move on. Thank you.</h1>
                <img className="globe" src={process.env.PUBLIC_URL+"/g.jpg"} alt="A ghost appeared"/>
            </div>)
    }


 
    if (!user) return <h1>...loading</h1>
  return (
    <div className="final-room-container">
    {/* { turn ? ( */}
        <>
        {/* <button className="end-game" onClick={endGame}>I can finally move on. Thank you.</button>
        <img className="globe" src={process.env.PUBLIC_URL+"/g.jpg"} alt="A ghost appeared"/> */}
        </>
    {/* ) : ( */}
        <>
    { grabCrystal ? (
        <>
       <button onClick={placeCrystal} className="dec1">.:*・°☆.Place crystal in book cover .:*・°☆.</button> 
       <button className="dec2">Clock out and go home</button>
       <img className="home-view" src={process.env.PUBLIC_URL+"/crystal.jpg"} alt="you hold a beautiful glowing crystal"/>
       </>
    ) : (
        <>
       <div onClick={() => setGrabCrystal(true)}className="frc"></div>
       <img className="home-view" src={process.env.PUBLIC_URL+"/finalroom.jpg"} alt="a spooky room with something glowing in the corner..."/>
        </>
    )}</>
    {/* )} */}
    </div>
  )
}

export default FinalRoom