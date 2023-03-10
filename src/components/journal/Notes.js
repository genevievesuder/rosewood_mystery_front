import {useState, useContext} from 'react'
import { UserContext } from '../../context/UserContext';
import { NotifContext } from '../../context/NotifContext';

const Notes = ({note, id}) => {

const {notif, setNotif} = useContext(NotifContext)
const {user, setUser} = useContext(UserContext)

const [showEditForm, setShowEditForm] = useState(false)

const [editedNote, setEditedNote] = useState({
    note: note
})

const handleShowEditForm = () => {
  setShowEditForm(currentValue => !currentValue)
}
 
const handleChange = ({target: {name, value}}) => {
  setEditedNote(currentNote => ({ 
      ...currentNote,
      [name]: value
  }))
}


const deleteNote = () => {
  fetch(`/notes/${id}`, {
    method: "DELETE",
  })
    .then((r) => { 
      if (r.status === 204) {
        console.log(`deleted`)
          setUser((currentUser) => (
            {
              ...currentUser, 
              notes: [
                ...currentUser.notes.filter(note => note.id !== id)
              ]
            }))
      } else {
        r.json()
        .then(err => alert(err))
      }        
    }) 
  }


const editNote = (e) => {
    e.preventDefault()
    fetch(`/notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedNote)
    })
       .then(res => {
        if (res.status !== 200) {
          res.json()
          .then(messageObj => setNotif(messageObj.errors))
        } else {
          res.json()
          .then(newNote => setUser((currentUser) => {
            const index = currentUser.notes.findIndex(note => note.id === newNote.id)
            return [...currentUser.notes.slice(0, index), newNote, ...currentUser.notes.slice(index + 1)]}))
            setShowEditForm(false)
         }
       })
  }



  return (
    <div>
        { showEditForm ? (
        <div>
        <form className="edit-note-form" onSubmit={editNote}>
                <input className="form-input"
                onChange={handleChange}
                name="note"
                type="text"
                value={editedNote.note}
                // placeholder="Title"
            ></input><br/>
            {/* <TextareaAutosize
                className="form-input"
                aria-label="empty textarea"
                minRows={5}
                maxRows={5}
                placeholder="Start writing..."
                onChange={handleChange}
                name="content"
                type="text"
                value={editedPost.content}
                style={{ width: 200 }}
            /><br/> */}
            {/* <button className="buttons">edit your note</button> */}
        </form>
        </div> 
    ) : null}
    { !showEditForm ? (
      <>
        <span className="noteclick"onClick={handleShowEditForm}>{note}</span>
        <button className="eraser" onClick={deleteNote} >✘</button>
      </>
    ) : null}
    </div>
  )
}

export default Notes