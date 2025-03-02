import React from 'react'



const footerbackground = {
    backgroundImage : `url("https://static.vecteezy.com/system/resources/previews/010/803/399/original/background-with-colorful-shopping-bags-illustration-sale-and-discount-concept-vector.jpg")`,

    backgroundPosition : "bottom",
    backgroundRepeat : "no-repeat",
    height : "50%",
    width :"100%",
}
const Footer = () => {
  return (
    <div className='bg-[#00bc7d] flex justify-evenly p-[50px] rounded-2xl'  style={footerbackground}>
        <div className='w-[33%]'>
            <h2 className='text-4xl'>  About Us</h2>
            <p className='m-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil porro nostrum explicabo eligendi iusto nulla expedita iste, provident, praesentium, dolores reiciendis! Repudiandae eligendi, facere quis autem dolorem ratione obcaecati nulla!</p>
        </div>

        <div>
            <h2 className='text-4xl'>Information</h2>
            <ul className='m-[30px] '>
                <li className='m-1'>Home</li>
                <li className='m-1'>About</li>
                <li className='m-1'>Blog</li>
                <li className='m-1'>Contact</li>
            </ul>
        </div>
        <div className='flex-row  gap-[50px]' >
            <h3 className='text-4xl'>FeedBack</h3>
            <input type="text" className='border-1' />
            <div>

            <button className='border-2 m-1 px-2.5'>Submit</button> 
            </div>
        </div>


    </div>
  )
}

export default Footer