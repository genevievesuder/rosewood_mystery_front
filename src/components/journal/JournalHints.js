import React from 'react'

const JournalHints = ({hints}) => {

  const userHints = hints.map(hint => <span key={hint.id} className="journal-clue">{hint.info}<br/>❧<br/></span>)

  return (
    <div>
      {userHints}
    </div>
  )
}

export default JournalHints