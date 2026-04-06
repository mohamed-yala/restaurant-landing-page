import React from 'react'
import Button from '../components/Button'
import { socialIcons } from '../data/socialIcons'

function Hero() {
  return (
    <div className='flex  items-center min-h-[100vh]'>

      <div className='flex w-full px-20 justify-between items-center mt-20 max-[1000px]:px-10 max-[800px]:flex-col max-[800px]:mt-28  '>


        <div className='w-[50%] max-[958px]:w-full '>
          <h1 className=' font-serif text-[50px] max-[1042px]:text-[40px] font-semibold leading-[1.06] tracking-[-0.02em] text-slate-900 max-[800px]:text-[50px] max-[800px]:max-w-[600px]'>We provide the best food for you</h1>
          <p className='mt-7 max-w-[450px] text-[14px]  text-slate-500'>Our mission is to make sure you get the best food in the world. We have a wide variety of dishes to choose from, and we are sure you will find something you love.</p>
          <div className='mt-10 flex flex-wrap items-center gap-4'>
            <Button text={"Menu"} color='bg-slate-900' className='rounded-lg px-7 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.22)]'/>
            <Button text={"Book a table"} className='rounded-lg px-7 py-3'/>
          </div>

          <div className='mt-10 flex w-fit items-center gap-3 border-t border-slate-300 pt-6'>
            {socialIcons.map((icon) => (
              <a
                key={icon.id}
                href={icon.href}
                aria-label={icon.label}
                className='flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition duration-200 hover:border-slate-900 hover:text-slate-900'
              >
                <svg viewBox='0 0 24 24' className='h-4 w-4' fill='none' stroke='currentColor' strokeWidth='1.8'>
                  <path d={icon.path} strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </a>
            ))}
          </div>

        </div>


        <div className='relative w-[450px] flex items-center justify-center'>
            <img className='w-[170px] absolute top-0 right-0' src='Group.png'/>
            <img className='w-[120px] absolute bottom-[55px] right-0' src='Group (1).png'/>
            <img className='w-[200px] absolute top-0 left-0' src='Group (2).png'/>
            <img className='w-[180px] z-20 absolute bottom-16 left-0' src='dish-2 1.png'/>

            <div className='w-[500px] z-10 py-12 px-20'>
             <img className='' src='Mask group.png'/>
            </div>

        </div>

     </div>
    </div>
  )
}

export default Hero