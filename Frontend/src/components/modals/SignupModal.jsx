import React, { useState, useRef, useEffect } from "react";
import { useUserAuth } from "../../hooks/useAuth";
import Form from "./signup/Form";

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
                <Form
                    handleSubmit={handleSubmit}
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    passwordConfirmation={passwordConfirmation}
                    setPasswordConfirmation={setPasswordConfirmation}
                    loading={loading}
                    signupErrors={signupErrors}
                    signupMessage={signupMessage}
                    error={error}
                />
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
