import { Link } from "react-router-dom"
import { useUserAuth } from "../../hooks/useAuth"

export default function Navlinks() {
    const { user, userLogged } = useUserAuth()

    return (
        <div className="flex gap-6 text-textSecondary font-medium text-lg">
            {(user || userLogged) ? (
                <Link
                    to="/products/"
                    className="hover:text-primary transition-colors duration-200 underline-offset-4 hover:underline"
                >
                    Products
                </Link>
            ) : (
                <>
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
                </>
            )}
        </div>
    )
}