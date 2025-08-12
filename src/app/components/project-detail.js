"use client";
import { useState, useEffect, useRef } from 'react';

// --- HOOKS ---
const useScrollAnimation = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    const getAnimationClass = (delay = '') => {
        return `transition-all ease-out duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${delay}`;
    };

    return [ref, getAnimationClass]
};

const InfoDetail = ({ label, value, className = "" }) => (
    <div className={className}>
        <p className="text-sm text-gray-400 font-mono uppercase tracking-wider">{label}</p>
        <p className="text-lg text-white mt-1">{value}</p>
    </div>
);

// --- COMPONENT ---
export const ProjectDetail = ({ project, onBack }) => {
    const [headerRef, getHeaderAnimation] = useScrollAnimation();
    const [imageRef, getImageAnimation] = useScrollAnimation();
    const [contentRef, getContentAnimation] = useScrollAnimation();
    const [processRef, getProcessAnimation] = useScrollAnimation();
    const [sideProjectsRef, getSideProjectsAnimation] = useScrollAnimation();

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-16 sm:py-24">
            {/* Back Button */}
            <button onClick={onBack} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8 group">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Projects
            </button>
            
            {/* Header Section */}
            <header ref={headerRef} className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start ${getHeaderAnimation()}`}>
                <h1 className="lg:w-1/2 text-4xl text-[#FFFFFD] md:text-5xl font-bold leading-tight">{project.title}</h1>
                <div className="lg:w-1/2 grid grid-cols-2 gap-8 w-full">
                    {/* Column 1 */}
                    <div>
                        <InfoDetail label="Year" value={project.date} className="mb-6" />
                        <InfoDetail label="Client" value={project.client} className="mb-6"/>
                        <InfoDetail label="Industry" value={project.industry}/>
                    </div>
                    {/* Column 2 */}
                    <div>
                        <InfoDetail label="Service" value={project.service} className="mb-6"/>
                        <InfoDetail label="Agency" value={project.agency} className="mb-6"/>
                        
                    </div>
                </div>
            </header>

            {/* Main Image */}
            <div ref={imageRef} className={`my-16 sm:my-24 ${getImageAnimation('delay-100')}`}>
                <img src={project.imageUrl} alt={project.title} className="w-full h-auto rounded-lg shadow-2xl shadow-black/30" />
            </div>

            {/* Challenge & Approach */}
            <section ref={contentRef} className={`grid md:grid-cols-2 gap-12 lg:gap-16 ${getContentAnimation()}`}>
                <div>
                    <h2 className="text-3xl text-[#FFFFFD] font-bold mb-4">The Challenge</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">{project.challenge}</p>
                </div>
                <div>
                    <h2 className="text-3xl text-[#FFFFFD] font-bold mb-4">Our Approach</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">{project.approach}</p>
                </div>
            </section>
            
            {/* Process Section */}
            <section ref={processRef} className={`my-16 sm:my-24 text-center ${getProcessAnimation()}`}>
                <h2 className="text-3xl text-[#FFFFFD] font-bold mb-4">We cover a full design process</h2>
                <div className="mt-12 grid sm:grid-cols-3 gap-10">
                    <div>
                        <h3 className="text-xl text-[#FFFFFD] font-semibold mb-3">Strategy</h3>
                        <ul className="text-gray-400 space-y-2">
                           {project.process.strategy.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-xl text-[#FFFFFD] font-semibold mb-3">UX Research</h3>
                        <ul className="text-gray-400 space-y-2">
                           {project.process.uxResearch.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-xl text-[#FFFFFD] font-semibold mb-3">Design</h3>
                        <ul className="text-gray-400 space-y-2">
                           {project.process.design.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </section>
            
            {/* Side Projects */}
            <section ref={sideProjectsRef} className={getSideProjectsAnimation()}>
                <h2 className="text-3xl font-bold text-[#FFFFFD] mb-8 text-center">More Imagery</h2>
                 <div className="grid md:grid-cols-2 gap-8">
                    {project.sideProjectImages.map((img, index) => (
                        <div key={index} className="overflow-hidden rounded-lg group shadow-lg">
                            <img src={img} alt={`Side project ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};