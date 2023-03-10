import { useNavigate } from 'react-router-dom'

const SiteMain = () => {
  const navigate = useNavigate()
  
  return (
    <div className="site-main">
        <div onClick={() => navigate("/play")} className="welcome-box">
         <img className="play" src={process.env.PUBLIC_URL+"/playgame.png"} alt="playbutton"/>
        </div>
      <img className="main-img" src={process.env.PUBLIC_URL+"/main.png"} alt="books"/>
    </div>
  )
}

export default SiteMain