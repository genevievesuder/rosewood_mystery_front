import React from 'react'

const JournalClues = ({clues}) => {

  const userClues = clues.map(clue => {
    return (
    <>
  <span className="journal-clue">{clue.content}</span><br/>❧<br/>
    </>
  )})

  return (
    <div>
      {userClues}
    </div>
  )
}

export default JournalClues