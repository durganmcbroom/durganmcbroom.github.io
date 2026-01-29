// --- WALLPAPER COMPONENTS (ARTSY LAYER) ---

const SketchSun = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Core */}
        <circle cx="50" cy="50" r="20" className="animate-pulse" style={{ animationDuration: '4s' }} />
        {/* Rays */}
        <path d="M50 20V10 M50 90V80 M20 50H10 M90 50H80 M29 29L22 22 M78 78L71 71 M29 71L22 78 M78 22L71 29" />
    </svg>
);

const SketchCloud = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 120 80" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 60 C10 60 5 50 10 40 C10 25 25 15 40 20 C45 5 65 5 75 20 C85 10 105 15 110 30 C115 40 110 60 100 60 L20 60 Z" />
        <path d="M35 35 L45 35 M60 25 L70 25 M85 35 L95 35" strokeDasharray="2 4" opacity="0.5" />
    </svg>
);

const SketchFlower = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 50 Q50 20 30 30 Q10 40 50 50" />
        <path d="M50 50 Q80 20 70 40 Q60 60 50 50" />
        <path d="M50 50 Q80 80 60 70 Q40 60 50 50" />
        <path d="M50 50 Q20 80 30 60 Q40 40 50 50" />
        <circle cx="50" cy="50" r="5" fill="currentColor" className="opacity-20" />
        <path d="M50 60 Q50 90 40 100" strokeWidth="2" />
    </svg>
);

const TechBrackets = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 20 C10 20 10 50 10 50 C10 50 10 80 30 80" />
        <path d="M70 20 C90 20 90 50 90 50 C90 50 90 80 70 80" />
        <circle cx="50" cy="50" r="2" fill="currentColor" />
        <circle cx="40" cy="50" r="2" fill="currentColor" />
        <circle cx="60" cy="50" r="2" fill="currentColor" />
    </svg>
);

const AbstractLines = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 100 Q 50 20 100 100 T 180 100" opacity="0.5" />
        <path d="M20 120 Q 50 40 100 120 T 180 120" opacity="0.3" />
    </svg>
);

export const Wallpaper = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none h-full w-full">
            {/* Top Right Sun - Warm Tech */}
            <SketchSun className="absolute -top-10 -right-10 w-64 h-64 text-orange-400 opacity-20 transform rotate-12" />

            {/* Top Left Cloud - Infrastructure */}
            <SketchCloud className="absolute top-20 -left-10 w-64 h-48 text-slate-400 opacity-15" />

            {/* Bottom Right Flower - Organic Growth */}
            <SketchFlower className="absolute bottom-10 right-10 w-48 h-48 text-orange-400 opacity-25 transform -rotate-12" />

            {/* Middle Left Brackets - Coding Roots */}
            <TechBrackets className="absolute top-1/2 left-[5%] w-32 h-32 text-slate-400 opacity-20" />

            {/* Abstract Flow - Bottom Left */}
            <AbstractLines className="absolute bottom-32 -left-10 w-96 h-96 text-orange-300 opacity-30 transform rotate-45" />

            {/* Random decorative dots */}
            <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-orange-400 opacity-30" />
            <div className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full bg-slate-400 opacity-20" />
        </div>
    );
};