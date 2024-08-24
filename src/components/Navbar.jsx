import React, { useState } from 'react'
import yourlogo from '../assets/img-logo/your_logo.jpg'
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const navList = [
        {
            id: 1,
            text: 'Home',

        },
        {
            id: 2,
            text: 'About',
            link: '/'
        },
        {
            id: 3,
            text: 'Portfolio',
            link: '/'
        },
        {
            id: 4,
            text: 'Experiance',
            link: '/'
        },
        {
            id: 5,
            text: 'Contact',
            link: '/'
        },

    ]
    return (
        <div className='container  shadow-md  max-w-screen-2xl mx-auto px-4  items-center fixed top-0 left-0 right-0 rounded-3xl bg-white'>
            <div className='flex md:justify-around justify-between  items-center px-10 py-1'>
                <div>
                    <img className='h-[65px] rounded-full' src={yourlogo} alt="" />
                </div>
                <div className='hidden md:flex  pr-6'>
                    <ul className='flex flex-row space-x-8 tracking-wide'>
                        {navList.map(({ id, text }) => (

                            <li className='hover:scale-105 duration-200 cursor-pointer  ' key={id}>
                                <Link to={text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                >{text}</Link>
                                
                                </li>
                        )
                        )}

                    </ul>
                </div>
                <div className=' md:hidden' onClick={() => setMenu(!menu)} >{menu ? <ImCross size={25} /> : <IoMdMenu size={25} />}</div>

            </div>
            {/* {Moblie Navbar } */}

            {
                menu && (
                    <div>
                        <ul className='md:hidden flex flex-col items-center tracking-wide'>
                            {navList.map(({ id, text }) => (
                                <li className='hover:scale-105 duration-200 cursor-pointer  ' key={id}>
                                <Link to={text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                >{text}</Link>
                                
                                </li>                            )
                            )}

                        </ul>
                    </div>
                )
            }



        </div>
    )
}

export default Navbar