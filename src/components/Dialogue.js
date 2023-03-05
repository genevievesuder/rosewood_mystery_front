import {useState} from 'react'
import { TypeAnimation } from 'react-type-animation';

const Dialogue = () => {


  return (
    <div className="dialogue-box">
 <TypeAnimation
      sequence={[
        'Hello, there', // Types 'One'
        2000, // Waits 1s
        'I need help please', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Could you do this for me?', // Types 'Three' without deleting 'Two'
        5000,
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={false}
      repeat={Infinity}
      style={{ fontSize: '2em' }}
      omitDeletionAnimation={true}
    />
    </div>
  )
}

export default Dialogue