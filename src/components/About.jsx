import React from 'react';
import myphot from '../assets/img-logo/myphoto1.jpeg';

const About = () => {
    return (
        <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 space-y-20'>
            {/* About Me Section */}
            <div className='rounded-lg shadow-md p-6 bg-white'>
                <h1 className='text-3xl font-bold mb-6 text-center text-gray-900'>About Me</h1>
                <div className='flex justify-center mb-6'>
                    <img src={myphot} alt="my photo" className='rounded-full h-[300px] w-[300px]  md:w-[300px] md:h-[300px] ' />
                </div>
                <p className='text-justify text-sm md:text-xl font-light text-gray-700'>
                    I am a dedicated Front-End Developer with 1 year of experience and a Master of Computer Application degree. My expertise lies in React JS, where I specialize in building dynamic, responsive web applications. Currently, I am further enhancing my skills by learning the MERN stack, focusing on MongoDB, Express.js, React JS, and Node.js.
                </p>
            </div>

            {/* Education Section */}
            <div className='rounded-lg  p-6 bg-white'>
                <h2 className='text-3xl font-bold mb-6 text-center text-gray-900'>Education</h2>
                <div className='flex flex-col md:flex-row justify-evenly space-y-6 md:space-y-0 md:space-x-6'>
                    <div className='bg-gray-100 p-6 rounded-lg shadow-lg transition transform hover:scale-105'>
                        <div className='bg-white p-4 rounded-lg shadow'>
                            <h3 className='text-xl font-medium text-gray-900'>Master of Computer Application</h3>
                            <p className='text-sm md:text-lg text-gray-700'>Sharda University </p>
                            <p className='text-sm md:text-lg text-gray-500'>Year of Graduation: 2024</p>
                        </div>
                    </div>
                    <div className='bg-gray-100 p-6 rounded-lg shadow-lg transition transform hover:scale-105'>
                        <div className='bg-white p-4 rounded-lg shadow'>
                            <h3 className='text-xl font-medium text-gray-900'>Bachelor Computer Application</h3>
                            <p className='text-sm md:text-lg text-gray-700'>RSMT</p>
                            <p className='text-sm md:text-lg text-gray-500'>Year of Graduation: 2022</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission Statement Section */}
            <div className='rounded-lg shadow-md p-6 bg-white'>
                <h2 className='text-3xl font-bold mb-6 text-center text-gray-900'>Mission Statement</h2>
                <p className='text-justify text-sm md:text-xl font-light text-gray-700'>
                    My mission is to create user-friendly, innovative web applications that bridge the gap between technology and people. I am committed to continuous learning and leveraging cutting-edge technologies like React JS and the MERN stack to deliver high-quality digital solutions that meet users' needs and exceed expectations.
                </p>
            </div>
        </div>
    );
}

export default About;
