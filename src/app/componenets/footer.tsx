import Link  from 'next/link'
import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image';

export default function Footer() {
  return (
    <div>

      <footer className="text-gray-600 body-font bg-teal-800">
     <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    
      <span className="ml-3 text-xl">
        <Image src={'/food-drink-logo-design-brand-label_125269-69.avif'} width={50} height={50} alt='logo' className='rounded-full'/>
      </span>
    
      <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2025 Foods And Drinks — All Right Reserved. </p>

    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link href={'/'} className="text-white">
      <IoLogoFacebook size={25} />
      </Link >
      <Link href={'/'}  className="ml-3 text-white">
      <FaInstagram size={25}/>
      </Link >
      <Link href={'/'} className="ml-3 text-white">
      <FaTwitter size={25}/>
      </Link >
      <Link href='/' className="ml-3 text-white">
      <FaLinkedin size={25}/>
      </Link >
    </span>
  </div>
</footer>
    </div>
  )
}
