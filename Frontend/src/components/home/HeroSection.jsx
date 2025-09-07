import Background from './hero/Background';
import Scroll from './hero/Scroll';
import MainContents from './hero/MainContents';

export default function HeroSection() {

    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-bg via-bgSecondary to-bgTertiary">
            {/* Background Visual Elements */}
            <Background />
            {/* Main Content */}
            <MainContents />
            {/* Scroll Indicator */}
            <Scroll />
        </section>
    );
}