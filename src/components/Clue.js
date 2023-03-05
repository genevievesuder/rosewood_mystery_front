import React from 'react'
import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { NotifContext } from '../context/NotifContext';
import { UserContext } from '../context/UserContext';

const Clue = async (clue_id) => {
    // const {notif, setNotif} = useContext(NotifContext)
    // const {user, setUser} = useContext(UserContext)

try {
  const resp = await fetch("/user_clues", {
    method: 'POST', 
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({clue_id})
  })
    if (resp.status === 201){
      const data = await resp.json()
      return data
    } else {
      const data = await resp.json()
      return data.errors
    }
} catch (error) {
  alert(error)
}

  }
  
export default Clue