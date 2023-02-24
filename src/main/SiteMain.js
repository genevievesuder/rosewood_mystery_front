import { Link, useNavigate } from 'react-router-dom'

const SiteMain = () => {
  const navigate = useNavigate()

  return (
    <div className="site-main">
      <div className="welcome-text">
        <h2>Welcome</h2>
        <button onClick={() => navigate("/play")} className="play-btn">Play</button>
      </div>
      <div className="welcome-box">
        <img className="welcome-border" src={process.env.PUBLIC_URL+"/welcomebox.jpg"} alt="border"/>
      </div>
      <img className="background-img" src={process.env.PUBLIC_URL+"/mainsite.jpg"} alt="books"/>
    </div>
  )
}

export default SiteMain