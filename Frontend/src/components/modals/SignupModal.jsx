import React, { useState, useRef, useEffect } from "react";
import { useUserAuth } from "../../hooks/useAuth";

export default function SignupModal({ onClose }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const { signup, loading, signupErrors, signupMessage, error } = useUserAuth();
    const modalRef = useRef(null);

    // Animate modal entrance with React
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true);
    }, []);

    // Click outside to close
    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                if (onClose) onClose();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(name, email, password, passwordConfirmation);
    };

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-overlay/60 backdrop-blur-sm transition-all duration-300 ${show ? "animate-fade-in" : ""}`}>
            <div
                ref={modalRef}
                className={`bg-card rounded-xl shadow-2xl p-8 w-full max-w-md border border-borderSecondary scale-95 transition-transform duration-500 ${show ? "animate-pop-in" : ""}`}
            >
                <button
                    className="absolute top-4 right-4 text-textSecondary hover:text-error transition"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold text-primary mb-6 text-center animate-title-drop">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="animate-input-slide">
                        <label className="block text-textSecondary mb-1" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 rounded-lg border border-border focus:border-primary focus:outline-none bg-bgSecondary text-text transition"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        {signupErrors?.name && (
                            <div className="text-error text-xs mt-1 animate-shake">{signupErrors.name[0]}</div>
                        )}
                    </div>
                    <div className="animate-input-slide" style={{ animationDelay: "0.05s" }}>
                        <label className="block text-textSecondary mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-lg border border-border focus:border-primary focus:outline-none bg-bgSecondary text-text transition"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {signupErrors?.email && (
                            <div className="text-error text-xs mt-1 animate-shake">{signupErrors.email[0]}</div>
                        )}
                    </div>
                    <div className="animate-input-slide" style={{ animationDelay: "0.1s" }}>
                        <label className="block text-textSecondary mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 rounded-lg border border-border focus:border-primary focus:outline-none bg-bgSecondary text-text transition"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {signupErrors?.password && (
                            <div className="text-error text-xs mt-1 animate-shake">{signupErrors.password[0]}</div>
                        )}
                    </div>
                    <div className="animate-input-slide" style={{ animationDelay: "0.15s" }}>
                        <label className="block text-textSecondary mb-1" htmlFor="passwordConfirmation">
                            Confirm Password
                        </label>
                        <input
                            id="passwordConfirmation"
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full px-4 py-2 rounded-lg border border-border focus:border-primary focus:outline-none bg-bgSecondary text-text transition"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            required
                        />
                    </div>
                    {(error || signupMessage) && (
                        <div className={`text-center text-sm mt-2 ${signupMessage ? "text-success animate-fade-in" : "text-error animate-shake"}`}>
                            {signupMessage || error}
                        </div>
                    )}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 rounded-lg bg-primary text-white font-semibold hover:bg-accent transition-all duration-200 shadow-md active:scale-95 animate-auth-btn"
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="animate-spin h-5 w-5 border-2 border-t-transparent border-white rounded-full"></span>
                                Signing up...
                            </span>
                        ) : (
                            "Sign Up"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

// Tailwind micro/heavy animations (add to your global CSS or tailwind config):
/*
@layer utilities {
  .animate-fade-in { animation: fadeIn 0.3s ease; }
  .animate-pop-in { animation: popIn 0.5s cubic-bezier(.4,2,.3,1); }
  .animate-shake { animation: shake 0.3s linear; }
  .animate-title-drop { animation: titleDrop 0.5s cubic-bezier(.4,2,.3,1); }
  .animate-input-slide { animation: inputSlide 0.5s cubic-bezier(.4,2,.3,1); }
  .animate-auth-btn { animation: authBtnPop 0.5s cubic-bezier(.4,2,.3,1); }
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes popIn { 0% { transform: scale(0.95); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
@keyframes shake { 10%, 90% { transform: translateX(-1px); } 20%, 80% { transform: translateX(2px); } 30%, 50%, 70% { transform: translateX(-4px); } 40%, 60% { transform: translateX(4px); } }
@keyframes titleDrop { 0% { opacity: 0; transform: translateY(-30px);} 100% { opacity: 1; transform: translateY(0);} }
@keyframes inputSlide { 0% { opacity: 0; transform: translateX(-40px);} 100% { opacity: 1; transform: translateX(0);} }
@keyframes authBtnPop { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
*/
