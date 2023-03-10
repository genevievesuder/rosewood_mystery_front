import { useState, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../../context/UserContext';
import { NotifContext } from "../../context/NotifContext";
import BackBtn from '../../main/BackBtn'
import Clue from '../clues/Clue'
import Npc5 from './Npc4'
import FinalRoom from '../rooms/FinalRoom';


const LibraryRight = () => {

    const navigate = useNavigate()
    
    const {setNotif} = useContext(NotifContext)
    const {user, setUser} = useContext(UserContext)
    const [reach, setReach] = useState(false)
    const [flipImg, setFlipImg] = useState(false)
    const [openClue1, setOpenClue1] = useState(false)
    const [openClue2, setOpenClue2] = useState(false)
    const [openClue3, setOpenClue3] = useState(false)
    const [openGlobe, setOpenGlobe] = useState(false)
    const [book, setBook] = useState(false)
    const [enterFinalRoom, setEnterFinalRoom] = useState(false)


    const handleClick = async (clue_id) => {
        const resp = await Clue(clue_id)
        !!resp.id ? setUser(resp) : setNotif(resp)
        // setNotif("Clue discovered")
    }

const open1 = () => {
    setOpenClue1(current => !current)
}
const open2 = () => {
    setOpenClue2(current => !current)
    if (!openClue2 && user.clues.length < 9) {
        handleClick(7)
        setNotif("It looks like it could open...")
    }
}
const open3 = () => {
    setOpenClue3(current => !current)
}


const handleFlip = () => {
    setFlipImg(current => !current)
    setNotif("Interesting..")
    if (user.clues.length >= 3 && user.hints.length >= 1) {
        handleClick(4)
    }
}

if (openClue1) {
    return (
    <div style={{textAlign:'center'}}>
     <button onClick={open1} className="npc-exit">x</button>
      <Npc5 />
    </div>)
}

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
     { user.clues.length >= 4 && user.hints.length >= 1 ? (
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


const handleOpenGlobe = () => {
    setOpenGlobe(current => !current);
}


const hint9 = () => {
    handleClick(9)
    setNotif("A door has opened.")
    navigate('/library')
}


if (book) {
    return (
        <div className="home-container" style={{textAlign:'center'}}>
            <button onClick={hint9} className="clue-back-btn">x</button>
        { !reach ? (
        <img onClick={() => setReach(true)} className="globe" src={process.env.PUBLIC_URL+"/openglobe.jpg"} alt="library view"/>
        ) : (<img onClick={() => handleClick(9)} className="globe" src={process.env.PUBLIC_URL+"/secretbook.jpg"} alt="library view"/>
        )}
        </div>) 
}


if (openGlobe) {
    return (
        <div className="home-container">
        <button onClick={handleOpenGlobe} className="clue-back-btn">x</button>
         <img onClick={() => setBook(true)} className="globe" src={process.env.PUBLIC_URL+"/globe.png"} alt="globe"/>
       </div>
    )
}

if (enterFinalRoom) {
    return <FinalRoom />
}

if (user.clues.length === 10) {
    return (
     <div className="home-container">
        <img className="home-view" src={process.env.PUBLIC_URL+"/gameoverlibrary.png"} alt="library view"/>
     </div>
    )
}

if (user.clues.length === 8 && user.hints.length === 3) {
    return(
        <div className="lib-container">
          <div onClick={handleOpenGlobe} className="lf2"></div>  
          <img className="home-view" src={process.env.PUBLIC_URL+"/library-fore.png"} alt="library view"/>
        </div>
    )
}

if (!user) return <h1>...loading</h1>

  return (
    
    <div className="library-left-container">
        <button onClick={open1} className="lf1"></button>
    { user.clues.length >= 1 ? (
        <button onClick={open2} className="lf2"></button>
    ) : ( null)}
        <button onClick={open3} className="lf3"></button>
            <BackBtn />
        <div className="lib-container">
    { user.clues.length === 9 && user.hints.length === 3 ? (
        <>
        <div onClick={() => setEnterFinalRoom(true)} className="enter-final-room"></div>
        <img className="home-view" src={process.env.PUBLIC_URL+"/secretdoor.png"} alt="a wall of the library has opened..."/>
        </>
    ) : (
        <img className="home-view" src={process.env.PUBLIC_URL+"/library-fore.png"} alt="library view"/>
    )}
        </div>
    </div>
  )
}

export default LibraryRight

