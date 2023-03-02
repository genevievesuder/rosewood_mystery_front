import { Route, Routes } from 'react-router-dom';
import SiteMain from './main/SiteMain';
import Computer from './components/Computer';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Nav from './main/Nav';
import GameNav from './components/GameNav';
import Info from './main/Info';
import PlayGame from './user/PlayGame';
import Login from './user/Login';
import Signup from './user/Signup';
import { useState, useContext } from 'react'
import { UserContext } from './context/UserContext';
import Journal from './components/Journal';
import LibraryEntry from './components/LibraryEntry';
import LibraryLeft from './components/LibraryLeft';
import LibraryRight from './components/LibraryRight';
import LibraryFore from './components/LibraryFore';
import Notification from './main/Notification';
import MembersDb from './components/MembersDb';
import Settings from './components/Settings';
import Help from './components/Help';
import Exit from './main/Exit';
import FirstClue from './components/FirstClue';

import SlidingPuzzle from './components/puzzles/SlidingPuzzle';

function App() {
  const {user} = useContext(UserContext)

  return (
    <div className="App">
     <Notification />
      {/* <Nav /> */}
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
          <Route path="/members" element={<MembersDb />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="/info" element={<Info/>} />
          <Route path="/play" element={<PlayGame/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/journal" element={<Journal/>} />
          <Route path="/exit" element={<Exit/>} />
          <Route path="/puzzle" element={<SlidingPuzzle/>} />
          <Route path="/first" element={<FirstClue/>} />
        </Routes>
    </div>
  );
}

export default App;
