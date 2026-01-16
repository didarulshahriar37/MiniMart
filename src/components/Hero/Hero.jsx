import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='pt-10 md:pt-20'>
        <div className='flex flex-col-reverse md:flex-row gap-10 text-center md:text-left justify-between items-center mt-10 rounded-2xl shadow-xl bg-primary/30 p-5 md:p-20'>
            <div className='space-y-5 md:space-y-10'>
                <h2 className='md:text-4xl text-2xl font-bold'>Shop Smarter, Faster</h2>
                <p className='md:text-2xl text-md text-black'>Discover the best products at unbeatable prices. MiniMart makes shopping easy, safe, and fun</p>
                <button className='btn bg-primary text-black hover:bg-secondary transition-colors'>View All Items</button>
            </div>
            <div>
                <Image src={"/Hero.png"} alt='Online Mart' width={700} height={60}></Image>
            </div>
        </div>
    </div>
  )
}
