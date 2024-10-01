import logo from "./images/logo.jpg"
import { Link } from "react-router-dom";

function Logo(){
    return (
        <div className="text-center py-5">
            <Link to="/">
                <img src={logo} class="logo-circle" alt="EO Comics Logo" />
            </Link>
        </div>
    );
}

export default Logo;