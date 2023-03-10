import React from 'react'
import DbBooks from './DbBooks'
import HelpOutlineIcon from '@mui/icons-material/HelpOutlined';
import HomeIcon from '@mui/icons-material/Home';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import BookSearch from './BookSearch';
// import dotenv from 'dotenv'
// dotenv.config()
// const API_KEY = process.env.REACT_APP_API_KEY;

const Computer = () => {
  const navigate = useNavigate()
  const {user} = useContext(UserContext)
  const [books, setBooks] = useState([])

  // const [searchedBook, setSearchedBook] = useState(null)
  // const [input, setInput] = useState("")

  
  useEffect(() => {
    fetch("/books")
    .then(res => res.json())
    .then(setBooks)
    .catch(err => alert(err))
  }, []);


// // Google Books API FETCH
//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchBooks()
// }
//   const fetchBooks = () => {
//     fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}&key=${API_KEY}&maxResults=1`)
//     .then(res => res.json())
//     .then(data => setSearchedBook(data))
//     .catch(err => alert(err))
//     setInput("");
//   }  
// console.log(searchedBook.items)


  // const newData = searchedBook !== null ? searchedBook.items.map(book => 
  // <div key={book.id} className="single-book-click">
  //   <span><b>{book.volumeInfo.title}</b></span><br/>
  //   <label>Author: </label>
  //   <span>{book.volumeInfo.authors[0]}</span><br/>
  //   <label>Genre: </label>
  //   <span>{book.volumeInfo.categories[0]}</span><br/>
  //   <span>{book => book.volumeInfo.publisher}</span>
  //    <img className="book-img" src={book.volumeInfo.imageLinks.thumbnail} alt="book cover"/>
  // </div>): null


const mappedBooks = books.map(book => <DbBooks {...book} key={book.id}/>);

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
{/* Search books -->> */}
      {/* <div>
        <form onSubmit={handleSearch}>
        <input
          className="book-search-input"
          value={input}
          placeholder="Search books..."
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button className="search-btn">🔎</button>
        </form>
      </div> */}
      {/* <div className="db-col-1"> */}
       {/* {searchedBook !== null ? newData : null} */}
       {/* {searchedBook !== null ? newData : (
           <div className="single-book-click">
             <span><b>This is a Book Title</b></span><br/>
             <span>77653</span><br/>
             <span>Addam Author</span><br/>
             <span>Classical Literature</span><br/>
              <img className="book-img" src="https://marketplace.canva.com/EAFKA0RgDtw/1/0/1003w/canva-brown-and-orange-elegant-simple-young-adult-fantasy-book-cover-Qb8uSVdJDzw.jpg" alt="book cover"/>
           </div>
       )} */}
       {/* </div> */}
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