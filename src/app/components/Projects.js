"use client";
import { useState, useEffect, useRef } from 'react';

// --- DATA ---
const projectData = [
    {
        id: "alpha",
        title: "Project Alpha: Redefining Corporate Branding",
        subtitle: "Corporate Branding",
        date: "2024",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
        isFeatured: true,
        client: "Innovate Corp",
        service: "Branding & Web Design",
        agency: "Creative Minds",
        industry: "Technology",
        challenge: "To redefine Innovate Corp's brand identity and create a compelling online presence that reflects their cutting-edge technology and forward-thinking culture.",
        approach: "We started with deep-dive workshops with stakeholders to distill the core brand values. Our approach was iterative, combining user research with creative exploration to build a flexible yet consistent brand system and a highly performant website.",
        process: {
            strategy: ["Brand Workshops", "Competitive Analysis", "Audience Persona"],
            uxResearch: ["User Interviews", "Surveys", "Usability Testing"],
            design: ["Logo & Identity", "Design System", "Responsive Web Design"],
        },
        sideProjectImages: [
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        ]
    },
    {
        id: "beta",
        title: "Project Beta: A HIPAA-Compliant Health Platform",
        subtitle: "Web Application",
        date: "2024",
        imageUrl: "https://plus.unsplash.com/premium_photo-1661758351472-52ed02e99496?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isFeatured: false,
        client: "HealthTrackr",
        service: "Full-Stack Development",
        agency: "In-house",
        industry: "Healthcare",
        challenge: "Develop a secure and user-friendly platform for patients to track their medical records and appointments.",
        approach: "Our team built a robust web application using modern technologies, focusing on data security (HIPAA compliance) and an intuitive interface for users of all ages.",
        process: {
            strategy: ["Requirement Gathering", "Technical Specification", "Roadmapping"],
            uxResearch: ["Patient Journey Mapping", "Accessibility Audits", "Prototype Testing"],
            design: ["Data Visualization", "Mobile-First UI", "API Design"],
        },
        sideProjectImages: [
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1573167101669-476636b96cea?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]
    },
    {
        id: "gamma",
        title: "Project Gamma: Gamifying Sustainable Travel",
        subtitle: "Mobile App Design",
        date: "2024",
        imageUrl: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=2070&auto=format&fit=crop",
        isFeatured: false,
        client: "EcoJourney",
        service: "UI/UX for Mobile",
        agency: "Creative Minds",
        industry: "Travel & Sustainability",
        challenge: "Design an engaging mobile app that encourages sustainable travel choices by gamifying eco-friendly activities.",
        approach: "We designed a vibrant and motivating user interface with a strong focus on positive reinforcement, social sharing, and beautiful illustrations to make sustainability fun.",
        process: {
            strategy: ["Concept Validation", "Gamification Strategy", "Feature Prioritization"],
            uxResearch: ["Focus Groups", "A/B Testing", "Behavioral Analysis"],
            design: ["Illustration System", "Micro-interactions", "iOS & Android Guidelines"],
        },
        sideProjectImages: [
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop",
        ]
    },
];

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


// --- COMPONENTS ---
const ProjectCard = ({ project, onClick }) => {
    return (
        <div 
            className="group relative overflow-hidden rounded-lg shadow-lg w-full h-full cursor-pointer"
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
            aria-label={`View details for ${project.title}`}
        >
            <img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="flex justify-between items-end">
                    <div>
                        <h3 className="text-xl font-bold">{project.subtitle}</h3>
                        <p className="text-md text-gray-300">{project.date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ProjectsSection = ({ onProjectSelect }) => {
    const featuredProject = projectData.find(p => p.isFeatured);
    const otherProjects = projectData.filter(p => !p.isFeatured);
    const [sectionRef, getAnimationClass] = useScrollAnimation();

    return (
        <div ref={sectionRef} className="w-full max-w-7xl mx-auto px-4 py-16 sm:py-24">
            <div className="text-center mb-16">
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${getAnimationClass()}`}>
                    Our Projects
                </h1>
                <p className={`text-[#B5B6B6] text-lg sm:text-xl ${getAnimationClass('delay-100')}`}>
                    A showcase of our passion and commitment to excellence.
                </p>
            </div>
            <div className={`flex flex-col lg:flex-row gap-8 ${getAnimationClass('delay-200')}`}>
                <div className="lg:w-1/2">
                    {featuredProject && (
                        <div className="h-[34rem]">
                            <ProjectCard project={featuredProject} onClick={() => onProjectSelect(featuredProject)} />
                        </div>
                    )}
                </div>
                <div className="lg:w-1/2 flex flex-col gap-8">
                    {otherProjects.map((project) => (
                       <div className="h-64" key={project.id}>
                           <ProjectCard project={project} onClick={() => onProjectSelect(project)} />
                       </div>
                    ))}
                </div>
            </div>
        </div>
    );
};