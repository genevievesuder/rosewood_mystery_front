import React from 'react'
import { useNavigate } from 'react-router-dom';

const LibraryEntry = () => {

  const navigate = useNavigate()

  return (
    <div>
      <div className="point-left">
      <img onClick={() => navigate("/library/left")} className="lib-nav-left" src={process.env.PUBLIC_URL+"/arrow.png"} alt="arrow pointing left"/>
      </div>
      <div className="point-top">
      <img onClick={() => navigate("/library/forward")} className="lib-nav-for" src={process.env.PUBLIC_URL+"/arrow.png"} alt="arrow pointing forward"/>
      </div>
      <div className="point-right">
      <img onClick={() => navigate("/library/right")} className="lib-nav-right" src={process.env.PUBLIC_URL+"/arrow.png"} alt="arrow pointing right"/>
      </div>
      <div className="lib-container">
        <img className="home-view" style={{margin:'auto'}} src={process.env.PUBLIC_URL+"/library-entry.png"} alt="library view"/>
      </div>
    </div>
  )
}

export default LibraryEntry