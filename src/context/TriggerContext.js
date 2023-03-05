// import { createContext, useState, useEffect, useContext } from 'react';
// // import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { NotifContext } from '../context/NotifContext';
// import { ViewContext } from './ViewContext';

// const TriggerContext = createContext()


// const TriggerProvider = ({children}) => {
//   const {view, setView} = useContext(ViewContext)
//   const {notif, setNotif} = useContext(NotifContext)
//   const [trigger1, setTrigger1] = useState(false); //Or null?

//   const npc1Event = () => {
//     setNotif("You have a customer.")
//     // return <span className="alert">You have a customer.</span>
//     setView("npc1")
//   };
//   const triggerNpc1 = (event) => {
//     if (!trigger1) {
//       setTrigger1(true);
//       npc1Event(event);
//     }
//   }; 

//   return (
//     <TriggerContext.Provider value={{trigger1, setTrigger1, triggerNpc1, }}>
//         {children}
//     </TriggerContext.Provider>
// )
// }

// export {TriggerContext, TriggerProvider}