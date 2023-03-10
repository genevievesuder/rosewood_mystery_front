import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import Notes from './Notes';
import { NotifContext } from '../../context/NotifContext';


const NotePad = () => {
 const {setNotif} = useContext(NotifContext)
 const {user, setUser} = useContext(UserContext)
 const mappedNotes = user.notes.map(note => <Notes key={note.id} {...note} note={note.note}/>)
// const [showForm, setShowForm] = useState(false)

const [noteData, setNoteData] = useState({
    note: ""
})

const handleChange = ({target: {name, value}}) => {
    setNoteData({...noteData, [name]: value})
}

// const show = () => {
//     setShowForm(current => !current)
// }

const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(noteData)
    })
    .then(res=> {
      if (res.status === 201){
        // setShowForm(false)
        res.json().then(newNote => {
          setUser((currentUser) => (
            {
              ...currentUser, 
              notes: [
                ...currentUser.notes, newNote
              ]
            }))
            setNoteData({
              note: ""
          })
        })
      } else {
        res.json().then(errorObj => setNotif(errorObj.errors))
      }
    })
    .catch(err => alert(err));
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        className="note-input"
        name="note"
        onChange={handleChange}
        type="text"
        value={noteData.note}
        placeholder='Write a note...'
        />
      </form>
      {mappedNotes}
    </div>
  )
}

export default NotePad