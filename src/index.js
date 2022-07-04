import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar></NavBar>
    {/* <App /> */}
    <ItemList item={[{
        id: 0,
        title: "Milanesa con papas",
        price: 650,
        pictureUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Weekend_in_Buenos_Aires.jpg",
        descripcion: "Milanesa como la que hace mamá cuando está apurada, pero más rica."
    },
    {
        "id": 1,
        "title": "Milanesa napolitana",
        "price": 700,
        "pictureUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Weekend_in_Buenos_Aires.jpg",
        "descripcion": "No, no es importada. Solo le ponemos queso y tomate encima. (Sí, también viene con papas)."
    }]}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
