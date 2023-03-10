import { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom'

const Exit = () => {
    const navigate = useNavigate()
    const {handleLogout} = useContext(UserContext)

  return (
    <div className="are-you-sure-container">
        <div className="logout-box"> 
        <span>Are you sure you want to exit?</span><br></br>
        <button className="buttons" onClick={handleLogout}>Log out</button>
        <button className="buttons" onClick={() => navigate(-1)}>Keep playing</button>
        </div>
    </div>

  )
}

export default Exit