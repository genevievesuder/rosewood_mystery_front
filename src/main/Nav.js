import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'

const Nav = () => {
    const navigate = useNavigate()

  return (
    <div className="main-nav">
        <Link to="/info">Info</Link>
        <Link to="/">Logo</Link>
        <Link to="/play">Play Game</Link>
        {/* <Link to="/">Blah</Link> */}
    </div>
  )
}

export default Nav