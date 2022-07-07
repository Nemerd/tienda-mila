import logo from "../media/Logo.jpg"
import CartWidget from './CartWidget.js';
import {Linx} from 'react-router-dom';

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
            <Link to="/home" style={{ display: "flex", flexFlow: "row", alignItems: "center" }}>
                <img src={logo} alt="Logo" style={{height: "10vh"}}></img>
                <div>Tienda-mila</div>
            </Link>
            <Link to="/home">
                <div>Inicio</div>
            </Link>
            <Link to="/home">
                <div>Menu</div>
            </Link>
            <CartWidget num="5" />
            {props.children}
        </div>
    );
}

export default NavBar;