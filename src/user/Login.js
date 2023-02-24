import { Link, useNavigate } from 'react-router-dom'

const Login = ({setToggleAuth}) => {

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
    <button type="submit">Sign up</button>
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