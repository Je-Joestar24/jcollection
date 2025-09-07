export default function LeftPanel({ isVisible, currentText, heroTexts }) {
    return (
        < div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`
        }>
            {/* Badge */}
            < div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm" >
                <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                    ✨ Premium Collections
                </span>
            </div >

            {/* Main Heading with Typewriter Effect */}
            < div className="space-y-4" >
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <span className="block text-text">Welcome to</span>
                    <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-x">
                        JCollection
                    </span>
                </h1>

                {/* Animated Subtitle */}
                <div className="h-16 flex items-center">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-textSecondary transition-all duration-500 transform">
                        {heroTexts[currentText]}
                    </h2>
                </div>
            </div >

            {/* Description */}
            < p className="text-lg text-textMuted leading-relaxed max-w-lg" >
                Discover, curate, and showcase your most treasured collections.
                From vintage finds to modern masterpieces, JCollection helps you
                organize and share your passion with the world.
            </p >

            {/* CTA Buttons */}
            < div className="flex flex-col sm:flex-row gap-4" >
                <button className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-textInverse font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                    <span className="relative z-10">Start Collecting</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-textInverse transform hover:scale-105 transition-all duration-300">
                    <span className="flex items-center gap-2">
                        <span>Explore Gallery</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </button>
            </div >

            {/* Stats */}
            < div className="grid grid-cols-3 gap-6 pt-8" >
                <div className="text-center">
                    <div className="text-3xl font-bold text-primary animate-count-up">-</div>
                    <div className="text-sm text-textMuted">Collections</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-secondary animate-count-up delay-200">-</div>
                    <div className="text-sm text-textMuted">Users</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-accent animate-count-up delay-400">50+</div>
                    <div className="text-sm text-textMuted">Items</div>
                </div>
            </div >
        </div >
    )
}