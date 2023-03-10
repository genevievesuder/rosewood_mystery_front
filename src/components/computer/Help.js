import React from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutlined';
import HomeIcon from '@mui/icons-material/Home';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';


const Help = () => {
const {user} = useContext(UserContext)
const navigate = useNavigate()

if (!user) return <h1>...loading</h1>
  return (
    <div className="monitor-container">
      <div className="software-name"><span>Rosewood Public Library</span></div>
      <div className="monitor-toolbar">
        <span>
        <HelpOutlineIcon onClick={() => navigate("/help")}  className="toolbar-buttons"></HelpOutlineIcon>
        <HomeIcon onClick={() => navigate("/computer")} className="toolbar-buttons"></HomeIcon>
        <CoPresentIcon onClick={() => navigate("/settings")} className="toolbar-buttons"></CoPresentIcon>
        </span>
        <span style={{float:"right"}}>Welcome, {user.character_name}</span>
      </div>
      <div className="help-container"><br/>
        <div className="tips">
        <h1>Gameplay</h1>
           <h4>Rosewood Library holds many clues to be discovered...</h4><br/>
           <span>Tips & Pointers</span><br/><br/>
           <p>Some clues are only visible by scrolling your mouse over them. Keep an eye on your cursor for when it turns red!<br/>❧<br/>
           Your customers have helpful information for you. Don't worry, if you missed what they said just check your journal.
           <br/>❧<br/>
           Gameplay is synchronous.. follow the clues and hints in order to unlock the next one.<br/><br/>
           Have fun!
           </p>
        </div>
      </div>
    </div>
  )
}

export default Help