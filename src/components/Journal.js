import React from 'react'

const Journal = () => {
  return (
    <div className="journal-container">
    <img style={{objectFit:"fill", minWidth:"70%"}}  src={process.env.PUBLIC_URL+"/journal.jpg"} alt="books"/>
  </div>
  )
}

export default Journal