import React from 'react'
import Image from 'next/image'
import logo from '@/public/whitelogo.svg'
import home from '@/public/Home.svg'
import explore from '@/public/Search.svg'
import account from '@/public/User.svg'
import cart from '@/public/cart.svg'


export default function Navbar() {
  return (
    <div className=' relative w-full h-[14vh] rounded-t-3xl bg-[white] flex gap-[30%] justify-center items-center '>
        <div className='absolute rounded-full h-[100px] top-[-50%] w-[100px] border-[8px] border-[#F4F2EE] bg-pri flex justify-center items-center  '>
            <Image src={logo} alt="logo" className='h-[70%] w-[70%]'/>
        </div>
        <div className='flex gap-[40%]'>
            <div className='flex flex-col gap-1 justify-center items-center'>
                <Image src={home} alt='home' className='text-[blue]' />
                <h1 className='sm:text-[.8vw] text-[3vw] text-quad font-bold '>Home</h1>
            </div>
            <div className='flex flex-col gap-1 justify-center items-center'>
            <Image src={explore} alt='explore'/>
                <h1 className='sm:text-[.8vw] text-[3vw] text-quad font-bold '>Explore</h1>
            </div>
        </div>
        <div className='flex gap-[20%] '>
            <div className='flex flex-col gap-1 justify-center items-center'>
            <Image src={cart} alt='home'/>
                <h1 className='sm:text-[.8vw] text-[3vw] text-quad font-bold '>Purchases</h1>
            </div>
            <div className='flex flex-col gap-1 justify-center items-center'>
            <Image src={account} alt='account'/>
                <h1 className='sm:text-[.8vw] text-[3vw]  text-quad font-bold '>Account</h1>
            </div>
        </div>
    </div>
  )
}
