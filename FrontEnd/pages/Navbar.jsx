'use client'
import  Link  from "next/link"

const Button = ({btnName}) => {
  return (
    <div className=''>
      <Link href={'/login'} className='bg-blue-300 px-6 py-3 border-solid border-slate-400 border-2 rounded-xl'>
        {btnName}
      </Link>
    </div>
  )
}

export default function Navbar() {
  return (
  <div className='p-10 text-base font-bold'>
    <nav className='flex justify-between items-center'>
      <div className='text-2xl'>
        Sponsorship Wala
      </div>
      <div className='flex justify-around gap-10 items-center'>
        <div>
          <a href="">
            About
          </a>
        </div>
        <div>
          <a href="">
            Explore
          </a>
        </div>
        <div>
          <a href="">
          Contact Us
        </a>
        </div>
          <Button btnName="Login/ Sign Up" />
      </div>
    </nav>
    
  </div>
  )
}
