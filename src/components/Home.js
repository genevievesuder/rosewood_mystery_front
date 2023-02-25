import GameNav from "./GameNav"
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate()
  return (
  <>
    <div onClick={() => navigate("/computer")} className="box"></div>
    <div className="home-container">
       <img className="home-view" src={process.env.PUBLIC_URL+"/ugh.jpg"} alt="viewfromdesk"/>
    </div>
  </>
  )
}

export default Home