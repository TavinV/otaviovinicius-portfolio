import { NavLink } from "react-router-dom";

const Logo = () => {
    return (
        <a href="/" className="hover:scale-105 transition-all duration-300">
            <img src="/img/logo.png" className={"h-12"} />
        </a>
    );
}

export default Logo;
