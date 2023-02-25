import { createContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';


const NotifContext = createContext()

const NotifProvider = ({children}) => {
// const navigate = useNavigate()
  const [notif, setNotif] = useState(""); //Or null?


  return (
    <NotifContext.Provider value={{notif, setNotif}}>
        {children}
    </NotifContext.Provider>
)
}

export {NotifContext, NotifProvider}