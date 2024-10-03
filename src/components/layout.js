import React from 'react'
import { Outlet } from 'react-router-dom' 
import Header from './header'

function Layout() {
  return (
    <div className='bg-zinc-200'>
        <main className='w-[1200px] max-w-full m-auto p-5'>
            <Header/>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout