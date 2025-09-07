export default function Form({ handleSubmit, name, setName, email, setEmail, password, setPassword, passwordConfirmation, setPasswordConfirmation, loading, signupErrors, signupMessage, error }) {
    return (
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
    )
}