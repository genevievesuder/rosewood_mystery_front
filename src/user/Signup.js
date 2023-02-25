import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext';


const Signup = ({setToggleAuth}) => {
  const {handleSignup} = useContext(UserContext)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    character_name: ""
  });

  const handleChange = ({target: {name, value}}) => {
      setFormData(currentUser => ({
          ...currentUser,
          [name]: value
      }))
  }
  // const navigate = useNavigate();

  return (
    <div className="signin-container">
      <h3>Welcome</h3>
      <span>Sign up to play</span>
       <form className="signup-form" onSubmit={(e) => handleSignup(e, formData)}>
        <label>Email</label><br/>
        <input
          className="signup-input"
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
          className="signup-input"
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
          value={formData.password}
        >
        </input>
        <br/>
        <label>Password Confirmation</label><br/>
        <input
          className="signup-input"
          name="password_confirmation"
          type="password"
          placeholder="password"
          onChange={handleChange}
          value={formData.password_confirmation}
        >
        </input>
        <br/>
        
        <label>Name your character</label><br/>
        <input
          className="signup-input"
          name="character_name"
          type="test"
          placeholder="Name"
          onChange={handleChange}
          value={formData.character_name}
        >
        </input>
        <br/>
      <button type="submit">Sign up</button>
      </form>
      <br/>
      <label>Or</label>
      <br/>
      <Link onClick={() => setToggleAuth(currentVal => !currentVal)}>Sign in</Link>
      <br/>
      <Link to="/">Back to Main</Link>
    </div>
  )
}

export default Signup