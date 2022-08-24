import React from 'react'
import { classes } from './NavUnderlined'

export const NavUnderlined = ({children, ...props}) => {
    const arrChildren = React.Children.toArray(children)
    const underscore = useRef()
  return (
    <nav>
        <div ref={underscore}></div>
        <ul>
            { React.Children.map(arrChildren, child => {
                if (child.props.active) {
                    const uelement = underscore.current
                    
                }
                return (
                <li>
                    { child }
                </li>
                )
            }) }
        </ul>
    </nav>
  )
}
