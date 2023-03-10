import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext';
import JournalClues from './JournalClues';
import JournalHints from './JournalHints';
// import Notes from './Notes';
import NotePad from './NotePad';
import Notes from './Notes';

const Journal = () => {
  const {user} = useContext(UserContext)
  console.log(user)
const [clue1, setClue1] = useState(false)
//Will do w each clue and hint

// const mappedNotes = user.notes.map(note => <Notes key={note.id} {...note} note={note.note}/>)

// const [newNote, setNewNote] = useState({
//   note: "",
// })

// const handleNewNote = (e) => {
//   e.preventDefault()
//   fetch("/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newNote)
//   })
//      .then(res => {
//       if (res.status !== 201) {
//         res.json()
//         .then(messageObj => setNotification(messageObj.errors))
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



if (!user) return <h1>...loading</h1>
  return (
    <div className="journal-container">
      <img className="pen" src={process.env.PUBLIC_URL+"/pen.png"} alt="pen"/>
      <img className="doodle" src={process.env.PUBLIC_URL+"/doodle.png"} alt="star doodle"/>
    <div className="todo-doodle">
      {/* <span><u>To do:</u></span><br/>
      <span>Stock Non-fiction 2370-3000 ✗</span><br/>
      <span>Organize backroom</span><br/>
      <span>Call Mom back...</span> */}
      {/* {mappedNotes} */}
      {/* <Notes /> */}
      <NotePad/>
    </div>
        <div className="journal-clues-left">
        <span className="journal-clue">Hints</span><br/>❧<br/>
      <JournalHints hints={user.hints}/>
        </div>
      <div className="journal-clues-right">
          <span className="journal-clue">Clues</span><br/>❧<br/>
      <JournalClues clues={user.clues}/>
      </div>
       <div className="journal-left"></div>
       <div className="journal-right"></div>
    </div>
  )
}

export default Journal