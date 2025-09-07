
import { useUserAuth } from "../../hooks/useAuth";


import AuthActions from "./AuthActions"
import AuthProfile from "./AuthProfile"
import Logo from "./Logo"
import Navlinks from "./Navlinks"

export default function Navbar() {
    const { user, userLogged } = useUserAuth();
    return (
        <header className="sticky top-0 z-40 w-full bg-bg shadow-lg border-b border-borderSecondary animate-navbar-fade-in">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 gap-4">
                <div className="flex items-center gap-4 animate-logo-pop">
                    <Logo />
                </div>
                <div className="flex-1 flex justify-center animate-links-slide-in">
                    <Navlinks />
                </div>
                <div className="flex items-center gap-2 animate-auth-fade-in">
                    <AuthActions />
                </div>
                <div className="flex items-center gap-2 animate-auth-fade-in">
                    {userLogged}
                    <AuthProfile />
                </div>
            </nav>
        </header>
    )
}