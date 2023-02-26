import React from 'react'

const LibraryEntry = () => {
  return (
    <div>
      <div className="point-left">
      <img className="lib-nav-left" src={process.env.PUBLIC_URL+"/arrow.png"} alt="arrow pointing left"/>
      </div>
      <div className="point-top">
      <img className="lib-nav-for" src={process.env.PUBLIC_URL+"/arrow.png"} alt="arrow pointing forward"/>
      </div>
      <div className="point-right">
      <img className="lib-nav-right" src={process.env.PUBLIC_URL+"/arrow.png"} alt="arrow pointing right"/>
      </div>
      <div className="lib-container">
        <img className="library-view" src={process.env.PUBLIC_URL+"/library.jpg"} alt="library view"/>
      </div>
    </div>
  )
}

export default LibraryEntry