import React from 'react'

const JournalClues = ({clues}) => {

  const userClues = clues.map(clue => <span key={clue.id} className="journal-clue">{clue.content}<br/>❧<br/></span>)

  return (
    <div>
      {userClues}
    </div>
  )
}

export default JournalClues