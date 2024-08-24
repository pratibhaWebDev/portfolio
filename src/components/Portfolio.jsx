import React from 'react';
import spotifyCloneImg from '../assets/img-logo/spotify.webp';
import ecommerceImg from '../assets/img-logo/e-commerce.png'

const projects = [
    {
        title: 'Spotify Clone',
        description: 'A Spotify clone built with React JS and Tailwind CSS that replicates the core functionalities of the original Spotify web application. This project demonstrates my skills in frontend development, focusing on UI/UX design, state management using the Context API, routing with React Router, and ensuring a responsive layout.',
        technologies: ['React JS', 'Tailwind CSS', 'JavaScript'],
        imgSrc: spotifyCloneImg,
        demoLink: 'https://your-live-demo-link.com',
        codeLink: 'https://github.com/pratibhaWebDev/spotify-clone'
    },
    {
        title: 'E-Commerce',
        description: 'An E-Commerce application built with React JS and Tailwind CSS, showcasing a full-featured online shopping experience. This project highlights my expertise in building scalable web applications, including product management, user authentication, and a responsive user interface.',
        technologies: ['React JS', 'Tailwind CSS', 'JavaScript'],
        imgSrc: ecommerceImg, // Use the appropriate image for the E-Commerce project
        demoLink: 'https://your-ecommerce-demo-link.com', // Update with the actual demo link
        codeLink: 'https://github.com/pratibhaWebDev/e-commerce' // Update with the actual code repository link
    },

    // Add more projects here
];

const Portfolio = () => {
    return (
        <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10'>
            <div className='bg-white p-6 rounded-lg'>
                <h2 className='text-3xl font-bold mb-6 text-center text-gray-900 my-9'>Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {projects.map((project, index) => (
                        <div key={index} className='bg-gray-100 p-8 rounded-lg shadow-md justify-center items-center'>
                           <div className='bg-white p-8'>
                           <div className='flex justify-center items-center'>
                                <img src={project.imgSrc} alt={project.title} className='rounded-lg mb-4 w-[100px] h-[100px] object-cover ' />
                            </div>
                            <h3 className='text-2xl font-semibold text-gray-900 text-center'>{project.title}</h3>
                            <p className='text-sm  font-light text-gray-700 my-4 text-justify'>
                                {project.description}
                            </p>
                            <p className='text-sm md:text-lg font-medium text-gray-900'>Technologies Used:</p>
                            <ul className='list-disc list-inside text-gray-700 mb-4'>
                                {project.technologies.map((tech, techIndex) => (
                                    <li key={techIndex}>{tech}</li>
                                ))}
                            </ul>
                            <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
                                <a href={project.demoLink} className='bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700 transition'>
                                    Live Demo
                                </a>
                                <a href={project.codeLink} className='bg-gray-900 text-white px-4 py-2 rounded shadow hover:bg-gray-700 transition'>
                                    View Code
                                </a>
                            </div>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
