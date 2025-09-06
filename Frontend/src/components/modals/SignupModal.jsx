export default function SignupModal({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay/60 backdrop-blur-sm transition-all duration-300 animate-fade-in">
            <div className="bg-card rounded-xl shadow-2xl p-8 w-full max-w-md border border-borderSecondary scale-95 animate-pop-in">
                <button
                    className="absolute top-4 right-4 text-textSecondary hover:text-error transition"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold text-primary mb-6 text-center">Sign Up</h2>
                {/* Signup form goes here */}
                <p className="text-center text-textSecondary">Signup form will be here.</p>
            </div>
        </div>
    );
}
