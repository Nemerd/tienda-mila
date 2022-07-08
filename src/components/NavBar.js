import React from 'react';
import logo from "../media/Logo.jpg"
import CartWidget from './CartWidget.js';
import { Link } from 'react-router-dom';

function NavBar(props) {
    const style = {
        display: "flex",
        flexFlow: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "lightblue",
        height: '10vh'
    };
    return (
        <div style={style}>
            <Link to="/" style={{ display: "flex", 
                flexFlow: "row", alignItems: "center" }}>
                    <img src={logo} alt="Logo" style={{height: "10vh"}} />
                    <p>Tienda-mila</p>
            </Link>
            <Link to="/">
                <div>Tienda</div>
            </Link>
            <CartWidget num="5" />
            {props.children}
        </div>
    );
}

export default NavBar;