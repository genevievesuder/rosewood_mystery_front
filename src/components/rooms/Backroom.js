import BackBtn from "../../main/BackBtn"
import Clue from '../clues/Clue'
import { UserContext } from '../../context/UserContext';
import { useState, useContext } from 'react'
import { NotifContext } from "../../context/NotifContext";

const Backroom = () => {
    const {setNotif} = useContext(NotifContext)
    const {user, setUser} = useContext(UserContext)
    const [openClue1, setOpenClue1] = useState(false)
    const [flipImg, setFlipImg] = useState(false)

    const handleClick = async (clue_id) => {
        const resp = await Clue(clue_id)
        !!resp.id ? setUser(resp) : setNotif(resp)
    }

    const open1 = () => {
        setOpenClue1(current => !current)
        setFlipImg(false)
    }

    const handleFlip = () => {
      setFlipImg(current => !current)
      handleClick(6)
      setNotif("What the...")
  }

    if (openClue1) {
        return (
        <div className="home-container">
             <button onClick={open1} className="clue-back-btn">x</button>
       <button onClick={handleFlip} className="grab-note"></button>
      {!flipImg ? (
        <img className="home-view" src={process.env.PUBLIC_URL+"/thermostat.png"} alt="thermostat"/>
      ) : (
        <img className="home-view" src={process.env.PUBLIC_URL+"/lmo.png"} alt="let me out"/>
      )}
        </div>)
    }
 


 
    if (!user) return <h1>...loading</h1>
  return (
    <div className="home-container">
        <BackBtn />
        { user.clues.length >= 5 && user.hints.length >= 3 ? (
        <button onClick={open1} className="backroom-clue-btn"></button>
        ) : null}
        <img className="home-view" src={process.env.PUBLIC_URL+"/backroom.png"} alt="viewfromdesk"/>
    </div>
  )
}

export default Backroom