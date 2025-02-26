import React from 'react'
import { useForm } from "react-hook-form"
import {NavLink } from 'react-router-dom'
import Login from './Login'
const signup = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm()
    function onSubmit(data) {
        console.log(data)
    }
    return (
        <div className='border border-black bg-white w-[250px] m-auto'>
            <h2 className='font-bold'>Signup Please</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex p-2.5 gap-2.5 flex-col'>
                    <input type="text" placeholder='UserName' className='border-0 outline-none border-b-2 border placeholder:text-base' {...register("username" ,{ required: true })} />
                    {errors.username && <span className='text-red-500'>This field is required</span>}
                    <input type="email" placeholder='Email' className='border-0 outline-none border-b-2 border' {...register("email" ,{ required: true })} />
                    {errors.username && <span className='text-red-500'>This field is required</span>}
                    <input type="password" placeholder='Password' className='border-0 outline-none border-b-2 border' {...register("password" ,{ required: true })} />
                    <input type="password" placeholder='confirmpassword' className='border-0 outline-none border-b-2 border' {...register("confirmpass",{ required: true })} />
                    <p>New user ? <NavLink to = '/Login' className={"text-blue-400"}> Login </NavLink> </p>
                   <input type="submit" className='bg-blue-500 border border-blue-500 hover:bg-inherit cursor-pointer hover:' />
                </form>
            </div>
        </div>
    )
}
export default signup   