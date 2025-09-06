import React from "react";

export default function Form({
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    handleSubmit,
}) {
    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label className="block text-textSecondary mb-1" htmlFor="email">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-border focus:border-primary focus:outline-none bg-bgSecondary text-text transition"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoFocus
                />
            </div>
            <div>
                <label className="block text-textSecondary mb-1" htmlFor="password">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    className="w-full px-4 py-2 rounded-lg border border-border focus:border-primary focus:outline-none bg-bgSecondary text-text transition"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            {error && (
                <div className="text-error text-sm text-center animate-shake">{error}</div>
            )}
            <button
                type="submit"
                disabled={loading}
                className="w-full py-2 rounded-lg bg-primary text-white font-semibold hover:bg-accent transition-all duration-200 shadow-md active:scale-95"
            >
                {loading ? (
                    <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin h-5 w-5 border-2 border-t-transparent border-white rounded-full"></span>
                        Signing in...
                    </span>
                ) : (
                    "Login"
                )}
            </button>
        </form>
    );
}