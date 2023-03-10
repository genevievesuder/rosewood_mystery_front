import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import Dnd from './Dnd';


const DndPuzzle = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="dnd-puzzle">
        <Dnd />
      </div>
    </DndProvider>
  )
}

export default DndPuzzle