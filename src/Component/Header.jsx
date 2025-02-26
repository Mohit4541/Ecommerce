import React from 'react'
import Icons from './Uiverse/Icons'
import Switch from './Uiverse/Darkmood'


import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>

            <div>
                <div className='bg-emerald-500 flex   p-[10px] '>

                    <div>
                        <img src="https://www.pngkey.com/png/full/209-2092097_-img-nintendo-eshop-logo-png.png" className='h-[30px] ' alt="" />
                    </div >
                    <div className='absolute top-[3px] right-[32px]'>
                        <Icons />
                    </div>
                </div>

                <div className='flex justify-center py-[20px] '>
                    <ul className='flex gap-[150px] text-[20px] '>
                        <div className='flex items-center gap-[10px]'>
                            <li>
                                <NavLink to="/Home" className={({ isActive }) =>
                                    isActive ? "Active text-amber-600 font-bold" : ""
                                }>
                                    <div className='flex items-center'>

                                        <IoHomeOutline className='flex' />
                                        Home
                                    </div>
                                </NavLink>
                            </li>
                        </div>
                        <div className='flex items-center gap-[10px]'>
                            <NavLink to="/Mens" className={({ isActive }) =>
                                isActive ? "Active text-amber-600 font-bold" : ""
                            }>
                                <div className='flex items-center'>

                                  
                                    Men's Clothing
                                </div>
                            </NavLink>
                        </div>

                        <div className='flex items-center gap-[10px]'>
                            <NavLink to="/Womens" className={({ isActive }) =>
                                isActive ? "Active text-amber-600 font-bold" : ""
                            }>
                                <div className='flex items-center'>

                                 
                                    Women's Clothing
                                </div>
                            </NavLink>

                        </div>
                    </ul>
                </div>
            </div>


        </>
    )
}

export default Header