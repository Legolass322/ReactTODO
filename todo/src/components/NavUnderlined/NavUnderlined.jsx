import React, {useRef, useEffect} from 'react'
import classes from './NavUnderlined.module.scss'

export const NavUnderlined = ({children, makeObservable, ...props}) => {
    const underscore = useRef()
    const list = useRef()
    const underscoreState = useRef({
        visible: false
    })
    const setUnderscore = (item) => {
        const line = underscore.current

        if (item === null) {
            if (underscoreState.current.visible) {
                line.style.display = 'none'
            }
            underscoreState.current.visible = false
            return
        }

        const newPosX = item.offsetLeft
        const newPosY = item.offsetTop + item.clientHeight - 2
        const newWidth = item.clientWidth

        const transition = '0.4s all ease-in-out'
        if (!underscoreState.current.visible) {
            line.style.transition = 'none'

            line.style.top = newPosY + 'px'
            line.style.left = newPosX + 'px'
            line.style.width = newWidth + 'px'
            
            line.style.display = 'block'
            line.style.transition = transition
            underscoreState.current.visible = true
            return
        }
        line.style.top = newPosY + 'px'
        line.style.left = newPosX + 'px'
        line.style.width = newWidth + 'px'
    }

    useEffect(() => {
        const lchildren = list.current.children
        const destructors = []
        console.log('Adding eventListeners: ', lchildren, list.current.childElementCount)
        for (let i = 1; i < list.current.childElementCount; i++) {
            destructors.push(makeObservable(lchildren[i], setUnderscore))
        }
        return () => {
            destructors.forEach(dest => dest())
        }
    }, [makeObservable, setUnderscore])
    

  return (
    <nav className={classes.Navbar}>
        <ul ref={list}>
            <div ref={underscore} className={classes.Underscore}></div>
            { React.Children.map(children, child => {
                const refferedChild = (
                    <li>
                        { React.cloneElement(child) }
                    </li>
                )
                return refferedChild
            }) }
        </ul>
    </nav>
  )
}
