import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    
    {
      title: "Frontend Developer",
      company_name: "HCL",
      icon: shopify,
      iconBg: "#383E56",
      date: "mar 2022 - sept 2023",
      points: [
        "Mini Project Development: Developed and contributed to a mini project during the internship at HCL, enhancing practical programming and problem-solving skills in a real-world corporate environment.",
        "Hands-on Experience with Technology: Gained hands-on experience with various technologies and tools used in the industry, improving proficiency in front-end development and understanding of project workflows.",

      ],
    },
    {
      title: "UnderGraduate",
      company_name: "Sathyabama Institute Of Science And Technology",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Apr 2021 - Present",
      points: [
        "Pursuing a Bachelor of Engineering in Computer Science at Sathyabama Institute of Science and Technology with a current CGPA of 9.0, focusing on full-stack development and data structures.",
        "Acquiring expertise in programming languages, database management, and software development, with hands-on experience in web development and system design projects.",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "NFT Market Place",
      description:
        " A decentralized platform built for minting, buying, and trading NFTs with secure blockchain integration, providing a seamless experience for digital asset transactions.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Motoko",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/shiva9989/NFT-market-place",
    },
    {
      name: "Attendence System",
      description:
        "A web application using facial recognition with webcam for efficient attendance tracking and accurate, automated real-time record-keeping.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Nodejs",
          color: "green-text-gradient",
        },
        {
          name: "Supabase",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/shiva9989/Attendance-System",
    },
    {
      name: "NN Token",
      description:
        "A blockchain-based token developed on the Internet Computer Protocol for secure, scalable, and decentralized digital asset transactions.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Nodejs",
          color: "green-text-gradient",
        },
        {
          name: "Motoko",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/shiva9989/Token",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };