import logo from "../media/Logo.jpg"
import CartWidget from './CartWidget.js';

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
            <a href="#" style={{ display: "flex", flexFlow: "row", alignItems: "center" }}>
                <img src={logo} alt="Logo" style={{height: "10vh"}}></img>
                <div>Tienda-mila</div>
            </a>
            <a href="#">
                <div>Inicio</div>
            </a>
            <a href="#">
                <div>Menu</div>
            </a>
            <CartWidget num="5" />
            {props.children}
        </div>
    );
}

export default NavBar;