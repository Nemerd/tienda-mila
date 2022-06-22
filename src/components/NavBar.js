/* 
 * Este archivo debe crear un NavBar que contenga:
 * [] Branding
 * [] Listado de categorias clickeables
 * [] (Opcional) Incorporar Bootstrap
 */

import logo from "../media/Logo.jpg"
import CartWidget from './CartWidget.js';

function NavBar() {
    const style = {
        display: "flex",
        flexFlow: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "lightblue"
    };
    return (
        <div style={style}>
            <a href="#" style={{ display: "flex", flexFlow: "row", alignItems: "center" }}>
                <img src={logo} alt="Logo"></img>
                <div>Tienda-mila</div>
            </a>
            <a href="#">
                <div>Inicio</div>
            </a>
            <a href="#">
                <div>Menu</div>
            </a>
            <CartWidget num="5" />
        </div>
    );
}

export default NavBar;