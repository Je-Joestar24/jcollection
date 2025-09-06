import { Link } from "react-router-dom"

export default function Navlinks() {
    return (
        <div className="flex gap-6 text-textSecondary font-medium text-lg">
            <Link
                to="/"
                className="hover:text-primary transition-colors duration-200 underline-offset-4 hover:underline"
            >
                Home
            </Link>
            <Link
                to="/about"
                className="hover:text-primary transition-colors duration-200 underline-offset-4 hover:underline"
            >
                About
            </Link>
        </div>
    )
}