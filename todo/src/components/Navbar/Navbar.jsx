import React from 'react'
import classes from './Navbar.module.scss'

export const Navbar = ({children, ...props}) => {
  return (
    <nav className={classes.Navbar} {...props}>
        <ul>
            { React.Children.map(children, child => (
                <li>{ React.cloneElement(child) }</li>
            )) }
        </ul>
    </nav>
  )
}
