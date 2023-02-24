import React from 'react'
import DbBooks from './DbBooks'
import HelpOutlineIcon from '@mui/icons-material/HelpOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HomeIcon from '@mui/icons-material/Home';
import PrintIcon from '@mui/icons-material/Print';
import CoPresentIcon from '@mui/icons-material/CoPresent';
const Computer = () => {

return (
  <div className="monitor-container">
      <div className="software-name"><span>Rosewood Public Library</span></div>
      <div className="monitor-toolbar">
        <span>
        <HelpOutlineIcon className="toolbar-buttons"></HelpOutlineIcon>
        <PeopleAltIcon className="toolbar-buttons"></PeopleAltIcon>
        <HomeIcon className="toolbar-buttons"></HomeIcon>
        <CoPresentIcon className="toolbar-buttons"></CoPresentIcon>
        <PrintIcon className="toolbar-buttons"></PrintIcon>
        </span>
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
              <DbBooks/>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Computer