import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'

export const Header = () => {
  return (
    <header>
        <Navbar>
            <Link to='/'>Todo</Link>
            <Link to='/about'>About</Link>
            <Link to='/just'>Just</Link>
        </Navbar>
    </header>
  )
}
