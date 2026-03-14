import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

export default function Hero() {
    const containerRef = useRef(null);
    const tagRef = useRef(null);
    const descRef = useRef(null);
    const btnRef = useRef(null);
    const visualRef = useRef(null);
    const scrollIndRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.4 });

            tl.from(".hero-firstname", {
                y: 120,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1.2,
                ease: "power4.out"
            })
            .from(".hero-lastname", {
                y: 120,
                opacity: 0,
                filter: "blur(8px)",
                duration: 1.2,
                ease: "power4.out"
            }, 0.12)
            .from(tagRef.current, {
                letterSpacing: "0.8em",
                opacity: 0,
                y: 10,
                duration: 1,
                ease: "power2.out"
            }, 0.5)
            .from(".hero-desc-line", {
                y: 45,
                opacity: 0,
                stagger: 0.18,
                duration: 0.8,
                ease: "power3.out"
            }, 0.7)
            .from(btnRef.current.children, {
                y: 30,
                opacity: 0,
                scale: 0.85,
                stagger: 0.1,
                duration: 0.7,
                ease: "back.out(1.7)"
            }, 0.95)
            .from(visualRef.current, {
                x: 80,
                opacity: 0,
                scale: 1.06,
                rotation: 1.5,
                duration: 1.4,
                ease: "power3.out"
            }, 0.5)
            .from(scrollIndRef.current, {
                opacity: 0,
                y: -15,
                duration: 0.6
            }, 1.3);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="top" ref={containerRef} className="min-h-[100svh] relative flex items-center pt-20 sm:pt-24 pb-12">
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center z-10">

                {/* Left Column */}
                <div className="lg:col-span-7 flex flex-col">
                    <h1 className="font-serif font-normal tracking-[-0.04em] leading-[0.95] mb-7 text-text-primary"
                        style={{ fontSize: 'clamp(52px, 8vw, 112px)' }}>
                        <span className="hero-firstname block overflow-hidden">
                            <span className="inline-block">KASHISH</span>
                        </span>
                        <span className="hero-lastname block overflow-hidden mt-[-0.05em]">
                            <span className="inline-block">OBEROI</span>
                        </span>
                    </h1>

                    <div ref={tagRef} className="font-mono text-accent-bronze font-medium text-[10px] sm:text-[11px] tracking-[0.2em] uppercase mb-8 flex items-center gap-3">
                        <div className="w-8 h-px bg-accent-bronze/50" />
                        CRM &bull; MARKETING &bull; STRATEGY
                    </div>

                    <div ref={descRef} className="max-w-xl mb-12">
                        <div className="overflow-hidden">
                            <div className="hero-desc-line mb-3 font-serif font-semibold text-text-primary text-[22px] sm:text-[26px] md:text-[32px] leading-[1.25]">
                                Turning customer insight into<br className="hidden sm:block" /> business growth.
                            </div>
                        </div>
                        <div className="overflow-hidden">
                            <div className="hero-desc-line text-text-secondary text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] font-sans font-normal max-w-md">
                                I explore how data, systems, and strategy shape modern organizations — building smarter customer experiences.
                            </div>
                        </div>
                    </div>

                    <div ref={btnRef} className="flex flex-wrap items-center gap-4">
                        <a href="mailto:kashishoberoi9@gmail.com"
                           className="group relative px-7 sm:px-8 py-3.5 sm:py-4 bg-[#2C2522] text-white rounded-full text-[13px] sm:text-sm font-medium tracking-wider uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_rgba(44,37,34,0.25)]">
                            <span className="relative z-10 flex items-center gap-2.5">
                                Get in Touch
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-accent-bronze scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </a>
                        <a href="#case-studies" className="px-7 py-3.5 rounded-full text-[13px] sm:text-sm font-medium tracking-wider uppercase text-text-primary border border-[#2C2522]/15 hover:border-[#2C2522]/40 hover:bg-white/40 transition-all duration-300">
                            My Insights
                        </a>
                    </div>
                </div>

                {/* Right Column — Photo */}
                <div ref={visualRef} className="lg:col-span-5 relative mt-6 lg:mt-0 w-full flex justify-center lg:justify-end">
                    <div className="relative w-[85%] sm:w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[440px]">

                        {/* Main photo — face centered */}
                        <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_30px_100px_rgba(44,37,34,0.2)]">
                            <img
                                src="/profile.jpeg"
                                alt="Kashish Oberoi"
                                className="w-full h-full object-cover"
                                style={{
                                    objectPosition: 'center bottom',
                                    filter: 'contrast(1.08) brightness(0.96) saturate(0.85)',
                                }}
                                loading="eager"
                            />
                            {/* Gradient overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2C2522]/45 via-transparent to-[#2C2522]/10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2C2522]/8 to-transparent" />
                            <div className="absolute inset-0 bg-[#C4A882]/[0.05] mix-blend-multiply" />
                        </div>

                        {/* Frame accent — offset border */}
                        <div className="absolute -inset-3 rounded-[28px] border border-accent-bronze/12 pointer-events-none" />

                        {/* Floating decorative elements */}
                        <motion.div
                            animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute -top-6 -right-4 w-14 h-14 rounded-full border border-accent-sage/20 pointer-events-none"
                        />
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.5 }}
                            className="absolute -bottom-4 -right-6 w-8 h-8 rounded-full bg-accent-warm/15 pointer-events-none"
                        />
                        <div className="absolute top-[15%] -left-6 w-12 h-px bg-accent-bronze/20 pointer-events-none" />
                        <div className="absolute top-[15%] -left-6 w-px h-12 bg-accent-bronze/20 pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div ref={scrollIndRef} className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 z-10">
                <span className="text-[9px] tracking-[0.25em] uppercase font-mono text-text-secondary">Scroll</span>
                <div className="w-px h-8 bg-text-secondary/40 rounded-full overflow-hidden relative">
                    <motion.div
                        animate={{ y: [0, 32, 0] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                        className="w-full h-1/3 bg-accent-bronze rounded-full"
                    />
                </div>
            </div>
        </section>
    );
}
