"use client";

import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Project from './components/Projects';


// Data for the accordion
const servicesList = [
    {
        title: "UI/UX Design",
        description: "Crafting intuitive and visually appealing interfaces that enhance user satisfaction and engagement. We focus on a human-centered approach to create seamless digital experiences."
    },
    {
        title: "Wireframing & Prototyping",
        description: "Building the blueprint of your application. We create detailed wireframes and interactive prototypes to visualize the user flow and test concepts before development."
    },
    {
        title: "User Interface (UI) Design",
        description: "Focusing on the look and feel, we design aesthetically pleasing and consistent interfaces. Our designs are modern, clean, and aligned with your brand identity."
    },
    {
        title: "User Experience (UX) Research",
        description: "Understanding your users is key. We conduct thorough research, including user interviews and usability testing, to gather insights that inform design decisions."
    },
    {
        title: "Web & Mobile App Design",
        description: "Designing responsive and adaptive layouts that provide an optimal experience across all devices, from desktops to smartphones."
    }
];

// Reusable Accordion Item Component
const AccordionItem = ({ service, index, activeIndex, onToggle }) => {
    const contentRef = useRef(null);
    const isOpen = index === activeIndex;

    return (
        <div className="overflow-hidden border-b border-gray-800 last:border-b-0">
            <button
                onClick={() => onToggle(index)}
                className="w-full flex justify-between items-center text-left py-5"
                aria-expanded={isOpen}
                aria-controls={`service-content-${index}`}
            >
                <span className="text-lg font-medium text-[#FFFFFD]">{service.title}</span>
                <svg
                    className={`w-6 h-6 text-[#B5B6B6] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div
                ref={contentRef}
                id={`service-content-${index}`}
                className="transition-all duration-500 ease-in-out"
                style={{
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
                }}
            >
                <p className="text-[#B5B6B6] pb-5">
                    {service.description}
                </p>
            </div>
        </div>
    );
};

export default function Services() {
    const [activeIndex, setActiveIndex] = useState(0); 
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const getAnimationClass = (delay) => {
        return `transition-all ease-out duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${delay}`;
    };

    return (
        <div className="bg-[#181818] min-h-screen font-sans text-white">
            <Navbar />
            
            {/* --- HERO HEADER --- */}
            <section className="relative w-full flex flex-col items-center justify-center text-center pt-16 pb-32 bg-[#181818]">
                <div className="flex flex-col items-center gap-4 mb-8">
                    {/* Social Icons */}
                    <div className="flex gap-4 justify-center">
                        <span className="inline-block bg-[#232323] rounded-full p-2"><img src="/window.svg" alt="M" className="w-6 h-6" /></span>
                        <span className="inline-block bg-[#232323] rounded-full p-2"><img src="/globe.svg" alt="G" className="w-6 h-6" /></span>
                        <span className="inline-block bg-[#232323] rounded-full p-2"><img src="/next.svg" alt="N" className="w-6 h-6" /></span>
                    </div>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">Evaluate Your Design & Development with us.</h1>
                <p className="text-[#B5B6B6] text-lg sm:text-xl max-w-2xl mx-auto mb-8">The Madbrains Technologies advances state to use the most recent advances in development technology and maintain the user at the centre of every design decision.</p>
                <button className="bg-[#232323] text-[#FFFFFD] font-semibold px-8 py-3 rounded-lg shadow hover:bg-[#D9FF6A] hover:text-[#232323] transition mb-8">Join Us Today</button>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full max-w-4xl mx-auto mt-8">
                    <div className="flex flex-col items-center">
                        <span className="text-5xl font-bold text-white">5.0</span>
                        <span className="text-[#B5B6B6] text-sm">Google Ratings</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-2">
                            {/* Avatars */}
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-8 h-8 rounded-full border-2 border-[#232323]" />
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="w-8 h-8 rounded-full border-2 border-[#232323]" />
                            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="avatar" className="w-8 h-8 rounded-full border-2 border-[#232323]" />
                            <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="avatar" className="w-8 h-8 rounded-full border-2 border-[#232323]" />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[#B5B6B6] text-sm">Join The Community Like Our Clients</span>
                            <button className="bg-[#232323] text-[#FFFFFD] text-sm px-4 py-2 rounded-full shadow hover:bg-[#D9FF6A] hover:text-[#232323] transition flex items-center gap-2">Join Now <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-5xl font-bold text-white">90+</span>
                        <span className="text-[#B5B6B6] text-sm">Team Members</span>
                    </div>
                </div>
                                <div className="relative z-10 mt-16">
                    <h3 className="text-white text-lg mb-6">Clients We've worked with</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        <span className="bg-white rounded-lg px-6 py-3 shadow text-black font-semibold flex items-center">treva.</span>
                        <span className="bg-white rounded-lg px-6 py-3 shadow text-black font-semibold flex items-center">FACTORY</span>
                        <span className="bg-white rounded-lg px-6 py-3 shadow text-black font-semibold flex items-center">Faker</span>
                        <span className="bg-white rounded-lg px-6 py-3 shadow text-black font-semibold flex items-center">FOX HUB</span>
                        <span className="bg-white rounded-lg px-6 py-3 shadow text-black font-semibold flex items-center">MONERO</span>
                    </div>
                </div>
            </section>

            
            {/* --- MAIN CONTENT --- */}
            <div className="container mx-auto py-16 sm:py-24 bg-[#181818]  relative">
                <div ref={sectionRef}>
                    {/* --- HEADER --- */}
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${getAnimationClass('delay-100')}`}>
                            Our Services
                        </h1>
                        <p className={`text-[#B5B6B6] text-lg sm:text-xl ${getAnimationClass('delay-200')}`}>
                            We specialize in creating beautiful, functional, and user-centric digital experiences that drive results and delight users. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla animi vel, ea ducimus ut inventore voluptatum consequuntur asperiores nihil excepturi exercitationem dolorem, accusantium officia. Placeat, temporibus aspernatur. Sit, quas voluptas!
                        </p>
                    </div>

                    {/* --- CONTENT WRAPPER --- */}
                    <div className={`mt-16 sm:mt-24 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-stretch ${getAnimationClass('delay-300')}`}>
                        {/* --- LEFT - ACCORDION --- */}
                        <div className="w-full md:w-1/2 p-4">
                            <h2 className="text-3xl font-semibold text-white mb-2">UI/UX DESIGN</h2>
                            <p className="text-[#B5B6B6] mb-8">
                                From initial concept to final design, we cover all aspects of the user interface and experience to ensure your product is not just good, but great.
                            </p>
                            <div>
                               {servicesList.map((service, index) => (
                                    <AccordionItem 
                                        key={index}
                                        service={service}
                                        index={index}
                                        activeIndex={activeIndex}
                                        onToggle={handleToggle}
                                    />
                               ))}
                            </div>
                        </div>

                        {/* --- RIGHT - IMAGE --- */}
                        <div className="w-full md:w-1/2 hidden md:flex items-center justify-center p-4">
                             <img 
                                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop" 
                                alt="UI/UX design workspace with laptop and sketches" 
                                className="rounded-lg object-cover w-full h-full max-h-[600px] shadow-2xl shadow-black/50"
                            />
                        </div>
                    </div>
                    <div className={`mt-16 sm:mt-24 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-stretch ${getAnimationClass('delay-300')}`}>
                        {/* --- RIGHT - IMAGE --- */}
                        <div className="w-full md:w-1/2 hidden md:flex items-center justify-center p-4">
                             <img 
                                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop" 
                                alt="UI/UX design workspace with laptop and sketches" 
                                className="rounded-lg object-cover w-full h-full max-h-[600px] shadow-2xl shadow-black/50"
                            />
                        </div>
                        {/* --- LEFT - ACCORDION --- */}
                        <div className="w-full md:w-1/2 p-4">
                            <h2 className="text-3xl font-semibold text-white mb-2">UI/UX DESIGN</h2>
                            <p className="text-[#B5B6B6] mb-8">
                                From initial concept to final design, we cover all aspects of the user interface and experience to ensure your product is not just good, but great.
                            </p>
                            <div>
                               {servicesList.map((service, index) => (
                                    <AccordionItem 
                                        key={index}
                                        service={service}
                                        index={index}
                                        activeIndex={activeIndex}
                                        onToggle={handleToggle}
                                    />
                               ))}
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <Project/>
        </div>
    );
}