"use client";

import { useState, useEffect, useRef } from 'react';
import { ProjectsSection } from './components/Projects';
import { ProjectDetail } from './components/project-detail';
import Navbar from './components/Navbar';

// --- DATA ---
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
const servicesList_2 = [
    {
        title: "Custom Website Development",
        description: "Designing and developing responsive, high-performance websites tailored to your business goals and brand identity."
    },
    {
        title: "E-Commerce Solutions",
        description: "Creating secure, scalable, and user-friendly online stores with seamless payment integration and product management tools."
    },
    {
        title: "Web Application Development",
        description: "Building powerful, scalable, and feature-rich web apps that deliver exceptional user experiences across all devices."
    },
    {
        title: "Frontend Development",
        description: "Crafting visually stunning and interactive user interfaces using modern frameworks like React, Vue, and Angular."
    },
    {
        title: "Backend Development",
        description: "Developing robust server-side logic, databases, and APIs to power fast, secure, and scalable web applications."
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

// --- HomePage Component ---
const HomePage = ({ onProjectSelect }) => {
    const [activeIndex1, setActiveIndex1] = useState(0); 
    const [activeIndex2, setActiveIndex2] = useState(0); 
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

    const handleToggle1 = (index) => {
        setActiveIndex1(activeIndex1 === index ? null : index);
    };

     const handleToggle2 = (index) => {
        setActiveIndex2(activeIndex2 === index ? null : index);
    };

    const getAnimationClass = (delay) => {
        return `transition-all ease-out duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${delay}`;
    };

    return (
        <div className="bg-[#181818] font-sans text-white">
            <Navbar />
            
            <section className="relative w-full flex flex-col items-center justify-center text-center pt-16 pb-32 bg-[#181818]">
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
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        <span className="text-gray-400 text-lg font-semibold flex items-center">treva.</span>
                        <span className="text-gray-400 text-lg font-semibold flex items-center">FACTORY</span>
                        <span className="text-gray-400 text-lg font-semibold flex items-center">Faker</span>
                        <span className="text-gray-400 text-lg font-semibold flex items-center">FOX HUB</span>
                        <span className="text-gray-400 text-lg font-semibold flex items-center">MONERO</span>
                    </div>
                </div>
            </section>
            
            <div id="services" className="container mx-auto py-16 sm:py-24 bg-[#181818] relative">
                <div ref={sectionRef}>
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${getAnimationClass('delay-100')}`}>
                            Our Services
                        </h1>
                        <p className={`text-[#B5B6B6] text-lg sm:text-xl ${getAnimationClass('delay-200')}`}>
                            We specialize in creating beautiful, functional, and user-centric digital experiences that drive results and delight users.
                        </p>
                    </div>

                    <div className={`mt-16 sm:mt-24 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-stretch ${getAnimationClass('delay-300')}`}>
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
                                        activeIndex={activeIndex1}
                                        onToggle={handleToggle1}
                                    />
                               ))}
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 hidden md:flex items-center justify-center p-4">
                             <img 
                                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop" 
                                alt="UI/UX design workspace with laptop and sketches" 
                                className="rounded-lg object-cover w-full h-full max-h-[600px] shadow-2xl shadow-black/50"
                            />
                        </div>
                    </div>
                    <div className={`mt-16 sm:mt-24 w-full max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-stretch ${getAnimationClass('delay-300')}`}>
                        <div className="w-full md:w-1/2 p-4">
                            <h2 className="text-3xl font-semibold text-white mb-2">Web Development</h2>
                            <p className="text-[#B5B6B6] mb-8">
                                We build robust, scalable, and secure web applications tailored to your specific business needs, from e-commerce to enterprise-level platforms.
                            </p>
                            <div>
                               {servicesList_2.map((service, index) => (
                                    <AccordionItem 
                                        key={index}
                                        service={service}
                                        index={index}
                                        activeIndex={activeIndex2}
                                        onToggle={handleToggle2}
                                    />
                               ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 hidden md:flex items-center justify-center p-4">
                             <img 
                                src="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop" 
                                alt="Web development team working" 
                                className="rounded-lg object-cover w-full h-full max-h-[600px] shadow-2xl shadow-black/50"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div id="projects">
              <ProjectsSection onProjectSelect={onProjectSelect}/>
            </div>
        </div>
    );
}

// --- MAIN APP WRAPPER ---
export default function App() {
    const [currentView, setCurrentView] = useState('home');
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectSelect = (project) => {
        setSelectedProject(project);
        setCurrentView('projectDetail');
    };

    const handleBack = () => {
        setCurrentView('home');
        setSelectedProject(null);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0);
        }
    }, [currentView]);

    return (
        <div className="bg-[#181818] min-h-screen">
            {currentView === 'home' && (
                <HomePage onProjectSelect={handleProjectSelect} />
            )}
            {currentView === 'projectDetail' && (
                <ProjectDetail project={selectedProject} onBack={handleBack} />
            )}
        </div>
    );
}
