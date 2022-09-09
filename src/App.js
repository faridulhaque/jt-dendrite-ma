import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Banner from './components/Banner/Banner';
import Favorites from './components/Favorites/Favorites';
import Home from './components/Home/Home';
import Playlists from './components/Playlists/Playlists';
import Search from './components/Search/Search';
import Sidebar from './components/Sidebar/Sidebar';

function App() {



  return (
    <div className="App">
      <Banner></Banner>
      <div className="managing-sidebar">
        <div style={{ width: '20%' }}>
          <Sidebar></Sidebar>

        </div>
        <div style={{ width: '80%' }}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/favorites" element={<Favorites></Favorites>}></Route>
            <Route path="/playlists" element={<Playlists></Playlists>}></Route>
            <Route path="/search" element={<Search></Search>}></Route>
          </Routes>
        </div>
      </div>
    </div>



  );
}

export default App;
