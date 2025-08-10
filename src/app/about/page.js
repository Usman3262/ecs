"use client";

import Image from "next/image";
import React from "react";

const firmContent = [
  {
    title: "About our firm",
    description:
      "Each design decision is guided by a deep appreciation for and understanding of how design is integrated in architecture, culture, civic, environmental, and economic factors that shape a project.",
    image: "/images/img.avif", // Replace with your image paths
  },
  {
    title: "Our firm story",
    description:
      "Each design decision is guided by a deep appreciation for and understanding of how design is integrated in architecture, culture, civic, environmental, and economic factors that shape a project.",
    image: "/images/img.avif", // Replace with your image paths
  },
  {
    title: "How we started",
    description:
      "Each design decision is guided by a deep appreciation for and understanding of how design is integrated in architecture, culture, civic, environmental, and economic factors that shape a project.",
    image: "/images/img.avif", // Replace with your image paths
  },
];

const teamMembers = [
  {
    name: "Doron Merdinger",
    title: "Founder & CEO",
    titleColor: "text-blue-400",
    description:
      "Doron, CEO of Doroni Aerospace, champions innovation and operational excellence. Previously, he led tech advancements at Merdinger House of Design and doubled Hazorfim’s revenues within four years as its CEO.",
    image: "/images/img.avif", // Replace with the actual image path
  },
  {
    name: "John Doe",
    title: "Manager",
    titleColor: "text-green-400",
    description:
      "John is an experienced manager with expertise in overseeing projects and team coordination. He ensures smooth operations and effective communication across departments.",
    image: "/images/img.avif", // Replace with the actual image path
  },
  {
    name: "Jane Smith",
    title: "Project Manager",
    titleColor: "text-yellow-400",
    description:
      "Jane excels in project management, from initial concept to final delivery. With her strong organizational skills, she ensures that each project is completed on time and within budget.",
    image: "/images/img.avif", // Replace with the actual image path
  },
];


const Firm = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* About Our Firm Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">About our firm</h2>
          <p className="max-w-2xl mx-auto text-gray-400 mb-12">
            Each design decision is guided by a deep appreciation for and understanding of how design is integrated in architecture, culture, civic, environmental, and economic factors that shape a project.
          </p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  {/* First Image with increased width */} 
  <div className="relative w-full md:w-[130%] h-[400px]">
    <Image
      src="/images/img.avif" // Use the actual image path
      alt="About our firm"
      width={800} // Set the width
      height={400} // Set the height
      layout="intrinsic" // Use intrinsic to keep aspect ratio
      className="object-cover object-center rounded-lg"
    />
  </div>

  {/* Second Image with decreased width */}
  <div className="relative w-full md:w-[76%] h-[400px] ml-38 mt-15">
    <Image
      src="/images/img.avif" // Use the actual image path
      alt="About our firm"
      width={800} // Set the width
      height={400} // Set the height
      layout="intrinsic" // Use intrinsic to keep aspect ratio
      className="object-cover object-center rounded-lg"
    />
  </div>
</div>


        </div>

     <section className="bg-[#0a0a0a] text-white py-20 px-4">
  <div className="max-w-7xl mx-auto">
   {/* First Section */}
<div className="grid grid-cols-1 gap-10">
  <div
    className="flex flex-col-reverse md:flex-row-reverse items-center md:items-start mb-10"
  >
    {/* Image 1 with specific side position */}
    <div className="relative w-full md:w-[45%] h-[250px] mb-4 md:mb-0 md:ml-3">
      <Image
        src={firmContent[1].image} // Use the second item
        alt={firmContent[1].title}
        layout="intrinsic"
        width={600}
        height={300}
        className="object-cover object-center rounded-lg"
      />
    </div>

    {/* Image 2 with specific side position */}
    <div className="relative w-full md:w-[45%] h-[250px] mb-4 md:mb-0 md:mr-5">
      <Image
        src={firmContent[2].image} // Use the third item
        alt={firmContent[2].title}
        layout="intrinsic"
        width={400}
        height={300}
        className="object-cover object-center rounded-lg"
      />
    </div>
     

    {/* Text Content */}
    <div className="w-full md:w-[50%]">
      <h3 className="text-xl font-semibold mb-2">{firmContent[1].title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{firmContent[1].description}</p>
    </div>
  </div>
</div>

     {/* Second Section (Updated for Image Left and Text Right) */}
   <div className="grid grid-cols-1 gap-0">
  <div className="flex flex-col md:flex-row items-center md:items-start mb-10">
    {/* Image with specific side position */}
    <div className="relative w-full h-full mb-4">
      <Image
        src={firmContent[2].image} // Use the third item
        alt={firmContent[2].title}
        layout="intrinsic"
        width={700}
        height={250}
        className="object-cover object-center rounded-lg"
      />
    </div>

    {/* Text Content */}
    <div className="w-full md:w-[50%] text-center pt-35">
      <h3 className="text-xl font-semibold mb-2">{firmContent[2].title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{firmContent[2].description}</p>
    </div>
  </div>
</div>

  </div>
</section>

      </div>
    </section>
  );
};

const Team = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-4 pb-28">
      <div className="max-w-7xl mx-auto text-center">
        {/* Center the entire section */}
        <h2 className="text-4xl font-bold mb-4 tracking-wide">OUR INNOVATORS</h2>
        <p className="max-w-2xl mx-auto mb-16 text-gray-400">
          From our Doroni HQ in South Florida, our in-house team is building the next generation of flight technology from the ground up.
        </p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative flex flex-col bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full h-[250px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="intrinsic" // Use intrinsic for better handling of aspect ratio
                  width={500} // Set width for intrinsic layout
                  height={250} // Set height for intrinsic layout
                  className="object-cover object-center"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 bg-[#111111] flex-grow">
                <p className={`text-xs font-semibold uppercase ${member.titleColor} mb-1`}>
                  {member.title}
                </p>
                <h3 className="text-lg font-bold uppercase mb-2">{member.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FirmAndTeam = () => {
  return (
    <div>
      <Firm />
      <Team />
    </div>
  );
};

export default FirmAndTeam;
