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
    <div className="clue-click-div">
     <button onClick={open1} className="clue-back-btn">x</button>
      <div className="clue-container">
       <p>welcome to Clue 1!!!!!!</p>
      </div>
    </div>)
}
if (openClue2 === true) {
    return (
    <div className="clue-click-div">
     <button onClick={open2} className="clue-back-btn">x</button>
      <div className="clue-container">
       <p>welcome to Clue 2!!!!!!</p>
      </div>
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
        <button onClick={open1} className="lr1"></button>
        <button onClick={open2} className="lr2"></button>
        <button onClick={open3} className="lr3"></button>
            <BackBtn />
        <div className="lib-container">
        <img className="library-view" src={process.env.PUBLIC_URL+"/library-right.jpg"} alt="library view"/>
        </div>
    </div>
  )
}

export default LibraryRight

