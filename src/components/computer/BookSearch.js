import DbBooks from './DbBooks'
import HelpOutlineIcon from '@mui/icons-material/HelpOutlined';
import HomeIcon from '@mui/icons-material/Home';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
// import dotenv from 'dotenv'
// dotenv.config()
const API_KEY = process.env.REACT_APP_API_KEY;



const BookSearch = () => {
    const [searchedBook, setSearchedBook] = useState(null)
    const [input, setInput] = useState("")
  
    
// Google Books API FETCH
  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks()
}
  const fetchBooks = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}&key=${API_KEY}&maxResults=1`)
    .then(res => res.json())
    .then(data => setSearchedBook(data))
    .catch(err => alert(err))
    setInput("");
  }  


  const newData = searchedBook !== null ? searchedBook.items.map(book => 
    <div key={book.id} className="single-book-click">
      <span><b>{book.volumeInfo.title}</b></span><br/>
      <label>Author: </label>
      <span>{book.volumeInfo.authors[0]}</span><br/>
      <label>Genre: </label>
      <span>{book.volumeInfo.categories[0]}</span><br/>
      <span>{book => book.volumeInfo.publisher}</span>
       <img className="book-img" src={book.volumeInfo.imageLinks.thumbnail} alt="book cover"/>
    </div>): null
  
  return (
    <div>
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
    <>
    {searchedBook !== null ? newData : null}
    </>
    </div>
  )
}

export default BookSearch