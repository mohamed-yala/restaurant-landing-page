import React from 'react'
import Button from '../components/Button'

function Hero() {
  return (
    <div className='flex  items-center border-green-500 border-2 min-h-[100vh]'>

      <div className='flex px-20  justify-between items-center border-red-500 border-2 mt-10'>

        <div className='w-[50%]'>
            <h1>We provide the best food for you</h1>
            <p>Our mission is to make sure you get the best food in the world. We have a wide variety of dishes to choose from, and we are sure you will find something you love.</p>
            <div>
                <Button text={"Menu"}/>
                <Button text={"Book a table"}/>
            </div>

        </div>

        <div className='relative w-[40%]   flex items-center justify-center border-blue-500 border-2'>
            <img className='w-[35%] absolute top-0 right-0' src='Group.png'/>
            <img className='w-[30%] absolute bottom-0 right-0' src='Group (1).png'/>
            <img className='w-[45%] absolute top-0 left-0' src='Group (2).png'/>

            <div className='w-[100%] z-10 py-10 px-20'>
             <img className='' src='Mask group.png'/>
            </div>

        </div>

     </div>
    </div>
  )
}

export default Hero