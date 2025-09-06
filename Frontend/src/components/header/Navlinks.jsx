import { Link } from "react-router-dom"

export default function Navlinks() {
    return (
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </nav>
    )
}