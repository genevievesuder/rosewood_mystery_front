// import { createContext, useState, useEffect, useContext } from 'react';
// // import { useNavigate } from 'react-router-dom';
// import { NotifContext } from './/NotifContext';
// import {UserContext} from './UserContext'


// const ClueContext = createContext()


// const ClueProvider = ({children}) => {
// // const navigate = useNavigate()

//   const addClue = (clue) => {
//     fetch("/user_clues", {
//       method: 'POST', 
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify({clue:id})
//     })
//     .then(res=> {
//       if (res.status === 201){
//         res.json().then(newClue => {
//           setUser((currentUser) => (
//             {
//               ...currentUser, 
//               clues: [
//                 ...currentUser.clues, newClue
//               ]
//             }))
//           setNotif("A clue was added to your journal")
//         })
//       } else {
//         // res.json().then(errorObj => alert(errorObj.errors))
//       }
//     })
//     .catch(err => alert(err));
//   }
  

//   return (
//     <ClueContext.Provider value={{addClue}}>
//         {children}
//     </ClueContext.Provider>
// )
// }

// export {ClueContext, ClueProvider}