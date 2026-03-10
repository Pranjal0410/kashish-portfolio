import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const thinkingAreas = [
    "CRM Strategy", "Digital Marketing", "Business Systems",
    "Customer Experience", "Communication & Leadership", "Process Thinking"
];

const softSkills = [
    "Relationship Management", "Strategic Thinking", "Team Collaboration",
    "Problem Solving", "Stakeholder Communication", "Adaptability"
];

const tools = ["Salesforce", "HubSpot", "GA4", "Tableau", "SQL", "Jira"];

export default function Skills() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".skills-label", {
                scrollTrigger: { trigger: containerRef.current, start: "top 82%" },
                y: 20,
                opacity: 0,
                stagger: 0.2,
                duration: 0.6,
                ease: "power2.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="command-center" ref={containerRef} className="py-24 lg:py-32 relative z-10 w-full">

            {/* Section label */}
            <div className="skills-label flex items-center gap-5 mb-3">
                <span className="font-mono text-[10px] text-accent-bronze tracking-[0.2em] uppercase">04</span>
                <div className="h-px bg-accent-bronze/40 w-10" />
            </div>
            <h2 className="skills-label font-serif text-[36px] sm:text-[42px] md:text-[50px] lg:text-[58px] tracking-[-0.02em] text-text-primary leading-[1.05] mb-16 sm:mb-20">
                Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-16 max-w-5xl">
                {/* Thinking Areas */}
                <div>
                    <h3 className="text-[11px] tracking-[0.2em] font-mono text-[#9B8E82] uppercase mb-6">
                        Thinking Areas
                    </h3>
                    <div className="flex flex-wrap gap-2.5">
                        {thinkingAreas.map((tag, index) => (
                            <motion.span
                                key={index}
                                initial={{ scale: 0.85, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ delay: index * 0.06, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                                whileHover={{ scale: 1.06, backgroundColor: "#2C2522", color: "#F5F0EB", borderColor: "#2C2522" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 rounded-full text-[13px] sm:text-[14px] font-medium border border-[#2C2522]/12 text-[#2C2522] cursor-default transition-all duration-300"
                                style={{ letterSpacing: '0.02em' }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div>
                    <h3 className="text-[11px] tracking-[0.2em] font-mono text-[#9B8E82] uppercase mb-6">
                        Soft Skills
                    </h3>
                    <div className="flex flex-wrap gap-2.5">
                        {softSkills.map((tag, index) => (
                            <motion.span
                                key={index}
                                initial={{ scale: 0.85, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ delay: index * 0.06, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                                whileHover={{ scale: 1.06, backgroundColor: "#8B7355", color: "#F5F0EB", borderColor: "#8B7355" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 rounded-full text-[13px] sm:text-[14px] font-medium border border-accent-bronze/15 text-[#6B5E54] cursor-default transition-all duration-300"
                                style={{ letterSpacing: '0.02em' }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Tools */}
                <div>
                    <h3 className="text-[11px] tracking-[0.2em] font-mono text-[#9B8E82] uppercase mb-6">
                        Tools & Systems
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3">
                        {tools.map((tool, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 0.35, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ delay: i * 0.05, duration: 0.5 }}
                                whileHover={{ opacity: 1 }}
                                className="text-[15px] sm:text-[16px] font-semibold text-[#2C2522] tracking-[-0.01em] cursor-default transition-opacity duration-300"
                            >
                                {tool}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
