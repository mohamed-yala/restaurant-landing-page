import React from 'react'
import Button from '../components/Button'

function Chef() {
  const highlights = [
    'Lorem ipsum dolor sit amet, consectetur',
    'Lorem ipsum dolor sit amet, consectetur',
    'Lorem ipsum dolor sit amet, consectetur',
    'Lorem ipsum dolor sit amet, consectetur',
    'Lorem ipsum dolor sit amet, consectetur',
    'Lorem ipsum dolor sit amet, consectetur',
  ]

  return (
    <section id='chef' className='relative overflow-hidden bg-white'>
      <img
        className='pointer-events-none absolute left-[6%] top-10 w-[150px] opacity-60 max-[900px]:hidden'
        src='Group (2).png'
        alt=''
      />

      <div className='mx-auto flex max-w-[1200px] items-center justify-between gap-16 px-24 py-24 max-[1000px]:px-10 max-[900px]:flex-col max-[900px]:py-16'>
        <div className='w-[52%] max-[900px]:w-full'>
          <h2 className='font-serif text-[38px] font-semibold leading-tight text-slate-900 max-[1100px]:text-[34px]'>
            Our Expects Chef
          </h2>
          <p className='mt-4 max-w-[460px] text-[14px] leading-6 text-slate-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className='mt-8 grid max-w-[420px] grid-cols-2 gap-x-6 gap-y-4 text-[12px] text-slate-500 max-[520px]:grid-cols-1'>
            {highlights.map((item, index) => (
              <div key={`${item}-${index}`} className='flex items-start gap-2'>
                <span className='mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-100 text-orange-500'>
                  <span className='h-2 w-2 rounded-full bg-orange-500' />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className='mt-8 flex flex-wrap items-center gap-4'>
            <Button text={'Menu'} color='bg-slate-900' className='rounded-lg px-7 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.22)]' />
            <Button text={'Book a table'} className='rounded-lg px-7 py-3' />
          </div>
        </div>

        <div className='relative flex w-[48%] items-center justify-center max-[900px]:w-full'>
          <img
            className='relative z-10 w-[280px] drop-shadow-[0_25px_45px_rgba(15,23,42,0.18)] max-[1100px]:w-[250px] max-[900px]:w-[260px]'
            src='chef 1.png'
            alt='Chef holding a dish'
          />
        </div>
      </div>
    </section>
  )
}

export default Chef