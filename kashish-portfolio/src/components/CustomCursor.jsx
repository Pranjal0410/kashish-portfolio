import { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const cursorRef = useRef(null);

    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };

    const mouseX = useSpring(0, springConfig);
    const mouseY = useSpring(0, springConfig);

    useEffect(() => {
        // Check if device has touch capability, if so, disable custom cursor
        if (window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        const manageMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const manageMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', manageMouseMove);
        window.addEventListener('mouseover', manageMouseOver);

        return () => {
            window.removeEventListener('mousemove', manageMouseMove);
            window.removeEventListener('mouseover', manageMouseOver);
        };
    }, []);

    if (window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-accent-bronze rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border-2 border-accent-bronze/50 rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'rgba(139, 115, 85, 0.1)' : 'transparent',
                    borderWidth: isHovering ? '1px' : '2px',
                }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
            />
        </>
    );
}
