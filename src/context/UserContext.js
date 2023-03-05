import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotifContext } from './/NotifContext';
// import { ViewContext } from './ViewContext';


const UserContext = createContext()

const UserProvider = ({children}) => {
// const {view, setView} = useContext(ViewContext)
const {notif, setNotif} = useContext(NotifContext)
const navigate = useNavigate()
  const [user, setUser] = useState(null);


  useEffect(() => {
      fetch("/authorized_user")
      .then((res) => {
          if (res.ok) {
              res.json()
              .then((user) => {
                console.log(user)
                  setUser(user);
              });
          }
      })
  }, []);



  const handleLogin = (e, formData) => {
    e.preventDefault()
    console.log(formData)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(resp => {
      if (resp.ok) {
        resp.json().then(userObj => {
          setUser(userObj)
          // setView("main")
        })
      } else {
        resp.json().then(messageObj => setNotif(messageObj.error))
      }
    })
}


const handleSignup = (e, formData) => {
    e.preventDefault()
    console.log(formData)
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
        .then(response => {
        if (response.status === 201) {
          response.json()
          .then(userObj => {
            setUser(userObj)
            })
        } else {
          response.json().then(messageObj => setNotif(messageObj.errors))
        }
      })
      // .catch(error => alert(error)) Dont need this line, right?
  }

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    })
      .then((r) => { 
        if (r.status === 204) {
          setNotif("Successfully logged out ")
          setUser(null)
          navigate("/")
        } else {
          r.json()
          .then(err => setNotif(err))
        }        
      }) 
    }
  
  
  return (
    <UserContext.Provider value={{user, setUser, handleLogin, handleSignup, handleLogout}}>
        {children}
    </UserContext.Provider>
)
}

export {UserContext, UserProvider}