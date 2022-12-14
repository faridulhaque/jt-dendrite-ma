import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Banner from './components/Banner/Banner';
import Favorites from './components/Favorites/Favorites';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Playlists from './components/Playlists/Playlists';
import Search from './components/Search/Search';
import Sidebar from './components/Sidebar/Sidebar';
import '../src/styles/Styles.css'
import Menu from './components/Menu/Menu';


function App() {



  return (
    <div className="App">
      <Banner></Banner>
      <Menu></Menu>
      <div className="managing-sidebar">
        <div className='sidebar-container'>
          <Sidebar></Sidebar>

        </div>
        <div className='sidebar-outside'>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/favorites" element={<Favorites></Favorites>}></Route>
            <Route path="/playlists" element={<Playlists></Playlists>}></Route>
            <Route path="/search" element={<Search></Search>}></Route>
          </Routes>
        </div>
      </div>
      <Footer></Footer>
    </div>



  );
}

export default App;
