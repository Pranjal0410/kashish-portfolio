import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const socials = [
    {
        name: "LinkedIn",
        subtitle: "Let's connect professionally",
        href: "https://www.linkedin.com/in/kashishoberoiofficial/",
        hoverBg: "hover:bg-[#0A66C2] hover:border-[#0A66C2]",
        hoverShadow: "hover:shadow-[0_20px_60px_rgba(10,102,194,0.2)]",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
        ),
    },
    {
        name: "Medium",
        subtitle: "Read my articles & insights",
        href: "https://medium.com/@kashishoberoi9",
        hoverBg: "hover:bg-[#1A1A1A] hover:border-[#1A1A1A]",
        hoverShadow: "hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
        ),
    },
    {
        name: "Email",
        subtitle: "kashishoberoi9@gmail.com",
        href: "mailto:kashishoberoi9@gmail.com",
        hoverBg: "hover:bg-[#8B7355] hover:border-[#8B7355]",
        hoverShadow: "hover:shadow-[0_20px_60px_rgba(139,115,85,0.2)]",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="3"/>
                <path d="M2 7l8.913 5.737a2 2 0 002.174 0L22 7"/>
            </svg>
        ),
    },
];

export default function Footer() {
    const containerRef = useRef(null);

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

    return (
        <footer id="connect" ref={containerRef} className="py-24 lg:py-32 relative">
            <div className="max-w-3xl mx-auto px-6 text-center">

                <div className="footer-el flex items-center justify-center gap-5 mb-4">
                    <div className="h-px bg-accent-bronze/20 w-10" />
                    <span className="font-mono text-[10px] text-accent-bronze tracking-[0.2em] uppercase">06</span>
                    <div className="h-px bg-accent-bronze/20 w-10" />
                </div>

                <h2 className="footer-el font-serif text-[30px] sm:text-[38px] md:text-[46px] tracking-[-0.02em] text-text-primary leading-[1.1] mb-5">
                    Let&rsquo;s connect
                </h2>

                <p className="footer-el font-sans text-[15px] sm:text-[16px] text-[#5a4e44] leading-[1.75] mb-12 max-w-md mx-auto">
                    Interested in conversations about business strategy,
                    marketing systems, and customer thinking? I'd love to hear from you.
                </p>

                {/* Social Cards */}
                <div className="footer-el grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                    {socials.map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.href}
                            target={social.name !== "Email" ? "_blank" : undefined}
                            rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.97 }}
                            className={`group relative p-6 rounded-2xl text-left
                                        bg-white/40 backdrop-blur-sm border border-[#C4A882]/10
                                        ${social.hoverBg} ${social.hoverShadow}
                                        transition-all duration-500 overflow-hidden`}
                        >
                            <div className="mb-4 text-[#2C2522] group-hover:text-white transition-colors duration-500">
                                {social.icon}
                            </div>

                            <div className="text-sm font-medium text-[#2C2522] group-hover:text-white transition-colors duration-500">
                                {social.name}
                            </div>
                            <div className="text-[11px] text-[#9B8E82] group-hover:text-white/60 transition-colors duration-500 mt-1">
                                {social.subtitle}
                            </div>

                            {/* Arrow on hover */}
                            <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100
                                            translate-x-2 group-hover:translate-x-0
                                            transition-all duration-500">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                     stroke="white" strokeWidth="2">
                                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                                </svg>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <p className="footer-el text-[11px] text-[#9B8E82]/60 mb-20 font-mono tracking-[0.05em]">
                    Usually responds within 24 hours
                </p>

                {/* Footer credits */}
                <div className="footer-el flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-[#2C2522]/8 gap-3">
                    <p className="font-mono text-[10px] text-[#9B8E82] uppercase tracking-[0.15em]">
                        &copy; {new Date().getFullYear()} Kashish Oberoi
                    </p>

                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-[11px] tracking-[0.1em] uppercase text-[#9B8E82]/40
                                       hover:text-[#8B7355] transition-colors duration-300
                                       flex items-center gap-2 group font-mono">
                        Back to top
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2"
                             className="group-hover:-translate-y-0.5 transition-transform">
                            <path d="M12 19V5M5 12l7-7 7 7"/>
                        </svg>
                    </button>

                    <p className="font-serif italic text-[13px] text-[#9B8E82]/40">
                        Designed with intention
                    </p>
                </div>
            </div>
        </footer>
    );
}
