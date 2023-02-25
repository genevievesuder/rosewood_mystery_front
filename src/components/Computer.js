import React from 'react'
import DbBooks from './DbBooks'
import HelpOutlineIcon from '@mui/icons-material/HelpOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HomeIcon from '@mui/icons-material/Home';
import PrintIcon from '@mui/icons-material/Print';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';



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

const mappedBooks = books.map(book => <DbBooks {...book} key={book.id}/>);

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
      {/* Add onclick to those^^ */}
    <div className="database-container">
      <div className="db-toolbar">
          <input
            className="db-search"
            value=""
            placeholder="Search"
            // onChange={(e) => setInput(e.target.value)}
          />
          <button className="search-btn">🔎</button>
{/* Add onClick function to button --> onClick={searchDatabase} */}
        <select className="db-filter">
          <option value="">Filter option 1</option>
          <option value="">Filter option 2</option>
          <option value="">Filter option 3</option>
        </select>
        <div className="book-header">
          <span className="book-attr-label">id</span>
          <span className="book-attr-label">Title</span>
          <span className="book-attr-label">Author</span>
          <span className="book-attr-label">Genre</span>
          <span className="book-attr-label">Undecided</span>
        </div>
      </div>
        <div className="db-content-container">
            <div className="single-book-click">
              <span><b>This is a Book Title</b></span><br/>
              <span>77653</span><br/>
              <span>Addam Author</span><br/>
              <span>Classical Literature</span><br/>
              <span>Available</span>
               <img className="book-img" src="https://marketplace.canva.com/EAFKA0RgDtw/1/0/1003w/canva-brown-and-orange-elegant-simple-young-adult-fantasy-book-cover-Qb8uSVdJDzw.jpg" alt="book cover"/>
            </div>
            <div className="db-col-2">
              {mappedBooks}
            </div>
        </div>
    </div>
  </div>
  )
}

export default Computer