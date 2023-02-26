import React from 'react'
import { useNavigate } from 'react-router-dom';



const Npc1 = () => {

  const navigate = useNavigate()

  return (
    <div>Npc1       
      <div>
        {/* <div onClick={() => navigate("/computer")} className="box"></div> */}
        <div className="home-container">
          <img className="home-view" src={process.env.PUBLIC_URL+"/npc1.png"} alt="viewfromdesk"/>
        </div>
      </div>
    </div>
  )
}

export default Npc1