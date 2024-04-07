
"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import MyContainer from './MyContainer';
import { usePathname } from 'next/navigation';
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import logo from '../assets/logo.jpg';
import "./style.css";

const NavBar = () => {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState<Boolean>(false);

    const navItems = <>
        <li className='transition-all hover:bg-black text-white rounded-md duration-100 menu-item cursor-pointer'>
            <Link className={`${pathname === "/" ? "bg-black" : "text-white"} font-primaryFont px-2 rounded-lg`} href="/">Home</Link>
        </li>
        <li className='transition-all hover:bg-black text-white rounded-md duration-100 menu-item cursor-pointer'>
            <Link className={`${pathname === "/contact" ? "bg-black" : "text-white"} font-primaryFont px-2 rounded-lg`} href="/contact">Contact</Link>
        </li>
        <li className='transition-all hover:bg-black text-white rounded-md duration-100 menu-item cursor-pointer'>
            <Link className={`${pathname === "/about" ? "bg-black" : "text-white"} font-primaryFont px-2 rounded-lg`} href="/about">About Us</Link>
        </li>
        <li className='transition-all hover:bg-black text-white rounded-md duration-100 menu-item cursor-pointer'>
            <Link className={`${pathname === "/donate" ? "bg-black" : "text-white"} font-primaryFont px-2 rounded-lg`} href="/donate">Donate</Link>
        </li>
        <li className='transition-all hover:bg-black text-white rounded-md duration-100 menu-item cursor-pointer'>
            <Link className={`${pathname === "/quiz" ? "bg-black" : "text-white"} font-primaryFont px-2 rounded-lg`} href="/quiz">Spiritual Quiz</Link>
        </li>
    </>;

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='bg-[#97afa3]'>
            <MyContainer>
                <div className='flex md:justify-center justify-between relative items-center md:py-7
                sm:py-5 py-3'>

                    <div className='md:absolute relative left-0 flex gap-3 items-center'>
                        <Image className='md:w-14 w-10 rounded-full' width={200} height={100} src={logo} alt='Logo' />
                        <h2 className='md:text-xl text-lg font-semibold font-latoFont'>IYF Barishal</h2>
                    </div>

                    <ul className='md:flex hidden gap-7 text-3xl font-semibold text-white'>
                        {navItems}
                    </ul>

                    <div className='md:hidden block'>
                        <button onClick={handleOpenMenu}>
                            {isOpen ? <RxCross2 className='sm:text-3xl text-2xl' /> : <FiMenu className='sm:text-3xl text-2xl' />} 
                        </button>

                        <ul id='dropdown-container' className={`transition-all duration-500 text-xl ${isOpen ? "h-auto w-auto" : "h-0 w-0"} overflow-hidden`}>
                            {navItems}
                        </ul>
                    </div>
                </div>
            </MyContainer>
        </div>
    );
};

export default NavBar;