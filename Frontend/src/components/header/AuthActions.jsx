import { useUI } from "../../hooks/useUI"

import { useUserAuth } from "../../hooks/useAuth";

export default function AuthActions() {
    const { openModal } = useUI();

    const { user, userLogged } = useUserAuth();

    // Only show if user is not logged in and user data exists
    if (userLogged || user) return null;
    
    return (
        <div className="flex gap-2">
            <button
                onClick={() => openModal("login")}
                className="px-4 py-1 rounded-lg bg-primary text-white font-semibold shadow hover:bg-accent transition-all duration-300 active:scale-95 animate-auth-btn"
            >
                Login
            </button>
            <button
                onClick={() => openModal("signup")}
                className="px-4 py-1 rounded-lg bg-secondary text-white font-semibold shadow hover:bg-accent transition-all duration-300 active:scale-95 animate-auth-btn"
            >
                Signup
            </button>
        </div>
    )
}