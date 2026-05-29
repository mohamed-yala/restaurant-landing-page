import React from 'react'
import Button from '../components/Button'

function Welcome() {
  return (
    <section className='relative overflow-hidden bg-zinc-100'>
      <img
        className='pointer-events-none absolute left-[6%] top-10 w-[140px] opacity-60 max-[900px]:hidden'
        src='Group.png'
        alt=''
      />
      <img
        className='pointer-events-none absolute right-[8%] top-16 w-[120px] opacity-60 max-[900px]:hidden'
        src='Group (1).png'
        alt=''
      />
      <img
        className='pointer-events-none absolute right-[12%] bottom-8 w-[170px] opacity-50 max-[900px]:hidden'
        src='Group (3).png'
        alt=''
      />

      <div className='mx-auto flex max-w-[1200px] items-center justify-between gap-12 px-20 py-24 max-[1000px]:px-10 max-[900px]:flex-col max-[900px]:py-16'>
        <div className='relative flex w-[52%] items-center justify-center max-[900px]:w-full'>
          <div className='absolute -left-6 -top-8 h-16 w-16 rounded-full bg-orange-200/60 blur-2xl' />
          <img
            className='w-full max-w-[520px] drop-shadow-[0_25px_45px_rgba(15,23,42,0.22)]'
            src='dish-2 2.png'
            alt='Signature dish'
          />
        </div>

        <div className='w-[48%] max-[900px]:w-full'>
          <h2 className='font-serif text-[38px] font-semibold leading-tight text-slate-900 max-[1100px]:text-[34px] max-[900px]:text-[36px]'>
            Welcome to Our Restaurant
          </h2>
          <p className='mt-4 max-w-[460px] text-[14px] leading-6 text-slate-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className='mt-8 flex flex-wrap items-center gap-4'>
            <Button text={'Menu'} color='bg-slate-900' className='rounded-lg px-7 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.22)]' />
            <Button text={'Book a table'} className='rounded-lg px-7 py-3' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome