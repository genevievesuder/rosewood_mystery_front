import {useState} from 'react'
import BackBtn from '../main/BackBtn'


const LibraryRight = () => {
    const [openClue1, setOpenClue1] = useState(false)
    const [openClue2, setOpenClue2] = useState(false)
    const [openClue3, setOpenClue3] = useState(false)

const open1 = () => {
    setOpenClue1(current => !current)
}
const open2 = () => {
    setOpenClue2(current => !current)
}
const open3 = () => {
    setOpenClue3(current => !current)
}

if (openClue1 === true) {
    return (
    <div style={{textAlign:'center'}}>
     <button onClick={open1} className="clue-back-btn">x</button>
      <img className="npcol" src={process.env.PUBLIC_URL+"/npcol.png"} alt="library view"/>
    </div>)
}
if (openClue2 === true) {
    return (
        <div style={{textAlign:'center'}}>
        <button onClick={open2} className="clue-back-btn">x</button>
         <img className="npcol" src={process.env.PUBLIC_URL+"/globe.png"} alt="library view"/>
    </div>)
}
if (openClue3 === true) {
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
        <button onClick={open1} className="lf1">﹖</button>
        <button onClick={open2} className="lf2"></button>
        <button onClick={open3} className="lf3"></button>
            <BackBtn />
        <div className="lib-container">
        <img className="home-view" src={process.env.PUBLIC_URL+"/library-fore.png"} alt="library view"/>
        </div>
    </div>
  )
}

export default LibraryRight

