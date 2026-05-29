import React from 'react'
import { socialIcons } from '../data/socialIcons'

function Footer() {
  const navigation = ['Menu', 'About us', 'Contact us', 'Main dishes']
  const dishes = ['Fish & Veggies', 'Tofu Chilli', 'Egg & Cucumber', 'Lumpia w/Suace']

  return (
    <footer id='contact' className='relative overflow-hidden bg-white'>
      <div className='mx-auto max-w-[1200px] px-4 py-16 max-[1200px]:px-4 max-[1000px]:px-10'>
        <div className='grid grid-cols-[1.2fr_0.7fr_0.8fr_0.7fr] gap-10 text-sm text-slate-500 max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1'>
          <div>
            <div className='flex items-center gap-3 text-slate-900'>
              <span className='flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white'>
                <span className='h-2 w-2 rounded-full bg-white' />
              </span>
              <span className='text-lg font-semibold'>restaurant</span>
            </div>

            <p className='mt-4 max-w-[280px] leading-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
              <a className='ml-1 text-slate-700' href='#'>
                Learn more
              </a>
            </p>

            <div className='mt-6'>
              <h3 className='text-xs font-semibold uppercase tracking-[0.12em] text-slate-700'>Opening hours</h3>
              <div className='mt-3 grid grid-cols-3 gap-4 text-[12px] max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1'>
                <div>
                  <p className='font-semibold text-slate-700'>Monday - Friday</p>
                  <p>8:00 am to 9:00 pm</p>
                </div>
                <div>
                  <p className='font-semibold text-slate-700'>Saturday</p>
                  <p>8:00 am to 9:00 pm</p>
                </div>
                <div>
                  <p className='font-semibold text-slate-700'>Sunday</p>
                  <p>CLOSED</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-xs font-semibold uppercase tracking-[0.12em] text-slate-700'>Navigation</h3>
            <ul className='mt-4 space-y-2'>
              {navigation.map((item) => (
                <li key={item}>
                  <a className='transition-colors hover:text-slate-900' href='#'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-xs font-semibold uppercase tracking-[0.12em] text-slate-700'>Dishes</h3>
            <ul className='mt-4 space-y-2'>
              {dishes.map((item) => (
                <li key={item}>
                  <a className='transition-colors hover:text-slate-900' href='#'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-xs font-semibold uppercase tracking-[0.12em] text-slate-700'>Follow us</h3>
            <div className='mt-4 flex items-center gap-3'>
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
        </div>

        <div className='mt-12 border-t border-slate-200 pt-6 text-[12px] text-slate-500'>
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <p>2022 Restaurants. All Right Reserved. Designed by Isaac</p>
            <div className='flex items-center gap-6'>
              <a className='transition-colors hover:text-slate-900' href='#'>
                Terms of Service
              </a>
              <a className='transition-colors hover:text-slate-900' href='#'>
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer