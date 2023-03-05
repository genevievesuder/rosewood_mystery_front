import { Link, useNavigate } from 'react-router-dom'

const SiteMain = () => {
  const navigate = useNavigate()
  
  return (
    <div className="site-main">
{/*      
        <div className="welcome-text">
        <img className="welcome-title" src={process.env.PUBLIC_URL+"/title.png"} alt="title"/>
        </div> */}
        <div onClick={() => navigate("/play")} className="welcome-box">
        <img className="play" src={process.env.PUBLIC_URL+"/playgame.png"} alt="playbutton"/>
          {/* <img className="welcome-border" src={process.env.PUBLIC_URL+"/welcomebox.jpg"} alt="border"/> */}
        </div>
      {/* <div className="main-blur">
      </div> */}
      <img className="main-img" src={process.env.PUBLIC_URL+"/main.png"} alt="books"/>
    </div>
  )
}

export default SiteMain