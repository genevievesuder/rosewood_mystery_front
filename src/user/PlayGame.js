import Login from "./Login"
import Signup from "./Signup"
import Home from '../components/Home';
import {useState, useContext} from 'react';
import { UserContext } from '../context/UserContext';

const PlayGame = () => {
  const [toggleAuth, setToggleAuth] = useState(false)
  const {user} = useContext(UserContext)

  if (!user) {
    return (
      toggleAuth && <Login setToggleAuth={setToggleAuth}/>) || (<Signup setToggleAuth={setToggleAuth}/>)
  }

  return (
    <div>
        <Home />
    </div>
  )
}
  
export default PlayGame
