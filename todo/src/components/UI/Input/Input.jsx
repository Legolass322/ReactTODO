import React from 'react'
import classes from './Input.module.scss'

export const Input = ({styleClasses, ...props}) => {
  return (
    <input {...props} className={`${classes.Input} ${styleClasses}`} />
  )
}