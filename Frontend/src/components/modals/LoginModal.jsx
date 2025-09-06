import React, { useState, useRef, useEffect } from "react";
import { useUserLogin } from "../../hooks/useAuth";
import Form from "./Login/Form";

export default function LoginModal({ onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, loading, error } = useUserLogin();
    const modalRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    };


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


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay/60 backdrop-blur-sm transition-all duration-300 animate-fade-in">
            <div ref={modalRef} className="bg-card rounded-xl shadow-2xl p-8 w-full max-w-md border border-borderSecondary scale-95 animate-pop-in">
                <button
                    className="absolute top-4 right-4 text-textSecondary hover:text-error transition"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold text-primary mb-6 text-center">Sign In</h2>
                <Form
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    loading={loading}
                    error={error}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}

// Tailwind micro-animations (add to your global CSS or tailwind config):
// .animate-fade-in { animation: fadeIn 0.3s ease; }
// .animate-pop-in { animation: popIn 0.25s cubic-bezier(.4,2,.3,1); }
// .animate-shake { animation: shake 0.3s linear; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes popIn { 0% { transform: scale(0.95); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
// @keyframes shake { 10%, 90% { transform: translateX(-1px); } 20%, 80% { transform: translateX(2px); } 30%, 50%, 70% { transform: translateX(-4px); } 40%, 60% { transform: