import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav className= "navbar" >
            <h1> Counter App </h1>

            <div className= "nav-links" >
                <Link to= "/" > Home </Link>
                <Link to= "/counter" > Counter </Link>
                <Link to= "/about" > About </Link>
            </div>
        </nav>
    );
}

export default NavBar;