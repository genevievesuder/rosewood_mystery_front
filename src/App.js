import { useContext } from 'react'
import { UserContext } from './context/UserContext';
import { Route, Routes } from 'react-router-dom';
import SiteMain from './main/SiteMain';
import Computer from './components/computer/Computer';
import NotFound from './main/NotFound';
import Home from './components/rooms/Home';
import GameNav from './main/GameNav';
import PlayGame from './user/PlayGame';
import Login from './user/Login';
import Signup from './user/Signup';
import Journal from './components/journal/Journal';
import LibraryEntry from './components/library/LibraryEntry';
import LibraryLeft from './components/library/LibraryLeft';
import LibraryRight from './components/library/LibraryRight';
import LibraryFore from './components/library/LibraryFore';
import Notification from './main/Notification';
import Settings from './components/computer/Settings';
import Help from './components/computer/Help';
import Exit from './main/Exit';
import DndPuzzle from './components/puzzles/DndPuzzle';
import SlidingPuzzle from './components/puzzles/SlidingPuzzle';


function App() {
  const {user} = useContext(UserContext)

  return (
    <div className="App">
     <Notification />
      { user ? <GameNav /> : null }
        <Routes>
          <Route path="/" element={<SiteMain/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/library" element={<LibraryEntry />} />
          <Route path="/library/left" element={<LibraryLeft />} />
          <Route path="/library/right" element={<LibraryRight />} />
          <Route path="/library/forward" element={<LibraryFore />} />
          <Route path="/computer" element={<Computer />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="/play" element={<PlayGame/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/journal" element={<Journal/>} />
          <Route path="/exit" element={<Exit/>} />
          <Route path="/puzzle" element={<SlidingPuzzle/>} />
          <Route path="/letter" element={<DndPuzzle/>} />
        </Routes>
    </div>
  );
}

export default App;
