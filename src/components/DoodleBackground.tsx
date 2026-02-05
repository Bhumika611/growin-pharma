import { motion } from 'framer-motion';

const PawIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 14C13.6569 14 15 15.3431 15 17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17C9 15.3431 10.3431 14 12 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10C8.82843 10 9.5 9.10457 9.5 8C9.5 6.89543 8.82843 6 8 6C7.17157 6 6.5 6.89543 6.5 8C6.5 9.10457 7.17157 10 8 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 10C16.8284 10 17.5 9.10457 17.5 8C17.5 6.89543 16.8284 6 16 6C15.1716 6 14.5 6.89543 14.5 8C14.5 9.10457 15.1716 10 16 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 13C5.32843 13 6 12.1046 6 11C6 9.89543 5.32843 9 4.5 9C3.67157 9 3 9.89543 3 11C3 12.1046 3.67157 13 4.5 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.5 13C20.3284 13 21 12.1046 21 11C21 9.89543 20.3284 9 19.5 9C18.6716 9 18 9.89543 18 11C18 12.1046 18.6716 13 19.5 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const BoneIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M17.5 14C19.433 14 21 15.567 21 17.5C21 19.433 19.433 21 17.5 21C16.3 21 15.2 20.4 14.5 19.5L9.5 19.5C8.8 20.4 7.7 21 6.5 21C4.567 21 3 19.433 3 17.5C3 15.567 4.567 14 6.5 14C7.1 14 7.7 14.2 8.2 14.5L14.5 9.5C14.2 8.9 14 8.2 14 7.5C14 5.567 15.567 4 17.5 4C19.433 4 21 5.567 21 7.5C21 9.433 19.433 11 17.5 11C16.9 11 16.3 10.8 15.8 10.5L9.5 14.5C9.8 15.1 10 15.8 10 16.5C10 16.7 10 16.8 9.9 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const PillIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="7" y="3" width="10" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(45 12 12)" />
        <line x1="8.5" y1="15.5" x2="15.5" y2="8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const BandageIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="2" y="9" width="20" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-45 12 12)" />
        <rect x="9.5" y="9.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-45 12 12)" />
        <circle cx="11" cy="11" r="0.5" fill="currentColor" transform="rotate(-45 12 12)" />
        <circle cx="13" cy="11" r="0.5" fill="currentColor" transform="rotate(-45 12 12)" />
        <circle cx="11" cy="13" r="0.5" fill="currentColor" transform="rotate(-45 12 12)" />
        <circle cx="13" cy="13" r="0.5" fill="currentColor" transform="rotate(-45 12 12)" />
    </svg>
);

const MedicalKitIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="3" y="6" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 6V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 10V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 13H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const StethoscopeIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M4 8C4 8 4 12 8 12C12 12 12 8 12 8V4M12 4H16M12 4V2M16 4V6C16 8.20914 14.2091 10 12 10M12 10C12 10 12 14 16 14C20 14 20 10 20 10V4H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 14V22H8M12 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const SyringeIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M18 2L22 6M17 11L11 5L15 2L21 8L18 11ZM11 5L5 11M5 11L2 14M5 11L8 14M5 11L2 8M11 5L14 8M14 8L11 11M14 8L17 5M7 13L4 16L6 18L9 15M10 10L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CrossIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CatIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 5C10 5 8 6 7 8C6 7 4 7 3 8C2 10 2 13 4 15C5 17 8 19 12 19C16 19 19 17 20 15C22 13 22 10 21 8C20 7 18 7 17 8C16 6 14 5 12 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12C9.55228 12 10 11.5523 10 11C10 10.4477 9.55228 10 9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12Z" fill="currentColor" />
        <path d="M15 12C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10C14.4477 10 14 10.4477 14 11C14 11.5523 14.4477 12 15 12Z" fill="currentColor" />
        <path d="M11 14L12 15L13 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const DogIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 5C9 5 7 7 7 10C7 13 9 15 12 15C15 15 17 13 17 10C17 7 15 5 12 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 10C5.5 10 4 11 4 13C4 15 5.5 16 7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 10C18.5 10 20 11 20 13C20 15 18.5 16 17 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 9C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8C9 8.55228 9.44772 9 10 9Z" fill="currentColor" />
        <path d="M14 9C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7C13.4477 7 13 7.44772 13 8C13 8.55228 13.4477 9 14 9Z" fill="currentColor" />
        <path d="M11 12H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const TurtleIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 7C8 7 5 9 5 12C5 15 8 17 12 17C16 17 19 15 19 12C19 9 16 7 12 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 12C19 12 22 11 22 10C22 9 20 9 20 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 12C5 12 2 11 2 10C2 9 4 9 4 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 17C8 17 7 20 8 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 17C16 17 17 20 16 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 7C10 7 9 4 12 4C15 4 14 7 14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const BunnyIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 10C10 10 8 11 8 14C8 17 10 19 12 19C14 19 16 17 16 14C16 11 14 10 12 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 10C10 10 8 5 9 4C10 3 11 7 11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 10C14 10 16 5 15 4C14 3 13 7 13 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="11" cy="14" r="0.5" fill="currentColor" />
        <circle cx="13" cy="14" r="0.5" fill="currentColor" />
    </svg>
);

const MagnifierIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 16L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 11C9 11 10 10 11 10C12 10 13 11 13 11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const DoodleItem = ({ children, x, y, rotate, delay, duration = 10, scale = 1, opacity = 0.25 }: any) => (
    <motion.div
        className="absolute pointer-events-none"
        style={{ left: x, top: y, color: 'hsl(var(--primary))' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity,
            scale,
            y: [0, -20, 0],
            rotate: [rotate, rotate + 10, rotate - 10, rotate]
        }}
        transition={{
            opacity: { duration: 1, delay },
            scale: { duration: 1, delay },
            y: { duration: duration, repeat: Infinity, ease: "easeInOut", delay },
            rotate: { duration: duration * 1.2, repeat: Infinity, ease: "easeInOut", delay }
        }}
    >
        {children}
    </motion.div>
);

export const DoodleBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            {/* Top Section */}
            <DoodleItem x="8%" y="12%" rotate={-15} delay={0.2} scale={1.2} opacity={0.4}>
                <CatIcon className="w-14 h-14" />
            </DoodleItem>
            <DoodleItem x="88%" y="15%" rotate={10} delay={0.8} scale={1.4} opacity={0.4}>
                <DogIcon className="w-16 h-16" />
            </DoodleItem>
            <DoodleItem x="45%" y="8%" rotate={45} delay={3.2} scale={0.8} opacity={0.2}>
                <TurtleIcon className="w-12 h-12" />
            </DoodleItem>

            {/* Upper Middle */}
            <DoodleItem x="3%" y="35%" rotate={20} delay={0.5} scale={1.3} opacity={0.25}>
                <BoneIcon className="w-12 h-12" />
            </DoodleItem>
            <DoodleItem x="78%" y="28%" rotate={-25} delay={1.1} scale={1.2} opacity={0.3}>
                <StethoscopeIcon className="w-14 h-14" />
            </DoodleItem>
            <DoodleItem x="65%" y="15%" rotate={15} delay={3.8} scale={0.7} opacity={0.2}>
                <BunnyIcon className="w-12 h-12" />
            </DoodleItem>

            {/* Lower Middle */}
            <DoodleItem x="20%" y="45%" rotate={15} delay={1.4} scale={1.1} opacity={0.15}>
                <MedicalKitIcon className="w-12 h-12" />
            </DoodleItem>
            <DoodleItem x="82%" y="48%" rotate={-10} delay={1.7} scale={1.2} opacity={0.15}>
                <SyringeIcon className="w-14 h-14" />
            </DoodleItem>
            <DoodleItem x="30%" y="55%" rotate={-10} delay={3.8} scale={1.0} opacity={0.15}>
                <MagnifierIcon className="w-12 h-12" />
            </DoodleItem>

            {/* Bottom Section */}
            <DoodleItem x="12%" y="78%" rotate={30} delay={2.0} scale={1.4} opacity={0.3}>
                <PawIcon className="w-12 h-12" />
            </DoodleItem>
            <DoodleItem x="5%" y="88%" rotate={-10} delay={2.3} scale={1.2} opacity={0.25}>
                <BandageIcon className="w-14 h-14" />
            </DoodleItem>
            <DoodleItem x="85%" y="82%" rotate={15} delay={2.6} scale={1.5} opacity={0.3}>
                <CatIcon className="w-14 h-14" />
            </DoodleItem>
            <DoodleItem x="72%" y="88%" rotate={-20} delay={2.9} scale={1.3} opacity={0.25}>
                <HeartIcon className="w-12 h-12" />
            </DoodleItem>

            {/* Decorative dots/accents */}
            <DoodleItem x="35%" y="85%" rotate={-30} delay={3.5} scale={0.9} opacity={0.15}>
                <PillIcon className="w-10 h-10" />
            </DoodleItem>
            <DoodleItem x="55%" y="92%" rotate={-15} delay={4.1} scale={0.8} opacity={0.15}>
                <CrossIcon className="w-8 h-8" />
            </DoodleItem>
            <DoodleItem x="25%" y="20%" rotate={0} delay={4.4} scale={0.5} opacity={0.1}>
                <PawIcon className="w-6 h-6" />
            </DoodleItem>
            <DoodleItem x="75%" y="65%" rotate={0} delay={4.7} scale={0.6} opacity={0.1}>
                <HeartIcon className="w-6 h-6" />
            </DoodleItem>
        </div>
    );
};
