import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { AiOutlineJava } from "react-icons/ai";
import { ReactTyped, Typed } from "react-typed";
import yourlogo from '../assets/img-logo/your_logo.jpg'

const Home = () => {
    return (
        <>
            <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20  '>
                <div className="flex flex-col md:flex-row ">
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome To My World..</span>
                        <div className='flex space-x-1  text-2xl md:text-4xl'>
                            <h1>Hello, I'm a&#8194; </h1>
                            {/* <span className='text-red-700 font-bold'>   Developer</span> */}
                            <ReactTyped
                                className='text-red-700 font-bold'
                                strings={[" Developer", "Pratibha ", "MERN Enthusiast"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-xl text-justify'>
                            I am Pratibha Yadav, a passionate front-end developer with a strong focus on creating interactive and visually appealing user interfaces. With experience in React JS, Tailwind CSS, and a deep interest in mastering the MERN stack, I am constantly pushing my boundaries to deliver seamless digital experiences. Whether it's building responsive web applications or exploring the latest in web technologies, I thrive on turning ideas into reality.
                        </p>
                        <br />
                        {/* {social media icon} */}
                        <div className='flex justify-between'>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Available on</h1>
                                <div className='flex'>
                                    <ul className='flex space-x-5'>
                                        <li>
                                            <a href="https://github.com/pratibhaWebDev" target='blank'>
                                                <FaSquareGithub className='text-2xl md:text-3xl cursor-pointer' />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/pratibha-yadav-2b0b36260/" target='blank'>
                                                <FaLinkedin className='text-2xl md:text-3xl cursor-pointer' />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/gunjayadav28?igsh=MWd4Y3hzNHh1bXRtYQ==" target='blank'>
                                                <FaInstagramSquare className='text-2xl md:text-3xl cursor-pointer' />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* {working on } */}
                            <div className='space-y-2 '>
                                <h1 className='font-bold'>Currently working on</h1>
                                <div className='flex space-x-4 items-center'>
                                    <DiNodejs className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-md' />
                                    <IoLogoJavascript className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-md' />
                                    <RiReactjsLine className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-md' />
                                    <AiOutlineJava className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-md' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' md:w-1/2 md:ml-40 md:mt-16 items-center  flex justify-center order-1 md:order-2'>
                        <img src={yourlogo} className='rounded-full h-[300px] w-[300px]  md:w-[450px] md:h-[450px]' alt="" />
                    </div>
                </div>

            </div>

            <hr /></>
    )
}

export default Home