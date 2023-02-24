import { createContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';


const UserContext = createContext()

const UserProvider = ({children}) => {
//   const navigate = useNavigate()
  const [user, setUser] = useState(null);
//   const [notification, setNotification] = useState("")

  useEffect(() => {
      fetch("/authorized_user")
      .then((res) => {
          if (res.ok) {
              res.json()
              .then((user) => {
                  setUser(user);
              });
          }
      })
  }, []);
  
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
)
}

export {UserContext, UserProvider}