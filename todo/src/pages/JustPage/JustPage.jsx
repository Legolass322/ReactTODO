import React, {useCallback} from 'react'
import { NavUnderlined } from '../../components/NavUnderlined/NavUnderlined'

export const JustPage = () => {
    const makeObservable = useCallback(
        (element, callback) => {
            const handler = e => {
                console.log(element)
                callback(element)
            }
            element.addEventListener('mouseover', handler)
            return () => {
                element.removeEventListener('mouseover', handler)
            }
        }, []
    )
  return (
    <>
        <h1>Just page for testing</h1>
        <NavUnderlined makeObservable={makeObservable}>
            <p>One</p>
            <p>Two</p>
            <p>Three</p>
        </NavUnderlined>
    </>
  )
}
