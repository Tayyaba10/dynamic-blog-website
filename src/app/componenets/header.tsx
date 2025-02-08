import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (

 <div>
    <header className="text-gray-600 body-font bg-teal-800">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
   <span className="ml-3 text-xl">
      <Image src={'/food-drink-logo-design-brand-label_125269-69.avif'} width={50} height={50} alt='logo' className='rounded-full'/>
   </span>   
      <span className="ml-3 text-2xl text-white font-serif">Foods And Drinks</span>
    
    <nav className="md:ml-auto flex flex-wrap items-center text-white text-lg justify-center">
      <Link href={'/'} className="mr-5 hover:text-gray-900">Home</Link>
      <Link href={'/about'} className="mr-5 hover:text-gray-900">About</Link>
      <Link href={'/blog'} className="mr-5 hover:text-gray-900">Blogs</Link>
      <Link href={'/contact'} className="mr-5 hover:text-gray-900">Contact</Link>
    </nav>

  </div>
  </header>
 </div>
  )
}
