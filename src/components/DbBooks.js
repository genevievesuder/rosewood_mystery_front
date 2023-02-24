import React from 'react'

const DbBooks = () => {
  //Pass in mappedBooks
  return ( 
  <div className="db-booklist">
      <span className="dbc-1">id</span>
      <span className="dbc-2">title</span>
      <span className="dbc-3">author</span>
      <span className="dbc-4">genre</span>
      <span className="dbc-5">undecided</span>
      {/* idk how, but add onClick to title, pops up on left with details and image */}
  </div>
  )
}

export default DbBooks