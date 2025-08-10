
"use client";
import { useState, useEffect, useRef } from 'react';

// Data for the projects
const projectData = [
    {
        title: "Project Alpha",
        subtitle: "Corporate Branding",
        date: "Oct 2024",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
        isFeatured: true,
    },
    {
        title: "Project Beta",
        subtitle: "Web Application",
        date: "Sep 2024",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
        isFeatured: false,
    },
    {
        title: "Project Gamma",
        subtitle: "Mobile App Design",
        date: "Jul 2024",
        imageUrl: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=2070&auto=format&fit=crop",
        isFeatured: false,
    },
];

// Reusable Project Card Component
const ProjectCard = ({ project }) => {
    return (
        <div className="group relative overflow-hidden rounded-lg shadow-lg w-full h-full">
            <img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="flex justify-between items-end">
                    <div>
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-md text-gray-300">{project.subtitle}</p>
                    </div>
                    <p className="text-sm font-mono text-gray-300">{project.date}</p>
                </div>
            </div>
        </div>
    );
};

export default function Project() {
    const featuredProject = projectData.find(p => p.isFeatured);
    const otherProjects = projectData.filter(p => !p.isFeatured);
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

    const getAnimationClass = (delay) => {
        return `transition-all ease-out duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${delay}`;
    };

    return (
        <div className="bg-[#181818] min-h-screen font-sans text-white">
            <div ref={sectionRef} className="w-full lg:w-3/5 mx-auto px-4 py-16 sm:py-24">
                {/* --- HEADER --- */}
                <div className="text-center mb-16">
                    <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${getAnimationClass('delay-100')}`}>
                        Our Projects
                    </h1>
                    {/* <p className={`text-[#B5B6B6] text-lg sm:text-xl ${getAnimationClass('delay-200')}`}>
                        A showcase of our passion, creativity, and commitment to excellence in every project we undertake.
                    </p> */}
                </div>

                {/* --- PROJECTS GRID --- */}
                <div className={`flex flex-col lg:flex-row gap-8 ${getAnimationClass('delay-300')}`}>
                    {/* Left Column: Featured Project */}
                    <div className="lg:w-1/2">
                        {featuredProject && (
                            // Height calculated to match the two smaller cards + the gap between them
                            // (16rem * 2) + 2rem = 34rem
                            <div className="h-[34rem]"> 
                                <ProjectCard project={featuredProject} />
                            </div>
                        )}
                    </div>
                    {/* Right Column: Other Projects */}
                    <div className="lg:w-1/2 flex flex-col gap-8">
                        {otherProjects.map((project, index) => (
                           <div className="h-64" key={index}> {/* h-64 = 16rem = 256px */}
                               <ProjectCard project={project} />
                           </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
