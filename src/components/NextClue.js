// import React from 'react'
// import { useState, useContext } from 'react'
// import {useNavigate} from 'react-router-dom'
// import { NotifContext } from "../context/NotifContext";
// import Clue from './Clue'
// import { UserContext } from '../context/UserContext';


// const NextClue = () => {
//     const navigate = useNavigate()
//     const {notif, setNotif} = useContext(NotifContext)
//     const {user, setUser} = useContext(UserContext)
  
  
//     const handleClick = async () => {
//         const resp = await Clue(user.clues.length +1)
//         console.log(resp)
//         !!resp.id ? setUser(resp) : setNotif(resp)
//       }
      

//   return (
//     <div>NextClue</div>
//   )
// }

// export default NextClue