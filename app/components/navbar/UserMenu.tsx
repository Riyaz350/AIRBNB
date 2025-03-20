'use client'
import React, { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';

const UserMenu = () => {
    const [isOpen, setIsOpen]  = useState(false)

    const toggleOpen = useCallback(()=>{
        setIsOpen((value)=> !value)
    },[])

    const handleClick = ()=>{
        console.log('hello')
    }
    return (
        <div className='relative'>
            <div className='flex flex-row gap-3 items-center'>
                <div  className='rounded-full text-sm cursor-pointer font-semibold hidden hover:bg-neutral-100 md:block py-3 transition'>
                    Airbnb your home
                </div>  
                <div onClick={toggleOpen} className='flex flex-row border-[1px] border-neutral-200 rounded-full cursor-pointer gap-3 hover:shadow-md items-center md:px-2 md:py-1 py-4 transition'>
                    <AiOutlineMenu/>
                    <div className='hidden md:block'>
                        <Avatar/>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

            {isOpen &&(
                <div className='bg-white rounded-xl shadow-md text-sm w-[40vw] absolute md:w-3/4 overflow-hidden right-0 top-12'>
                    <div className='flex flex-column cursor-pointer'>
                        <>
                        <MenuItem onClick={handleClick} label='Login'/>
                        <MenuItem onClick={handleClick} label='Sign Up'/>
                        </>

                    </div>
                </div>
            )}
            
        </div>
    );
};

export default UserMenu;