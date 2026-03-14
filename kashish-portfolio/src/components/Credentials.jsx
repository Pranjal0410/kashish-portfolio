import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const FeaturedCertification = () => (
    <div className="group relative rounded-[20px] overflow-hidden
                    bg-gradient-to-br from-[#1B2A3D] via-[#1F3044] to-[#162435]
                    p-7 sm:p-8 md:p-10 h-full min-h-[340px] flex flex-col justify-between
                    border border-white/[0.06]
                    hover:shadow-[0_20px_80px_rgba(27,42,61,0.3)] transition-shadow duration-700">

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
             style={{
                 backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                 backgroundSize: '40px 40px'
             }} />

        {/* Top row */}
        <div className="relative z-10">
            <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="verification-dot w-2.5 h-2.5 rounded-full bg-[#81B64C] shadow-[0_0_8px_rgba(129,182,76,0.4)]" />
                    <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/50 font-mono">
                        Micro-Certification &bull; Verified
                    </span>
                </div>
                <div className="hidden sm:flex items-center gap-1">
                    <span className="text-[#81B64C] font-bold text-sm tracking-tight">service</span>
                    <span className="text-white font-bold text-sm tracking-tight">now</span>
                </div>
            </div>

            <h3 className="text-[22px] sm:text-2xl md:text-3xl font-serif text-white leading-snug mb-3">
                Welcome to ServiceNow
            </h3>
            <p className="text-[13px] sm:text-sm text-white/40 leading-relaxed max-w-md">
                Successfully completed certification requirements validating
                foundational knowledge of the ServiceNow platform and ecosystem.
            </p>
        </div>

        {/* Bottom row */}
        <div className="relative z-10 flex items-end justify-between mt-8 pt-6 border-t border-white/[0.08]">
            <div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-white/30 mb-1 font-mono">
                    Issued
                </div>
                <div className="text-sm text-white/70">February 24, 2026</div>
            </div>

            <span className="flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase text-[#81B64C]/70 font-mono">
                Verified
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="10"/>
                </svg>
            </span>
        </div>

        {/* Certification image watermark */}
        <div className="absolute -right-4 -bottom-4 w-[180px] h-[180px] opacity-[0.08] pointer-events-none">
            <img src="/certification.png" alt="" className="w-full h-full object-contain" />
        </div>
    </div>
);

const BadgeCard = ({ title, date, image }) => (
    <div className="group relative rounded-[20px] p-6 sm:p-7 flex-1
                    bg-white/35 backdrop-blur-sm border border-[rgba(180,160,140,0.1)]
                    hover:bg-white/70 hover:-translate-y-1
                    hover:shadow-[0_25px_60px_rgba(120,100,80,0.12)]
                    transition-all duration-500 cursor-default">

        {/* Top: Badge type label + Date */}
        <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#81B64C]" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#9B8E82] font-mono">
                    Badge
                </span>
            </div>
            <span className="text-[11px] text-[#9B8E82] font-mono">
                {date}
            </span>
        </div>

        {/* Icon + Title */}
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl
                            overflow-hidden
                            group-hover:scale-110 transition-transform duration-500">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1">
                <h4 className="text-[16px] sm:text-[17px] font-serif text-[#2C2522] leading-snug mb-1">
                    {title}
                </h4>
                <span className="text-xs text-[#9B8E82]">ServiceNow</span>
            </div>
        </div>
    </div>
);

export default function Credentials() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".credentials-heading", {
                scrollTrigger: { trigger: containerRef.current, start: "top 78%" },
                y: 40,
                opacity: 0,
                stagger: 0.08,
                duration: 0.9,
                ease: "power3.out"
            });

            gsap.to(".verification-dot", {
                boxShadow: "0 0 12px rgba(129,182,76,0.6)",
                repeat: -1,
                yoyo: true,
                duration: 2,
                ease: "sine.inOut"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="credentials" ref={containerRef} className="py-24 lg:py-32 relative z-10 w-full">

            {/* Section Header */}
            <div className="mb-14 sm:mb-16 flex items-end justify-between">
                <div>
                    <div className="credentials-heading flex items-center gap-5 mb-3">
                        <span className="font-mono text-[10px] text-accent-bronze tracking-[0.2em] uppercase">04</span>
                        <div className="h-px bg-accent-bronze/40 w-10" />
                    </div>
                    <h2 className="credentials-heading font-serif text-[36px] sm:text-[42px] md:text-[50px] lg:text-[58px] tracking-[-0.02em] text-text-primary leading-[1.05]">
                        Credentials
                    </h2>
                </div>
                {/* ServiceNow wordmark */}
                <div className="hidden md:flex items-center gap-2 opacity-30">
                    <span className="text-sm font-semibold text-[#2C2522] tracking-tight">
                        Powered by
                    </span>
                    <span className="text-lg font-bold text-[#2C2522]">
                        ServiceNow
                    </span>
                </div>
            </div>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-5 max-w-5xl">

                {/* LEFT: Featured Certification */}
                <motion.div
                    className="lg:col-span-3"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <FeaturedCertification />
                </motion.div>

                {/* RIGHT: Badges stack */}
                <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-5">
                    <motion.div
                        className="flex-1"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.1, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <BadgeCard
                            title="ServiceNow Administration Fundamentals"
                            date="Mar 01, 2026"
                            image="/badge1.png"
                        />
                    </motion.div>
                    <motion.div
                        className="flex-1"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <BadgeCard
                            title="Welcome to ServiceNow"
                            date="Feb 24, 2026"
                            image="/badge2.png"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
