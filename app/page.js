import React from 'react'
import Link from 'next/link'
export default function App() {
  return (
    <div className=' flex justify-center items-center flex-col gap-[5vh] pt-[20%]  '>
        <Link href="/checkout">
            <button className='w-[10vw] h-[10vh]  text-[white] font-bold rounded-xl bg-pri  '>checkout Screen</button>
        </Link>
        <Link href="/screen20">
            <button className='w-[10vw] h-[10vh]  text-[white] font-bold rounded-xl bg-pri  '>Screen 20</button>
        </Link>
    </div>
  )
}
