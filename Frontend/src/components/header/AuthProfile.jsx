import { useState, useRef } from "react";
import { useUserAuth } from "../../hooks/useAuth";

export default function AuthProfile() {
    const { user, userLogged, logout } = useUserAuth();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Only show if user is logged in and user data exists
    if (!userLogged || !user) return null;

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-card border border-borderSecondary shadow hover:bg-primary/10 transition-all duration-300"
                onClick={() => setOpen((v) => !v)}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-lg animate-gradient-x">
                    {user.name ? user.name[0].toUpperCase() : "U"}
                </span>
                <span className="hidden sm:block text-text font-semibold">{user.name}</span>
            </button>
            {open && (
                <div
                    className="absolute right-0 mt-2 w-64 bg-card border border-borderSecondary rounded-xl shadow-lg p-4 z-50 animate-pop-in"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                >
                    <div className="mb-4 text-center">
                        <div className="text-lg font-bold text-primary">{user.name}</div>
                        <div className="text-sm text-textMuted">{user.email}</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className="w-full py-2 rounded-lg bg-secondary text-white font-semibold hover:bg-primary transition-all duration-200 shadow active:scale-95">
                            Profile
                        </button>
                        <button onClick={logout} className="w-full py-2 rounded-lg bg-error text-white font-semibold hover:bg-warning transition-all duration-200 shadow active:scale-95">
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}