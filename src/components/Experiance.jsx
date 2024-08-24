import React from 'react'

const Experiance = () => {

    const experiences = [
        {
            title: 'Front-End Developer',
            company: 'Ratna Sagar Pvt Ltd',
            duration: 'June 2023 - June 2024',
            description: 'Developed an e-learning platform with React JS and Redux, focusing on dynamic content rendering, user interactions, and integration with SCORM for course tracking.',
        },
        {
            title: 'Front-End Developer',
            company: 'Kiezen Soft Tech ',
            duration: 'May 2021 - Nov 2021',
            description: 'Developed an E-commerce platform with React JS and React Native.',
        },
        // Add more experiences here
    ];
    return (
        <div name="Experiance" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
                <h2 className='text-3xl font-bold mb-6 text-center text-gray-900'>Experience</h2>
                <div className='space-y-6'>
                    {experiences.map((exp, index) => (
                        <div key={index} className='border-t border-gray-300 pt-4'>
                            <h3 className='text-xl font-semibold text-gray-900'>{exp.title}</h3>
                            <p className='text-md font-medium text-gray-700'>{exp.company}</p>
                            <p className='text-sm text-gray-500'>{exp.duration}</p>
                            <p className='text-sm md:text-lg text-gray-700 mt-2'>{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiance