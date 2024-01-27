import React from 'react'
import Header from './header'
import CompanyBox from '@/app/globalUtils/companyBox'
import Navbar from '@/app/globalUtils/navbar'

export default function Main() {
  return (
    <div className='sm:w-[30%] w-full border-[2px] border-[grey]  h-[100vh] main'>
        <Header/>
        <div className='h-[75vh]'>

        <CompanyBox/>
        </div>
        <Navbar/>

    </div>
  )
}
