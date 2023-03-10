import React from 'react'

const DbBooks = ({id, title, author, genre}) => {

  return ( 
  <div className="db-booklist">
      <span className="dbc-1">{id}</span>
      <span className="dbc-2">{title}</span>
      <span className="dbc-3">{author}</span>
      <span className="dbc-4">{genre}</span>
  </div>
  )
}

export default DbBooks