import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const exploreCards = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="7" r="4" /><circle cx="17" cy="7" r="3" />
                <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                <path d="M17 11a4 4 0 014 4v2" />
            </svg>
        ),
        title: "Customer Strategy",
        description: "Understanding how companies design better customer journeys through CRM systems and data insights.",
        accent: "#8FA68A"
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
            </svg>
        ),
        title: "Digital Marketing",
        description: "Exploring marketing strategies that combine creativity, analytics, and customer psychology.",
        accent: "#C4A882"
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v2m0 18v2m-9-11h2m18 0h2m-3.3-7.7-1.4 1.4M5.7 18.3l-1.4 1.4m0-15.4 1.4 1.4m12.6 12.6 1.4 1.4" />
            </svg>
        ),
        title: "Business Systems",
        description: "Analyzing how organizations use tools like CRM and automation to improve decision-making.",
        accent: "#8B7355"
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
        title: "Communication",
        description: "Studying how ideas, strategy, and communication shape leadership in modern businesses.",
        accent: "#9B8E82"
    }
];

export default function Services() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".services-heading-part", {
                scrollTrigger: { trigger: containerRef.current, start: "top 78%" },
                y: 40,
                opacity: 0,
                stagger: 0.08,
                duration: 0.9,
                ease: "power3.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="services" ref={containerRef} className="py-24 lg:py-32 relative z-10">
            <div className="mb-14 sm:mb-16">
                <div className="services-heading-part flex items-center gap-5 mb-3">
                    <span className="font-mono text-[10px] text-accent-bronze tracking-[0.2em] uppercase">02</span>
                    <div className="h-px bg-accent-bronze/40 w-10" />
                </div>
                <h2 className="services-heading-part font-serif text-[36px] sm:text-[42px] md:text-[50px] lg:text-[58px] tracking-[-0.02em] text-text-primary leading-[1.05]">
                    What I Explore
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl">
                {exploreCards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.08, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                        whileHover={{ y: -6 }}
                        className="group relative p-7 sm:p-8 rounded-[20px] bg-white/35 backdrop-blur-sm border border-[rgba(180,160,140,0.1)]
                          hover:bg-white/70 hover:shadow-[0_25px_60px_rgba(120,100,80,0.12)] transition-all duration-500 cursor-default overflow-hidden"
                    >
                        {/* Accent line */}
                        <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[1.5px] transition-all duration-700 ease-out"
                            style={{ backgroundColor: card.accent }} />

                        {/* Number watermark */}
                        <span className="absolute top-4 right-5 text-[42px] font-serif text-[#2C2522]/[0.03] leading-none select-none pointer-events-none">
                            {String(index + 1).padStart(2, '0')}
                        </span>

                        {/* Glow */}
                        <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                             style={{ backgroundColor: card.accent }} />

                        {/* Icon */}
                        <div className="mb-5 w-10 h-10 rounded-xl bg-white/70 border border-[rgba(180,160,140,0.08)] flex items-center justify-center transition-all duration-300 group-hover:border-transparent"
                             style={{ color: card.accent }}>
                            {card.icon}
                        </div>

                        <h3 className="text-[18px] sm:text-[20px] font-serif text-[#2C2522] mb-2.5 group-hover:text-accent-bronze transition-colors duration-300">{card.title}</h3>
                        <p className="text-[14px] sm:text-[15px] text-[#5a4e44] leading-[1.75]">{card.description}</p>

                        <div className="mt-5 flex items-center gap-2 text-[12px] font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-400"
                             style={{ color: card.accent }}>
                            Explore <span className="text-base leading-none">&rarr;</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
