import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useInView } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: 20, suffix: "+", label: "Business Systems Analyzed" },
    { value: 0, suffix: "", label: "Salesforce Certified", display: "CRM" }
];

function AnimatedCounter({ value, suffix, display }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    useEffect(() => {
        if (!isInView || display) return;
        const duration = 1800;
        const startTime = Date.now();
        const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [isInView, value, display]);

    return (
        <span ref={ref} className="text-[38px] sm:text-[44px] font-serif text-[#2C2522] tracking-[-0.02em] leading-none">
            {display || count}{suffix}
        </span>
    );
}

export default function About() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".about-reveal", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 72%",
                },
                y: 55,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: "power3.out"
            });

            gsap.from(".about-quote-line", {
                scrollTrigger: {
                    trigger: ".about-quote-line",
                    start: "top 85%",
                },
                scaleY: 0,
                transformOrigin: "top",
                duration: 1,
                ease: "power2.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={containerRef} className="py-24 lg:py-32 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-24 items-start">

                {/* Left Column */}
                <div className="lg:col-span-7">
                    <div className="about-reveal flex items-center gap-5 mb-3">
                        <span className="font-mono text-[10px] text-accent-bronze tracking-[0.2em] uppercase">01</span>
                        <div className="h-px bg-accent-bronze/40 w-10" />
                    </div>
                    <h2 className="about-reveal font-serif text-[36px] sm:text-[42px] md:text-[50px] lg:text-[58px] tracking-[-0.02em] text-text-primary leading-[1.05] mb-12">
                        About
                    </h2>

                    <div className="font-sans text-[16px] sm:text-[17px] md:text-[18px] leading-[1.85] text-text-secondary space-y-5 max-w-lg">
                        <p className="about-reveal">
                            I'm deeply interested in how businesses think, operate, and grow.
                        </p>
                        <p className="about-reveal">
                            My focus lies at the intersection of CRM systems, marketing strategy,
                            and business analysis — understanding how organizations use data,
                            technology, and communication to create meaningful customer relationships.
                        </p>
                        <p className="about-reveal">
                            I enjoy studying real business problems, exploring customer behavior,
                            and translating insights into clear strategic ideas.
                        </p>
                    </div>

                    {/* Philosophy Statement */}
                    <div className="about-reveal mt-14 lg:mt-16 relative">
                        <div className="about-quote-line absolute left-0 top-0 bottom-0 w-[2px] bg-[#2C2522]" />
                        <span className="absolute -left-2 -top-4 text-[60px] font-serif text-[#2C2522]/[0.06] leading-none select-none pointer-events-none">&ldquo;</span>
                        <div className="pl-7 sm:pl-9">
                            <p className="font-serif italic text-[20px] sm:text-[23px] md:text-[26px] leading-[1.45] text-text-primary">
                                For me, business is not just about tools or campaigns.
                                It's about understanding people, systems, and decisions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column — Metrics */}
                <div className="lg:col-span-5 flex items-start justify-center relative lg:pt-16">
                    <div className="relative w-full flex flex-col gap-4 sm:gap-5">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 40, rotate: 1 }}
                                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                                whileHover={{ y: -3, boxShadow: "0 20px 50px rgba(120,100,80,0.12)" }}
                                className="p-6 rounded-[20px] bg-white/50 backdrop-blur-sm border border-[#C4A882]/10 shadow-[0_4px_20px_rgba(120,100,80,0.06)] cursor-default transition-all duration-400"
                                style={{ marginLeft: `${[0, 24, 8][i]}px` }}
                            >
                                <div className="flex items-end justify-between">
                                    <div>
                                        <div className="w-6 h-[1.5px] bg-accent-bronze/40 mb-4" />
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} display={stat.display} />
                                        <div className="text-[13px] sm:text-sm text-[#6B5E54] mt-2 leading-relaxed">{stat.label}</div>
                                    </div>
                                    <span className="text-[48px] font-serif text-[#2C2522]/[0.03] leading-none select-none">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
