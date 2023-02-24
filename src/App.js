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


function App() {
  return (
    <div className="App">
     {/* <Notifications /> */}
      {/* <Nav /> */}
      {/* <GameNav /> */}
        <Routes>
          <Route path="/" element={<SiteMain/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/computer" element={<Computer />} />
          <Route path="/info" element={<Info/>} />
          <Route path="/play" element={<PlayGame/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
    </div>
  );
}

export default App;
