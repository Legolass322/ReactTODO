import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { classes } from './NavUnderlined'

export const NavUnderlined = ({children, ...props}) => {
    const arrChildren = React.Children.toArray(children)
  return (
    <nav>
        <ul>
            { React.Children.map(arrChildren, child => {
                return (
                <li onClick={}>
                    { child }
                </li>
                )
            }) }
        </ul>
    </nav>
  )
}
