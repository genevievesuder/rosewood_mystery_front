import React, { useState } from 'react';

const NpcClue1 = () => {
  const [clicked, setClicked] = useState(false);
  const myFunc = () => alert('hey');
  const onClick = (event) => {
    if (!clicked) {
      setClicked(true);
      myFunc(event);
    }
  };
  return <button onClick={onClick}>Click on me (once)</button>;
};

export default NpcClue1;