import Image from 'next/image';
import React from 'react';

const NavBar = () => {
    return (
        <div className='text-red-500'>
            

            <div>
                <Image className='md:w-16 w-10' width={200} height={100} src={"https://selfrealization.in/wp-content/uploads/2022/04/cropped-1-2-120x122.png"} alt='Logo'/>
            </div>

            <ul>
                <li>Nav items</li>
                <li>Nav items</li>
                <li>Nav items</li>
                <li>Nav items</li>
                <li>Nav items</li>
            </ul>

        </div>
    );
};

export default NavBar;