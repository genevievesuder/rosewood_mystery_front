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
  
    
    const handleClick = async (clue_id) => {
        const resp = await Clue(clue_id)
        console.log(resp)
        !!resp.id ? setUser(resp) : setNotif(resp)
    }



 
    if (!user) return <h1>...loading</h1>
  return (
    <div className="final-room-container">
    { grabCrystal ? (
        <>
       <button className="dec1">.:*・°☆.Place crystal in book cover .:*・°☆.</button> <button className="dec2">Clock out and go home</button>
       <img className="home-view" src={process.env.PUBLIC_URL+"/crystal.jpg"} alt="you hold a beautiful glowing crystal"/>
       </>
    ) : (
        <>
       <div onClick={() => setGrabCrystal(true)}className="frc"></div>
       <img className="home-view" src={process.env.PUBLIC_URL+"/finalroom.jpg"} alt="a spooky room with something glowing in the corner..."/>
        </>
    )}
    </div>
  )
}

export default FinalRoom