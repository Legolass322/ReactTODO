import React from 'react'
import { classes } from 'Navbar.module.scss'

export const Navbar = ({children, ...props}) => {
  return (
    <nav className={classes.Navbar} {...props}>{ children }</nav>
  )
}
