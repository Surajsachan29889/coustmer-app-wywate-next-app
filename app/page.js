import React from 'react'
import Link from 'next/link'
export default function App() {
  return (
    <div className=' flex justify-center items-center '>
        <Link href="/checkout">
            <button className='w-[10vw] h-[10vh] mt-[50vh] text-[white] font-bold rounded-xl bg-pri  '>checkout Screen</button>
        </Link>
    </div>
  )
}
