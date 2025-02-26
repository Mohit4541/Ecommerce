import React from 'react'
import { useForm } from "react-hook-form"
import {NavLink } from 'react-router-dom'
const Login = () => {
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
            <h2 className='font-bold'>Log In</h2>
            <form  onSubmit={handleSubmit(onSubmit)} className='flex p-2.5 gap-2.5 flex-col'>
              <input type="email" placeholder ="Username" className='border-0 outline-none border-b-2 border '  {...register("username", { required: true })} />
              {errors.username && <span className='text-red-500'>This field is required</span>}
              <input type="password" placeholder='Enter Password' className='border-0 outline-none border-b-2 border ' {...register("password", { required: true,  })} />
              {errors.username && <span className='text-red-500'>This field is required</span>}
              <input type="submit" className='bg-blue-500 border border-blue-500 hover:bg-inherit cursor-pointer hover:' />
            </form>
            <div>
                
            </div>
        </div>
    )
}
export default Login  