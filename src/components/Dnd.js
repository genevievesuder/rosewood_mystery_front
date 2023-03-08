import {useState, useContext, useEffect} from 'react'
import Letter from './Letter'
import { useDrop } from 'react-dnd'
import Clue from './Clue'
import { UserContext } from '../context/UserContext';
import {Navigate, useNavigate} from 'react-router-dom'
import { NotifContext } from "../context/NotifContext";


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
    const navigate = useNavigate();
    const {notif, setNotif} = useContext(NotifContext)
    const {user, setUser} = useContext(UserContext)

    const handleClick = async (clue_id) => {
        const resp = await Clue(clue_id)
        console.log(resp)
        !!resp.id ? setUser(resp) : setNotif(resp)
    }
    
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

// const [win, setWin] = useState(false)


const winningNumbers = dndBoard !== [] ? dndBoard.map(item => item.id) : null
    
    const checkWin = () => {
        let x = [];
        const winningArray =  [19, 20, 1, 13, 16] 
        for (let i = 0; i < winningNumbers.length; i++) {
            if (winningNumbers[i] === winningArray[i]) {
                x.push("correct")
                if (x.filter(res => res === "correct").length === 5) {
                    console.log("CORRRREEEECT")
                    return "CORRECT"
                }
            }
            console.log(x);
        }
    }

const grabKey = () => {
    handleClick(8)
    setNotif("You found a key.")
    navigate('/library')
}

if (checkWin() === "CORRECT") return <div className="dnd-solved"><h1>YOU FOUND A KEY</h1><br/><img onClick={grabKey} className="key" src={process.env.PUBLIC_URL+"/key.png"} alt="key"/></div>


  return (
    <>
    <div className="drag-div">{Alphabet.map((letter) => {
        return <Letter letter={letter.letter} id={letter.id}/>
    })}
    </div>
<button className="buttons" onClick={() => setDndBoard([])}>↻</button>
    <div className="drop-div" ref={drop}>
      {dndBoard.map((letter) => {
            return <Letter letter={letter.letter} id={letter.id} />
        })}  
    </div>
    </>
  )
}

export default Dnd