import {useState} from 'react'
import Letter from './Letter'
import { useDrop } from 'react-dnd'

// dndBoard[0]
// {id: 20, letter: 'T'}
// dndBoard[1]
// {id: 18, letter: 'R'}
// dndBoard[2]
// {id: 1, letter: 'A'}
// dndBoard[3]
// {id: 9, letter: 'I'}
// dndBoard[4]
// {id: 14, letter: 'N'}


const Alphabet = [
    {
        id: 1,
        letter: "A"
    },
    {
        id: 2,
        letter: "B"
    },
    {
        id: 3,
        letter: "C"
    },
    {
        id: 4,
        letter: "D"
    },
    {
        id: 5,
        letter: "E"
    },
    {
        id: 6,
        letter: "F"
    },
    {
        id: 7,
        letter: "G"
    },
    {
        id: 8,
        letter: "H"
    },
    {
        id: 9,
        letter: "I"
    },
    {
        id: 10,
        letter: "J"
    },
    {
        id: 11,
        letter: "K"
    },
    {
        id: 12,
        letter: "L"
    },
    {
        id: 13,
        letter: "M"
    },
    {
        id: 14,
        letter: "N"
    },
    {
        id: 15,
        letter: "O"
    },
    {
        id: 16,
        letter: "P"
    },
    {
        id: 17,
        letter: "Q"
    },
    {
        id: 18,
        letter: "R"
    },
    {
        id: 19,
        letter: "S"
    },
    {
        id: 20,
        letter: "T"
    },
    {
        id: 21,
        letter: "U"
    },
    {
        id: 22,
        letter: "V"
    },
    {
        id: 23,
        letter: "W"
    },
    {
        id: 24,
        letter: "X"
    },
    {
        id: 25,
        letter: "Y"
    },
    {
        id: 26,
        letter: "Z"
    }
]

const Dnd = () => {
    const [dndBoard, setDndBoard] = useState([])
    const [{isOver}, drop] = useDrop(() => ({
        accept: "text",
        drop: (item) => addLetterToDndBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addLetterToDndBoard = (id) => {
        const alphabetList = Alphabet.filter((letter) => id === letter.id);
        setDndBoard((dndBoard) => [...dndBoard, alphabetList[0]])
    };
    // console.log(dndBoard);

  return (
    <>
    <div className="drag-div">{Alphabet.map((letter) => {
        return <Letter letter={letter.letter} id={letter.id}/>
    })}
    </div>
    <div className="drop-div" ref={drop}>
      {dndBoard.map((letter) => {
            return <Letter letter={letter.letter} id={letter.id} />
        })}  
    </div>

    </>
  )
}

export default Dnd