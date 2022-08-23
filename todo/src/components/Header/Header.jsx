import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Todo</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    </header>
  )
}
