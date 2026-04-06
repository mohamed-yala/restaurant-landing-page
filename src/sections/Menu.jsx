import React from 'react'
import DishCard from '../components/DishCard'
import { dishes } from '../data/dishesData'

function Menu() {
  return (
    <div className='relative bg-zinc-100 pb-12 '>

        <img className='absolute left-[10%] top-10 w-[150px]' src='Group.png'/>
        <img className='absolute right-[10%] top-10 w-[130px]' src='Group (1).png'/>
        <img className='absolute right-[45%] bottom-0' src='Group (4).png'/>
        <img className='absolute right-[10%] bottom-0' src='Group (3).png'/>
        <img className='absolute left-[25%] w-[100px] bottom-0' src='Group (5).png'/>

        <div className='text-center pt-12'>
            <h1 className='font-serif text-[38px] font-semibold'>Our Special Dishes</h1>
            <p className='text-zinc-500'>Discover our most popular dishes that will tantalize your taste buds.</p>
        </div>

        <div className='flex flex-wrap px-8 mt-20 justify-center gap-6'>
            {dishes.map((dish) => (
                <DishCard
                    key={dish.id}
                    img={dish.img}
                    title={dish.title}
                    description={dish.description}
                    price={dish.price}
                    isWhiteBackground={dish.isWhiteBackground}
                />
            ))}
        </div>

    </div>
  )
}

export default Menu