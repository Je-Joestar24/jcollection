export default function RightPanel({ isVisible }) {
    return (<div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
        {/* Main Card Container */}
        <div className="relative">
            {/* Background Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6 scale-105 blur-sm"></div>

            {/* Main Card */}
            <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl p-8 border border-borderAccent shadow-2xl">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-error rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-warning rounded-full animate-pulse delay-200"></div>
                        <div className="w-3 h-3 bg-success rounded-full animate-pulse delay-400"></div>
                    </div>
                    <div className="text-xs text-textMuted font-mono">JCollection v2.0</div>
                </div>

                {/* Card Content */}
                <div className="space-y-6">
                    {/* Collection Preview */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-4 transform hover:scale-105 transition-transform duration-300">
                            <div className="w-full h-20 bg-gradient-to-r from-primary to-secondary rounded-lg mb-3 animate-pulse"></div>
                            <div className="h-3 bg-text/20 rounded mb-2"></div>
                            <div className="h-2 bg-text/10 rounded w-3/4"></div>
                        </div>
                        <div className="bg-gradient-to-br from-accent/20 to-warning/20 rounded-xl p-4 transform hover:scale-105 transition-transform duration-300 delay-100">
                            <div className="w-full h-20 bg-gradient-to-r from-accent to-warning rounded-lg mb-3 animate-pulse delay-200"></div>
                            <div className="h-3 bg-text/20 rounded mb-2"></div>
                            <div className="h-2 bg-text/10 rounded w-2/3"></div>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm text-textSecondary">
                            <span>Collection Progress</span>
                            <span>75%</span>
                        </div>
                        <div className="w-full bg-bgSecondary rounded-full h-2">
                            <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-3/4 animate-progress-bar"></div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <button className="flex-1 py-2 px-4 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors duration-200">
                            Add Item
                        </button>
                        <button className="flex-1 py-2 px-4 bg-secondary/10 text-secondary rounded-lg text-sm font-medium hover:bg-secondary/20 transition-colors duration-200">
                            Share
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce delay-1000"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-success rounded-full animate-ping delay-2000"></div>
        </div>
    </div>
    )
}