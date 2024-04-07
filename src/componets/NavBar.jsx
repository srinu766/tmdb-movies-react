import React from 'react'
import Logo from './../assets/movieLogo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex border space-x-8  items-center pl-3 py-3 shadow-sm'>

    <img className='w-[50px]' src={Logo} alt='image' />
    <Link to='/' className='text-blue-500 font-bold text-2xl'>Home</Link>
    <Link to='/watchlist' className='text-blue-500 font-bold text-2xl'>Watch List</Link>
    </div>
  )
}

export default NavBar
