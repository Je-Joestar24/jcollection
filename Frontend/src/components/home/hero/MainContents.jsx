import { useState, useEffect } from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

export default function MainContents() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentText, setCurrentText] = useState(0);

    const heroTexts = [
        "Discover Amazing Collections",
        "Curate Your Perfect Style",
        "Explore Unique Finds"
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % heroTexts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative z-10 container mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
                {/* Left Side - Textual Content */}
                <LeftPanel isVisible={isVisible} currentText={currentText} heroTexts={heroTexts} />
                {/* Right Side - Visual Elements */}
                <RightPanel isVisible={isVisible} />
            </div>
        </div>
    )
}