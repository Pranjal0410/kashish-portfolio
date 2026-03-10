import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const containerRef = useRef(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".footer-el", {
                scrollTrigger: { trigger: containerRef.current, start: "top 82%" },
                y: 35,
                opacity: 0,
                stagger: 0.08,
                duration: 0.9,
                ease: "power3.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleCopy = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText("kashishoberoi9@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer id="connect" ref={containerRef} className="py-24 lg:py-32 relative">
            <div className="max-w-3xl mx-auto px-6 text-center">

                <div className="footer-el flex items-center justify-center gap-5 mb-4">
                    <div className="h-px bg-accent-bronze/20 w-10" />
                    <span className="font-mono text-[10px] text-accent-bronze tracking-[0.2em] uppercase">05</span>
                    <div className="h-px bg-accent-bronze/20 w-10" />
                </div>

                <h2 className="footer-el font-serif text-[30px] sm:text-[38px] md:text-[46px] tracking-[-0.02em] text-text-primary leading-[1.1] mb-5">
                    Let&rsquo;s connect
                </h2>

                <p className="footer-el font-sans text-[15px] sm:text-[16px] text-[#5a4e44] leading-[1.75] mb-10 max-w-md mx-auto">
                    Interested in conversations about business strategy,
                    marketing systems, and customer thinking? I'd love to hear from you.
                </p>

                <div className="footer-el mb-6">
                    <motion.a
                        href="mailto:kashishoberoi9@gmail.com"
                        whileHover={{ scale: 1.03, boxShadow: "0 12px 40px rgba(44,37,34,0.2)" }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 bg-[#2C2522] text-white rounded-full text-[13px] sm:text-sm font-medium tracking-wider uppercase hover:bg-accent-bronze transition-colors duration-400 shadow-lg"
                    >
                        Get in Touch
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                        </svg>
                    </motion.a>
                </div>

                <div className="footer-el mb-12">
                    <a href="mailto:kashishoberoi9@gmail.com"
                       className="text-[14px] sm:text-[15px] font-mono text-[#9B8E82] hover:text-[#2C2522] transition-colors duration-300 tracking-wide">
                        kashishoberoi9@gmail.com
                    </a>
                </div>

                {/* Socials */}
                <div className="footer-el flex items-center justify-center gap-3 mb-20">
                    <motion.a href="https://www.linkedin.com/in/kashishoberoiofficial/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}
                        className="group w-11 h-11 rounded-full border border-[#2C2522]/10 flex items-center justify-center hover:bg-[#2C2522] hover:border-[#2C2522] transition-all duration-300">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-[#5a4e44] group-hover:text-white transition-colors">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                            <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                        </svg>
                    </motion.a>
                    <motion.a href="https://medium.com/@kashishoberoi9" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}
                        className="group w-11 h-11 rounded-full border border-[#2C2522]/10 flex items-center justify-center hover:bg-[#2C2522] hover:border-[#2C2522] transition-all duration-300">
                        <span className="text-[#5a4e44] group-hover:text-white transition-colors font-serif font-bold text-sm">M</span>
                    </motion.a>
                    <motion.button onClick={handleCopy} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}
                        className="group relative w-11 h-11 rounded-full border border-[#2C2522]/10 flex items-center justify-center hover:bg-[#2C2522] hover:border-[#2C2522] transition-all duration-300">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#6B5E54] group-hover:text-white transition-colors">
                            <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                        {copied && (
                            <span className="absolute -top-9 left-1/2 -translate-x-1/2 text-[10px] text-white bg-[#2C2522] py-1 px-2.5 rounded font-mono tracking-wide pointer-events-none">
                                Copied!
                            </span>
                        )}
                    </motion.button>
                </div>

                <div className="footer-el flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-[#2C2522]/8 gap-2">
                    <p className="font-mono text-[10px] text-[#9B8E82] uppercase tracking-[0.15em]">
                        &copy; {new Date().getFullYear()} Kashish Oberoi
                    </p>
                    <p className="font-serif italic text-[13px] text-[#9B8E82]">
                        Designed with intention
                    </p>
                </div>
            </div>
        </footer>
    );
}
