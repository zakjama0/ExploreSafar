import { Menu, X, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import React from 'react'
import Logo from '../assests/logoname.png'
import { Link, Outlet } from 'react-router-dom';
import Popup from 'reactjs-popup';
import LoginContainer from './LogInForm';
import RegistrationForm from './RegistrationForm';

const NavBar = ({ postUser }) => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const toggleNavBar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    const toggleDark = () => {
        setDarkMode(!darkMode);
    }

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
        }
        else {
            document.documentElement.classList.remove("dark")
        }
    }, [darkMode])

    return (
        <>
            <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 dark:bg-gray-800'>
                <div className='container px-4 mx-auto relative text-sm'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-start flex-shrink-0'>
                            <ul>
                                <li><Link to="/"> <img className='w-40 mr-2' alt='Safar Logo' src={Logo} /> </Link></li>
                            </ul>
                        </div>
                        <ul className='hidden lg:flex ml-14 space-x-12'>
                            <li><Link to="/itineraries">Itineraries</Link></li>
                            <li> <a href={'/'}>Test 2</a> </li>
                            <li> <a href={'/'}>Test 3</a> </li>
                        </ul>
                        <div className="hidden lg:flex justify-center space-x-12 items-center" >
                        <Popup trigger=
                                        {<button className='py-2 px-3 border rounded-md bg-gradient-to-r from-blue-500 to-blue-800 dark:text-white'>Create account</button>}
                                        modal nested>
                                        {
                                            close => (
                                                <div className='modal'>
                                                    <div className='review-form'>
                                                        <RegistrationForm postUser={postUser}/>
                                                    </div>
                                                    <div className='flex justify-center items-center'>
                                                        <button className="w-[150px] h-[45px] m-[10px] bg-white border-none outline-none rounded-full shadow-md cursor-pointer text-[16px] text-[#5c67c5] font-semibold text-center"
                                                            onClick=
                                                            {() => close()} >
                                                            Close
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </Popup>
                            <Popup trigger=
                                        {<button className='py-2 px-3 border rounded-md'>Sign in</button>}
                                        modal nested>
                                        {
                                            close => (
                                                <div className='modal'>
                                                    <div className='review-form'>
                                                        <LoginContainer />
                                                    </div>
                                                    <div className='flex justify-center items-center'>
                                                        <button className="w-[150px] h-[45px] m-[10px] bg-white border-none outline-none rounded-full shadow-md cursor-pointer text-[16px] text-[#5c67c5] font-semibold text-center"
                                                            onClick=
                                                            {() => close()} >
                                                            Close
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </Popup>
                            {darkMode ? <Moon onClick={toggleDark} className='cursor-pointer text-white' /> : <Sun onClick={toggleDark} className='cursor-pointer' />}
                        </div>
                        <div className='lg:hidden md:flex flex-col justify-end'>
                            <button onClick={toggleNavBar}>
                                {mobileDrawerOpen ? <X className='text-black dark:text-white' /> : <Menu className='text-black dark:text-white'/>}
                            </button>
                        </div>
                        {mobileDrawerOpen && (
                            <div className='fixed right-0 z-50 bg-slate-200/80 w-full mt-96 p-12 py-16 flex flex-col justify-center items-center border-b rounded-lg border-neutral-700/80 dark:bg-gray-800/80 lg:hidden'>
                                <ul className='flex-col items-center'>
                                <li className='py-4 text-black dark:text-white text-center'><Link to="/itineraries">Itineraries</Link></li>
                                    <li className='py-4 text-black dark:text-white'> <a href={'/'}>Maps</a> </li>
                                    <li className='py-4 text-black dark:text-white'> <a href={'/'}>Duas</a> </li>
                                </ul>
                                <div className={isPopupOpen ? 'blurred-background flex space-x-6' : 'flex space-x-6'}>
                                    <Popup trigger=
                                        {<button className='py-2 px-3 text-black dark:text-white border border-black dark:border-white rounded-md'>Sign in</button>}
                                        modal nested>
                                        {
                                            close => (
                                                <div className='modal'>
                                                    <div className='review-form'>
                                                        <LoginContainer />
                                                    </div>
                                                    <div className='flex justify-center items-center'>
                                                        <button className="w-[150px] h-[45px] m-[10px] bg-white border-none outline-none rounded-full shadow-md cursor-pointer text-[16px] text-[#5c67c5] font-semibold text-center"
                                                            onClick=
                                                            {() => close()} >
                                                            Close
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </Popup>
                                    <Popup trigger=
                                        {<button className='py-2 px-3 border rounded-md bg-gradient-to-r from-blue-500 to-blue-800 dark:text-white'>Create account</button>}
                                        modal nested>
                                        {
                                            close => (
                                                <div className='modal'>
                                                    <div className='review-form'>
                                                        <RegistrationForm />
                                                    </div>
                                                    <div className='flex justify-center items-center'>
                                                        <button className="w-[150px] h-[45px] m-[10px] bg-white border-none outline-none rounded-full shadow-md cursor-pointer text-[16px] text-[#5c67c5] font-semibold text-center"
                                                            onClick=
                                                            {() => close()} >
                                                            Close
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </Popup>
                                    {darkMode ? <Moon onClick={toggleDark} className='cursor-pointer ' /> : <Sun onClick={toggleDark} className='cursor-pointer' />}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar