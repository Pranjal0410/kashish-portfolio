import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const words = textRef.current.querySelectorAll('.word');

            gsap.from(words, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 68%",
                },
                y: 30,
                opacity: 0,
                stagger: 0.03,
                duration: 0.6,
                ease: "power2.out"
            });

            gsap.from(".philo-line", {
                scrollTrigger: { trigger: containerRef.current, start: "top 68%" },
                scaleX: 0,
                transformOrigin: "center",
                duration: 1.4,
                ease: "power3.inOut"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const text = "Business success is rarely about more tools. It\u2019s about clear thinking, better systems, and understanding customers deeply.";
    const words = text.split(' ').map((word, i) => (
        <span key={i} className="word inline-block mr-[0.28em]">{word}</span>
    ));

    return (
        <section ref={containerRef} className="py-28 sm:py-36 lg:py-44 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#2C2522] z-0" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }} />

            <div className="max-w-3xl mx-auto text-center relative z-10 px-6">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] font-serif text-white/[0.04] select-none pointer-events-none leading-none"
                     style={{ fontSize: 'clamp(140px, 22vw, 300px)' }}>
                    &ldquo;
                </div>

                <div className="philo-line h-px w-12 bg-white/15 mx-auto mb-10" />

                <h2 ref={textRef} className="font-serif italic leading-[1.35] text-[#F5F0EB] font-medium max-w-2xl mx-auto relative z-10"
                    style={{ fontSize: 'clamp(22px, 3.5vw, 42px)' }}>
                    {words}
                </h2>

                <div className="philo-line h-px w-12 bg-white/15 mx-auto mt-10" />
            </div>
        </section>
    );
}
