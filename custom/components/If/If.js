import React from 'react'
import { View } from 'react-native'

const If = ({ children, value, ...props }) => {
   if (value) {
      if (typeof children === 'function') return children(props)
      return children
   } 

   return false
}

export default If