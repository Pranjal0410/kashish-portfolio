import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

const LINKS = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#services' },
    { name: 'Insights', href: '#case-studies' },
    { name: 'Expertise', href: '#command-center' },
];

export default function Navigation() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        gsap.from(navRef.current, {
            y: -30,
            opacity: 0,
            duration: 0.8,
            delay: 0.1,
            ease: "power3.out"
        });
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
            setIsMobileMenuOpen(false);
        } else {
            setHidden(false);
        }
        setIsScrolled(latest > 80);
    });

    return (
        <motion.header
            ref={navRef}
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: "-100%", opacity: 0 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${isScrolled ? 'bg-[#F5F0EB]/80 backdrop-blur-2xl shadow-[0_1px_0_rgba(180,160,140,0.1)]' : 'bg-transparent'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[60px] sm:h-[68px] flex items-center justify-between">
                <a href="#top" className="font-serif text-[18px] text-text-primary tracking-[0.05em] hover:opacity-60 transition-opacity">
                    KO<span className="text-accent-bronze">.</span>
                </a>

                <nav className="hidden md:flex items-center gap-7 lg:gap-9">
                    {LINKS.map((link) => (
                        <a key={link.name} href={link.href}
                            className="text-[11px] lg:text-[12px] font-medium tracking-[0.15em] uppercase text-text-secondary hover:text-text-primary link-animated transition-colors duration-300">
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <a href="mailto:kashishoberoi9@gmail.com"
                        className="px-5 py-2 bg-[#2C2522] text-white rounded-full text-[11px] font-medium tracking-[0.1em] uppercase hover:bg-accent-bronze transition-colors duration-300">
                        Get in Touch
                    </a>
                </div>

                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] focus:outline-none z-[60]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Menu"
                >
                    <span className={`block w-5 h-[1.5px] bg-text-primary transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
                    <span className={`block w-5 h-[1.5px] bg-text-primary transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-5 h-[1.5px] bg-text-primary transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-[#F5F0EB] z-[55] flex flex-col justify-center items-center"
                    >
                        <nav className="flex flex-col gap-5 items-center">
                            {LINKS.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + (0.06 * i), duration: 0.4 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="font-serif text-[28px] text-text-primary"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="mailto:kashishoberoi9@gmail.com"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + (0.06 * LINKS.length), duration: 0.4 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-5 px-7 py-3.5 bg-[#2C2522] text-white rounded-full text-[14px] font-medium tracking-wide"
                            >
                                Get in Touch
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
