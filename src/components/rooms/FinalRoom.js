import Clue from '../clues/Clue'
import { UserContext } from '../../context/UserContext';
import { useState, useContext } from 'react'
import { NotifContext } from "../../context/NotifContext";
import { useNavigate } from 'react-router-dom';


const FinalRoom = () => {
    const navigate = useNavigate()
    const {setNotif} = useContext(NotifContext)
    const {user, setUser} = useContext(UserContext)
    const [grabCrystal, setGrabCrystal] = useState(false)
    const [openClue2, setOpenClue2] = useState(false)

    const handleClick = async (clue_id) => {
        const resp = await Clue(clue_id)
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

    const gameOver = () => {
        navigate('/')
        setNotif("Congratulations, you have solved the mystery at Rosewood!")
    }

    if (user.clues.length === 10) {
        return (
            <div className="final-room-container" style={{textAlign:'center'}}>
                <h1 className="end-game">I can finally move on. Thank you.</h1>
                <img onClick={gameOver} className="globe" src={process.env.PUBLIC_URL+"/g.jpg"} alt="A ghost appeared"/>
            </div>)
    }

    const handleRestartGame = () => {
        fetch('/start_over', {
            method: "DELETE",
        })
           .then((r) => { 
            if (r.status === 204) {
             setUser(currentUser => ({...currentUser, clues:[], hints: []}))
             setNotif("The next day...")
         
            } else {
                r.json()
                .then(err => alert(err))
            }        
        }).then(() => navigate('/home'))
    }

    if (!user) return <h1>...loading</h1>
  return (
    <div className="final-room-container">
        <>
    { grabCrystal ? (
        <>
       <button onClick={placeCrystal} className="dec1">.:*・°☆.Place crystal in book cover .:*・°☆.</button> 
       <button onClick={handleRestartGame}className="dec2">Clock out and go home</button>
       <img className="home-view" src={process.env.PUBLIC_URL+"/crystal.jpg"} alt="you hold a beautiful glowing crystal"/>
       </>
    ) : (
        <>
       <div onClick={() => setGrabCrystal(true)}className="frc"></div>
       <img className="home-view" src={process.env.PUBLIC_URL+"/finalroom.jpg"} alt="a spooky room with something glowing in the corner..."/>
        </>
    )}</>
    </div>
  )
}

export default FinalRoom