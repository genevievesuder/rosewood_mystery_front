import React from 'react'
import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { NotifContext } from '../context/NotifContext';
import { UserContext } from '../context/UserContext';

const Clue = async(user_id, clue_id) => {
    // const {notif, setNotif} = useContext(NotifContext)
    // const {user, setUser} = useContext(UserContext)
 let user = {}

    fetch("/user_clues", {
      method: 'POST', 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({clue_id:clue_id, user_id:user_id})
    })
    .then(res=> {
      if (res.status === 201){
        res.json().then(newUser => {
          user = newUser
        })
      } else {
        res.json().then(errorObj => {
          return errorObj.errors
        })
      }
    })
    .catch(err => alert(err));
    return await user
  }
  
export default Clue