import { createContext, useState } from 'react';

const NotifContext = createContext()

const NotifProvider = ({children}) => {
  const [notif, setNotif] = useState(""); 


  return (
    <NotifContext.Provider value={{notif, setNotif}}>
        {children}
    </NotifContext.Provider>
)
}

export {NotifContext, NotifProvider}