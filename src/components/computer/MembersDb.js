// import React from 'react'
// import HelpOutlineIcon from '@mui/icons-material/HelpOutlined';
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import HomeIcon from '@mui/icons-material/Home';
// import PrintIcon from '@mui/icons-material/Print';
// import CoPresentIcon from '@mui/icons-material/CoPresent';
// import { useState, useContext, useEffect } from 'react'
// import { UserContext } from '../../context/UserContext';
// // import { MemberContext } from '../context/MemberContext'
// import { useNavigate } from 'react-router-dom';
// import Members from './Members';
// import { NotifContext } from "../../context/NotifContext";


// const MembersDb = () => {
// const {user} = useContext(UserContext)
// // const {members} = useContext(MemberContext)
// const {notif, setNotif} = useContext(NotifContext)
// const navigate = useNavigate()

// const [members, setMembers] = useState([]);


// useEffect(() => {
//     fetch("/customers")
//     .then((res) => {
//         if (res.ok) {
//             res.json()
//             .then((customers) => {
//                 setMembers(customers);
//             });
//         }
//     })
// }, []);

// const mappedMembers = members.map(member => <Members key={member.id} member={member} {...member}/>);

// if (!user) return <h1>...loading</h1>
//   return (
//     <div className="monitor-container">
      
//       <div className="software-name"><span>Rosewood Public Library</span></div>
      
//       <div className="monitor-toolbar">
//         <span>
//         <HelpOutlineIcon onClick={() => navigate("/help")}  className="toolbar-buttons"></HelpOutlineIcon>
//         <PeopleAltIcon onClick={() => navigate("/members")} className="toolbar-buttons"></PeopleAltIcon>
//         <HomeIcon onClick={() => navigate("/computer")} className="toolbar-buttons"></HomeIcon>
//         <CoPresentIcon onClick={() => navigate("/settings")} className="toolbar-buttons"></CoPresentIcon>
//         <PrintIcon className="toolbar-buttons"></PrintIcon>
//         </span>
//         <span style={{float:"right"}}>Welcome, {user.character_name}</span>
//       </div>

//       <div className="members-container">

//         <div className="members-header">

//           <h2>Member Database</h2>
//           <input
//               className="member-search"
//               value=""
//               placeholder="Search Members"
//               // onChange={(e) => setInput(e.target.value)}
//             />
//             <button className="search-member">🔎</button>
//         </div>
//         <div className="members-list">
//       <span className="ml">Last name <span style={{float:'right', paddingRight:'3px'}}>⇅</span></span>
//       <span className="ml">First name</span>
//       <span className="ml">Address</span>
//       <span className="ml">Edit</span>
//        </div>
//         {mappedMembers}
//       </div>
//     </div>
//   )
// }

// export default MembersDb