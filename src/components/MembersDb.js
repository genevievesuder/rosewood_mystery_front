import React from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HomeIcon from '@mui/icons-material/Home';
import PrintIcon from '@mui/icons-material/Print';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import { MemberContext } from '../context/MemberContext'
import { useNavigate } from 'react-router-dom';
import Members from './Members';
import { NotifContext } from "../context/NotifContext";


const MembersDb = () => {
const {user} = useContext(UserContext)
const {members} = useContext(MemberContext)
const {notif, setNotif} = useContext(NotifContext)
const navigate = useNavigate()


// const [newPost, setNewPost] = useState({
//   title: "",
//   content: "",
//   image:""
// })

// const submitPost = (e) => {
//   e.preventDefault()
//   fetch("/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newPost)
//   })
//      .then(res => {
//       if (res.status !== 201) {
//         res.json()
//         .then(messageObj => setNotif(messageObj.errors))
//       } else {
//         setPostForm(false)
//         res.json()
//         .then(newPost => setPosts(currentPosts =>
//           [newPost, ...currentPosts]))
//         setNewPost({
//           title: "",
//           content: "",
//           image:""
//         })
//       }
//     })
// }


// const [formData, setFormData] = useState({
//   email: "",
//   password: "",
//   password_confirmation: "",
//   character_name: ""
// });

const mappedMembers = members.map(member => <Members key={member.id} member={member} {...member}/>);

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

        <div className="members-header">

          <h2>Member Database</h2>
          <input
              className="member-search"
              value=""
              placeholder="Search Members"
              // onChange={(e) => setInput(e.target.value)}
            />
            <button className="search-member">🔎</button>
        

      {/* <h3>New Member</h3> */}
          <form className="new-member-form">
          {/* //  onSubmit={(e) => handleSignup(e, formData)}> */}
            <label>First Name</label>
            <input
              className="member-input"
              name="first_name"
              type="text"
              // placeholder="First name"
              // onChange={handleChange}
              // value={formData.email}
            ></input><br/>
            <label>Last Name</label>
            <input
              className="member-input"
              name="last_name"
              type="text"
              // placeholder="password"
              // onChange={handleChange}
              // value={formData.password}
            ></input><br/>
            <label>Address</label>
            <input
              className="member-input"
              name="address"
              type="text"
              // placeholder="Mailing address"
              // onChange={handleChange}
              // value={formData.password_confirmation}
            ></input><br/>
            <button className="buttons" type="submit">Add Member</button>
          </form>
        </div>
        <div className="members-list">
      <span className="ml">Last name <span style={{float:'right', paddingRight:'3px'}}>⇅</span></span>
      <span className="ml">First name</span>
      <span className="ml">Address</span>
      <span className="ml">Edit</span>
       </div>
        {mappedMembers}
      </div>
    </div>
  )
}

export default MembersDb