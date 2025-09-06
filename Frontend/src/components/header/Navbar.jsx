import AuthActions from "./AuthActions"
import Logo from "./Logo"
import Navlinks from "./Navlinks"

export default function Navbar() {
    return (
        <header>
            <Logo />
            <Navlinks />
            <AuthActions />
        </header>
    )
}