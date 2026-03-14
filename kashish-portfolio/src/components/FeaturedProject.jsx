import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const layers = [
    { num: "01", name: "Lead Capture" },
    { num: "02", name: "Intelligence Engine" },
    { num: "03", name: "Scoring & Ranking" },
    { num: "04", name: "Priority Distribution" },
    { num: "05", name: "Pipeline Analytics" },
    { num: "06", name: "Lead Repository" },
    { num: "07", name: "Activity Log" },
];

const tags = ["7-Layer Architecture", "Lead Scoring", "Real-Time Analytics",
    "Pipeline Tracking", "CRM Simulation", "React"];

export default function FeaturedProject() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".fp-heading", {
                scrollTrigger: { trigger: containerRef.current, start: "top 78%" },
                y: 40, opacity: 0, stagger: 0.08, duration: 0.9, ease: "power3.out"
            });

            gsap.from(".fp-card", {
                scrollTrigger: { trigger: containerRef.current, start: "top 72%" },
                y: 80, opacity: 0, duration: 1.2, ease: "power3.out"
            });

            gsap.from(".fp-layer", {
                scrollTrigger: { trigger: ".fp-layers", start: "top 90%" },
                x: -20, opacity: 0, duration: 0.5, stagger: 0.08, ease: "power2.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="featured-work" ref={containerRef} className="py-24 lg:py-32 relative z-10 w-full">

            {/* Section Header */}
            <div className="mb-14 sm:mb-16">
                <div className="fp-heading flex items-center gap-5 mb-3">
                    <span className="font-mono text-[10px] text-accent-bronze tracking-[0.2em] uppercase">03</span>
                    <div className="h-px bg-accent-bronze/40 w-10" />
                </div>
                <h2 className="fp-heading font-serif text-[36px] sm:text-[42px] md:text-[50px] lg:text-[58px] tracking-[-0.02em] text-text-primary leading-[1.05]">
                    Featured Project
                </h2>
            </div>

            {/* Project Card */}
            <div className="fp-card rounded-[20px] overflow-hidden
                            bg-gradient-to-br from-[#0A1628] via-[#0E1E36] to-[#0A1225]
                            border border-white/[0.06]
                            hover:shadow-[0_30px_100px_rgba(10,22,40,0.4)]
                            transition-shadow duration-700">

                {/* Top: Info + Screenshot */}
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* Left: Project Details */}
                    <div className="p-7 sm:p-8 md:p-12 flex flex-col justify-center">

                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[11px] tracking-[0.2em] uppercase text-cyan-400/60 font-mono">
                                Enterprise Simulation
                            </span>
                        </div>

                        <h3 className="text-[28px] sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                            Elite CRM Intel
                        </h3>
                        <p className="text-base sm:text-lg text-white/50 mb-2 font-serif italic">
                            Lead Intelligence Platform
                        </p>

                        <p className="text-[13px] sm:text-sm text-white/40 leading-relaxed mb-8 max-w-md">
                            A 7-layer enterprise architecture simulation that processes leads through
                            an automated intelligence engine — from capture to scoring, priority distribution,
                            and real-time analytics. Built to demonstrate how modern CRM systems think.
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1.5 rounded-full text-[10px] tracking-wider uppercase
                                                         border border-cyan-400/15 text-cyan-400/50
                                                         hover:border-cyan-400/30 hover:text-cyan-400/70
                                                         transition-colors duration-300 font-mono">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Metrics */}
                        <div className="flex gap-8 mb-10">
                            <div>
                                <div className="text-2xl font-bold text-cyan-400">7</div>
                                <div className="text-[10px] tracking-wider uppercase text-white/30 mt-1 font-mono">Layers</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-cyan-400">Live</div>
                                <div className="text-[10px] tracking-wider uppercase text-white/30 mt-1 font-mono">Status</div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-4">
                            <a href="https://lead-management-system-gilt.vercel.app/"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="px-6 py-3 rounded-full bg-cyan-400 text-[#0A1628] text-sm font-semibold
                                          tracking-wider hover:bg-cyan-300
                                          hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]
                                          transition-all duration-300 flex items-center gap-2">
                                View Live Demo
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" strokeWidth="2.5">
                                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right: Screenshot */}
                    <div className="relative p-4 sm:p-6 md:p-8 flex items-center justify-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                        w-[80%] h-[80%] rounded-full bg-cyan-400/[0.03] blur-[60px]" />

                        <div className="relative z-10 w-full rounded-xl overflow-hidden
                                        border border-white/[0.08] shadow-2xl">
                            {/* Browser bar */}
                            <div className="bg-[#111827] px-4 py-2.5 flex items-center gap-2 border-b border-white/[0.06]">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                                </div>
                                <div className="flex-1 mx-4">
                                    <div className="bg-white/[0.06] rounded-md px-3 py-1 text-[10px] text-white/30
                                                    max-w-[220px] font-mono">
                                        lead-management-system.vercel.app
                                    </div>
                                </div>
                            </div>
                            <img src="/project1.png"
                                 alt="Elite CRM Intel - Lead Intelligence Platform Dashboard"
                                 className="w-full h-auto block"
                                 loading="lazy" />
                        </div>
                    </div>
                </div>

                {/* Bottom: Architecture Layers */}
                <div className="fp-layers px-6 sm:px-8 md:px-12 py-6 border-t border-white/[0.04]">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-white/20 font-mono">
                            Architecture Layers
                        </span>
                        <div className="flex-1 h-px bg-white/[0.04]" />
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap gap-3">
                        {layers.map((layer, i) => (
                            <div key={i} className="fp-layer flex items-center gap-2 px-3 py-2 rounded-lg
                                                    bg-white/[0.02] border border-white/[0.04]
                                                    hover:bg-white/[0.05] hover:border-white/[0.08]
                                                    transition-all duration-300 cursor-default flex-1 min-w-[130px]">
                                <span className="text-[10px] font-mono text-cyan-400/40">{layer.num}</span>
                                <span className="text-[11px] text-white/40 truncate">{layer.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
