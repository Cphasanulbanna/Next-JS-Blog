import NavBar from '@/components/NavBar'
import React from 'react'


const layout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <main className='font-work-sans'>
        <NavBar />
        {children}
        </main>
  )
}

export default layout