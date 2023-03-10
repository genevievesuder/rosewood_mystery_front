import { Monitor } from '@mui/icons-material'
import { useDrag } from 'react-dnd'

const Letter = ({id, letter}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "text",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
  return (
    // <div ref={drag} className="dnd-letters">
      <p className="dnd-letters" ref={drag}>{letter}</p>
    // </div>
  )
}

export default Letter