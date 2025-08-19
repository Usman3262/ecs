"use client";

import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';

const Reviews = () => {
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

    const reviews = [
        {
            img: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "John Doe",
            designation: "CEO, Tech Innovations",
            text: "The team at Madbrains delivered an exceptional app that exceeded our expectations. Their attention to detail and commitment to quality is unmatched."
        },
        {
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Jane Smith",
            designation: "Marketing Director, Global Brands",
            text: "Working with Madbrains was a seamless experience. Their web development expertise helped us launch a high-performance site that drives real results."
        },
        {
            img: "https://randomuser.me/api/portraits/men/65.jpg",
            name: "Michael Johnson",
            designation: "Founder, Startup Hub",
            text: "From design to deployment, Madbrains provided top-notch support. Our custom app is scalable, secure, and user-friendly thanks to their talented team."
        }
    ];

    return (
        <div className="bg-[#181818] min-h-screen font-sans text-white">
            <Navbar />
            
            <section ref={sectionRef} className="container mx-auto py-16 sm:py-24 px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${getAnimationClass('delay-100')}`}>
                        What people say
                    </h1>
                    <p className={`text-[#B5B6B6] text-lg sm:text-xl ${getAnimationClass('delay-200')}`}>
                        Discover what our satisfied customers have to say about their experiences with our products/services.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row  gap-8 w-[80%] mx-auto">
                    {reviews.map((review, index) => (
                        <div 
                            key={index} 
                            className={`bg-[#232323] p-6 rounded-lg flex flex-col  shadow-lg ${getAnimationClass(`delay-${(index + 3) * 100}`)}`}
                        >
                            <img 
                                src={review.img} 
                                alt={review.name} 
                                className="w-20 h-20 rounded-full mb-4 border-2 border-[#181818]" 
                            />
                            <h3 className="text-xl font-semibold text-[#FFFFFD] mb-2">{review.name}</h3>
                            <p className="text-[#B5B6B6] text-sm mb-4">{review.designation}</p>
                            <p className="text-[#B5B6B6] text-base">{review.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Reviews;