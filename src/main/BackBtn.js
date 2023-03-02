import React from 'react'
import { useNavigate } from 'react-router-dom'


const BackBtn = () => {
const navigate = useNavigate()
  return (
    <div className="back-button">
      <button onClick={() => navigate(-1)} className="back">☜</button>
    </div>
  )
}

export default BackBtn