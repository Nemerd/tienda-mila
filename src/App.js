import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer />}></Route>
        <Route path='/home' element={ <ItemListContainer />}></Route>
        <Route path='/item/:id' element={ <ItemDetailContainer /> } ></Route>
      </Routes>
    </div>
  );
}

export default App;
