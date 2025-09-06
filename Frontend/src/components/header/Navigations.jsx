import { Link } from "react-router-dom"
import AuthActions from "./AuthActions"

export default function Navigations() {
    return (
        <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
            <AuthActions />
        </nav>
    )
}