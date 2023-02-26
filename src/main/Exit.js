import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom'

const Exit = () => {
    const navigate = useNavigate()
    const {user, handleLogout} = useContext(UserContext)

  return (
    <div className="are-you-sure-container">
        <div className="logout-box"> 
        <span>Are you sure you want to exit?</span><br></br>
        <button onClick={handleLogout}>Log out</button>
        <button onClick={() => navigate(-1)}>Keep playing</button>
        </div>
    </div>

  )
}

export default Exit