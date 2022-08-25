import React from 'react'
import { Link } from 'react-router-dom'
import { NavUnderlined } from '../NavUnderlined/NavUnderlined'

export const Header = () => {
    const links = [
        {
            key: 'page_todo',
            to: '/',
            children: <>Todo</>
        },
        {
            key: 'page_about',
            to: '/about',
            children: <>About</>
        },
        {
            key: 'page_just',
            to: '/just',
            children: <>Just</>
        },
    ]

    const makeObservable = (element, callback) => {
        const handler = e => {
            callback(element)
        }
        element.addEventListener('click', handler)
        return () => {
            element.removeEventListener('click', handler)
        }
    }

  return (
    <header>
        <NavUnderlined makeObservable={makeObservable}>
            {links.map(link => (
                <Link {...link}  />
            ))}
        </NavUnderlined>
    </header>
  )
}
