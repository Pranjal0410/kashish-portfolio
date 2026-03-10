import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const insights = [
    {
        category: "Marketing",
        date: "Jan 2026",
        title: "The \u2018Wait-What?\u2019 Marketing Hack Everyone Missed",
        excerpt: "Sometimes the best marketing strategy isn\u2019t automation or funnels. Sometimes it\u2019s simply listening to customers and understanding what they actually need.",
        readTime: "4 min",
        accentColor: "#8FA68A"
    },
    {
        category: "Automation",
        date: "Dec 2025",
        title: "When Robots Handle Customers\u2026 Chaos Ensues",
        excerpt: "Automation can optimize processes \u2014 but human insight still wins the customer experience game.",
        readTime: "5 min",
        accentColor: "#8B7355"
    },
    {
        category: "Productivity",
        date: "Nov 2025",
        title: "Meetings: Where Productivity Goes to Die",
        excerpt: "A reflection on how organizations often confuse activity with progress.",
        readTime: "3 min",
        accentColor: "#C4A882"
    }
];

export default function Blog() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".blog-heading-part", {
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
        <section id="case-studies" ref={containerRef} className="py-24 lg:py-32 relative z-10 w-full">
            <div className="mb-14 sm:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                    <div className="blog-heading-part flex items-center gap-5 mb-3">
                        <span className="font-mono text-[10px] text-accent-bronze tracking-[0.2em] uppercase">03</span>
                        <div className="h-px bg-accent-bronze/40 w-10" />
                    </div>
                    <h2 className="blog-heading-part font-serif text-[36px] sm:text-[42px] md:text-[50px] lg:text-[58px] tracking-[-0.02em] text-text-primary leading-[1.05]">
                        Selected Insights
                    </h2>
                </div>
                <a href="#case-studies" className="blog-heading-part hidden sm:flex items-center gap-2 text-[12px] font-medium tracking-[0.15em] uppercase text-text-secondary hover:text-accent-bronze transition-colors group shrink-0">
                    View All <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
            </div>

            {/* Featured + side stack */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5">
                {/* Featured */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    whileHover={{ y: -5 }}
                    className="group md:col-span-3 p-7 sm:p-8 lg:p-10 rounded-[20px] bg-white/40 backdrop-blur-sm border border-[rgba(180,160,140,0.1)]
                      hover:bg-white/70 hover:shadow-[0_25px_60px_rgba(120,100,80,0.12)] transition-all duration-500 cursor-pointer flex flex-col relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8FA68A]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none" />

                    <div className="flex items-center gap-2 mb-6 relative">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#8FA68A]" />
                        <span className="text-[10px] tracking-[0.18em] uppercase text-[#9B8E82] font-mono">
                            {insights[0].category} &bull; {insights[0].date}
                        </span>
                    </div>

                    <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-serif text-[#2C2522] mb-4 leading-[1.2] group-hover:text-accent-bronze transition-colors duration-300 relative max-w-lg">
                        {insights[0].title}
                    </h3>

                    <p className="text-[15px] sm:text-[16px] text-[#5a4e44] leading-[1.75] mb-auto flex-1 relative max-w-md">
                        {insights[0].excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-5 mt-6 border-t border-[rgba(180,160,140,0.08)] relative">
                        <span className="text-[10px] font-mono text-[#9B8E82] uppercase tracking-[0.15em]">{insights[0].readTime} read</span>
                        <span className="text-[12px] font-medium text-accent-bronze uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1.5">
                            Read <span className="text-sm">&rarr;</span>
                        </span>
                    </div>
                </motion.div>

                {/* Side stack */}
                <div className="md:col-span-2 flex flex-col gap-4 sm:gap-5">
                    {insights.slice(1).map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.1 + (index * 0.1), duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                            whileHover={{ y: -5 }}
                            className="group flex-1 p-6 sm:p-7 rounded-[20px] bg-white/35 backdrop-blur-sm border border-[rgba(180,160,140,0.1)]
                              hover:bg-white/70 hover:shadow-[0_25px_60px_rgba(120,100,80,0.12)] transition-all duration-500 cursor-pointer flex flex-col relative overflow-hidden"
                        >
                            <div className="flex items-center gap-2 mb-4 relative">
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: post.accentColor }} />
                                <span className="text-[10px] tracking-[0.18em] uppercase text-[#9B8E82] font-mono">
                                    {post.category} &bull; {post.date}
                                </span>
                            </div>

                            <h3 className="text-[17px] sm:text-[19px] font-serif text-[#2C2522] mb-2 leading-snug group-hover:text-accent-bronze transition-colors duration-300 relative">
                                {post.title}
                            </h3>

                            <p className="text-[14px] text-[#5a4e44] leading-[1.7] mb-auto flex-1 relative">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between pt-4 mt-4 border-t border-[rgba(180,160,140,0.08)] relative">
                                <span className="text-[10px] font-mono text-[#9B8E82] uppercase tracking-[0.15em]">{post.readTime} read</span>
                                <span className="text-[12px] font-medium text-accent-bronze uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1.5">
                                    Read <span className="text-sm">&rarr;</span>
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-10 text-center sm:hidden">
                <a href="#case-studies" className="inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.15em] text-text-primary uppercase border border-[#2C2522]/12 rounded-full px-6 py-3 hover:bg-bg-dark hover:text-white transition-colors">
                    View All &rarr;
                </a>
            </div>
        </section>
    );
}
