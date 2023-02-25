import React from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HomeIcon from '@mui/icons-material/Home';
import PrintIcon from '@mui/icons-material/Print';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';



const MembersDb = () => {
const {user} = useContext(UserContext)
const navigate = useNavigate()

if (!user) return <h1>...loading</h1>
  return (
    <div className="monitor-container">
      <div className="software-name"><span>Rosewood Public Library</span></div>
      <div className="monitor-toolbar">
        <span>
        <HelpOutlineIcon onClick={() => navigate("/help")}  className="toolbar-buttons"></HelpOutlineIcon>
        <PeopleAltIcon onClick={() => navigate("/members")} className="toolbar-buttons"></PeopleAltIcon>
        <HomeIcon onClick={() => navigate("/computer")} className="toolbar-buttons"></HomeIcon>
        <CoPresentIcon onClick={() => navigate("/settings")} className="toolbar-buttons"></CoPresentIcon>
        <PrintIcon className="toolbar-buttons"></PrintIcon>
        </span>
        <span style={{float:"right"}}>Welcome, {user.character_name}</span>
      </div>
      <div className="members-container">
        <h1>MEMMMBBERS</h1>
        <div>
            <p>This will be where the user can see the member database and edit their library accounts</p>
        </div>
      </div>
    </div>
  )
}

export default MembersDb