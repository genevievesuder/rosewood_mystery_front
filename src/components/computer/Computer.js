import React from 'react'
import DbBooks from './DbBooks'
import HelpOutlineIcon from '@mui/icons-material/HelpOutlined';
import HomeIcon from '@mui/icons-material/Home';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import BookSearch from './BookSearch';

const Computer = () => {
  const navigate = useNavigate()
  const {user} = useContext(UserContext)
  const [books, setBooks] = useState([])


  useEffect(() => {
    fetch("/books")
    .then(res => res.json())
    .then(setBooks)
    .catch(err => alert(err))
  }, []);


const mappedBooks = books?.map(book => <DbBooks {...book} key={book.id}/>);

  if (!user) return <h1>...loading</h1>
return (
  <div className="monitor-container">
      <div className="software-name"><span>Rosewood Public Library Database</span></div>
      <div className="monitor-toolbar">
        <span>
        <HelpOutlineIcon onClick={() => navigate("/help")}  className="toolbar-buttons"></HelpOutlineIcon>
        <HomeIcon onClick={() => navigate("/computer")} className="toolbar-buttons"></HomeIcon>
        <CoPresentIcon onClick={() => navigate("/settings")} className="toolbar-buttons"></CoPresentIcon>
        </span>
        <span style={{float:"right"}}>Welcome, {user.character_name}</span>
      </div><br/>

  <div className="search-container">
<BookSearch />
  </div>
    <div className="database-container">
          <div className="db-col-2">
            <div className="book-header">
              <span className="book-attr-label"></span>
              <span className="book-attr-label">Title</span>
              <span className="book-attr-label">Author</span>
              <span className="book-attr-label">Genre</span>
            </div>
              {mappedBooks}
          </div>
        </div>
     </div>
  ) 
}

export default Computer