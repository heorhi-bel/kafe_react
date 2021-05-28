import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="pink lighten-3">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                    React Shop
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/heorhi-bel/shop_react"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
