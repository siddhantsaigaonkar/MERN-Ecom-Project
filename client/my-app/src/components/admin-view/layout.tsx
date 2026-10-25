import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div className='flex min-h-screen w-full'>

      <h1>Admin Page</h1>
      {/* sidebar */}
      
      <div className='flex  flex-1 flex-col'>
        {/* header */}
        
        <main className='flex-1 flex bg-muted/40 p-4 md:p-6'>
         <Outlet/>
        </main>
      </div>     
    </div>
  )
}
