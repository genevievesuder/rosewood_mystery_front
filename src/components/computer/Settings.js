import React from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutlined';
import HomeIcon from '@mui/icons-material/Home';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';



const Settings = () => {
  const {user, handleAccountDeletion, editUser} = useContext(UserContext)
  const [accountDelete, showAccountDelete] = useState(false)
  const navigate = useNavigate()

  const handleShowDelete = () => {
    showAccountDelete(currentState => !currentState)
}

  const [editedUserData, setEditedUserData] = useState({
    character_name: user.character_name,
    email: user.email,
})

const handleChange = ({target: {name, value}}) => {
  setEditedUserData(currentUser => ({ 
      ...currentUser,
      [name]: value
  }))
}


if (!user) return <h1>...loading</h1>
  return (
    <div className="monitor-container">
      <div className="software-name"><span>Rosewood Public Library</span></div>
      <div className="monitor-toolbar">
        <span>
        <HelpOutlineIcon onClick={() => navigate("/help")}  className="toolbar-buttons"></HelpOutlineIcon>
        {/* <PeopleAltIcon className="toolbar-buttons"></PeopleAltIcon> */}
        <HomeIcon onClick={() => navigate("/computer")} className="toolbar-buttons"></HomeIcon>
        <CoPresentIcon onClick={() => navigate("/settings")} className="toolbar-buttons"></CoPresentIcon>
        </span>
        <span style={{float:"right"}}>Welcome, {user.character_name}</span>
      </div>
      <div className="settings-container">

       <h1>Account settings</h1><br/>
        
    <div className="edit-form-container">
      <h3>Edit your information</h3>
        <form className="edit-user-form" onSubmit={(e) => editUser(e, editedUserData, setEditedUserData)}>
            <label>Name</label>
                <input 
                className="edit-user-input"
                onChange={handleChange}
                name="character_name"
                placeholder={user.character_name}
                type="text"
                value={editedUserData.character_name}
            ></input><br/>
            <label>Email</label>
                <input 
                className="edit-user-input"
                onChange={handleChange}
                name="email"
                type="text"
                value={editedUserData.email}
            ></input><br/>
                <button className="buttons">Update Account</button>
        </form>
        </div>
        <br/>
        { accountDelete ? null : (
        <button className="buttons" onClick={handleShowDelete}>Delete Account</button>)}
        { accountDelete ? (
        <div>
        <span><b>Are you sure you want to delete your account? You will lose your game progress.</b></span><br/>
          <button className="buttons" style={{color: "red"}} onClick={handleAccountDeletion}>Confirm Account Deletion</button>
          <button className="buttons" onClick={handleShowDelete}>Go back</button>
        </div>
        ) : null}
       </div>
    </div>
  )
}

export default Settings