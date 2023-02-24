import { Link, useNavigate } from 'react-router-dom'


const Signup = ({setToggleAuth}) => {

  const navigate = useNavigate();

  return (
    <div>
      <form>
        <label>Email</label><br/>
        <input
          name="email"
          type="text"
          placeholder="johndoe"
          // onChange={handleChange}
          // value={formData.email}
        >
        </input>
      <br/>
        <label>Password</label><br/>
        <input
          name="password"
          type="password"
          placeholder="password"
          // onChange={handleChange}
          // value={formData.email}
        >
        </input>
        <br/>
        <label>Password Confirmation</label><br/>
        <input
          name="password_confirmation"
          type="password"
          placeholder="password"
          // onChange={handleChange}
          // value={formData.email}
        >
        </input>
        <br/>
        
        <label>Name your character</label><br/>
        <input
          name="character_name"
          type="test"
          placeholder="Name"
          // onChange={handleChange}
          // value={formData.email}
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