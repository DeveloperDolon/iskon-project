
"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import MyContainer from './MyContainer';
import { usePathname } from 'next/navigation';


const NavBar =  ()  => {
    const pathname = usePathname();
    
    return (
        <div className='bg-[#97afa3]'>
            <MyContainer>
                <div className='text-red-500 flex justify-center relative items-center md:py-7
         py-5'>


                    <div className='absolute left-5'>
                        <Image className='md:w-14 w-10' width={200} height={100} src={"https://selfrealization.in/wp-content/uploads/2022/04/cropped-1-2-120x122.png"} alt='Logo' />
                    </div>

                    <ul className='flex gap-5 text-2xl font-semibold text-white'>
                        <li>
                            <Link className={pathname === "/" ? "text-black" : ""} href="/">Home</Link>
                        </li>
                        <li>
                            <Link className={pathname === "/contact" ? "text-black" : ""} href="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link className={pathname === "/about" ? "text-black" : ""} href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link className={pathname === "/donate" ? "text-black" : ""} href="/donate">Donate</Link>
                        </li>
                        <li>
                            <Link className={pathname === "/quiz" ? "text-black" : ""} href="/quiz">Spiritual Quiz</Link>
                        </li>
                    </ul>
                </div>
            </MyContainer>
        </div>
    );
};

export default NavBar;