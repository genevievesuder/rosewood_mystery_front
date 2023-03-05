import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext';

const Members = ({member, last_name, first_name, address}) => {
  const {user} = useContext(UserContext)

  if (!user) return <h1>...loading</h1>
  if (!member) return <h1>...loading</h1>

  return (
    <div className="members-list">
      <span className="ml">{last_name}</span>
      <span className="ml">{first_name}</span>
      <span className="ml">{address}</span>
      <span className="ml">✎</span>
      {/* idk how, but add onClick to title, pops up on left with details and image */}
    </div>
  )
}

export default Members