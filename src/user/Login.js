import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext';

const Login = ({setToggleAuth}) => {

// const navigate = useNavigate();
const {handleLogin} = useContext(UserContext)

const [formData, setFormData] = useState({
  email: "",
  password: "",
});

const handleChange = ({target: {name, value}}) => {
  setFormData(currentUser => ({
      ...currentUser,
      [name]: value
  }))
}


  return (
    <div>
    <form onSubmit={(e) => handleLogin(e, formData)}>
      <label>Email</label><br/>
      <input
        name="email"
        type="text"
        placeholder="johndoe"
        onChange={handleChange}
        value={formData.email}
      >
      </input>
      <br/>
      <label>Password</label><br/>
      <input
        name="password"
        type="password"
        placeholder="password"
        onChange={handleChange}
        value={formData.password}
      >
      </input>
      <br/>
    <button type="submit">Login</button>
    </form>
    <br/>
    <label>Don't have an account yet?</label>
    <br/>
    <Link onClick={() => setToggleAuth(currentVal => !currentVal)}>Sign up</Link>
    <br/>
    <Link to="/">Back to Main</Link>
  </div>
  )
}

export default Login