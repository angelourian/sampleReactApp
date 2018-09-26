/* eslint-disable */
import React from 'React'
import { StyleSheet } from 'react-native'

export default (initialStyles, propertyStyle = {}, defaultStyle = {}) => {

   let propertyMap = { ...initialStyles, ...propertyStyle }
   let styleSheet  = StyleSheet.create({ default : defaultStyle, ...initialStyles })

   return Element => {
      return class extends React.PureComponent{
         render() {
            this.generateStyle(this.props)
            return (
               <Element
                  { ...this.props }
                  style = {this.style}
               />
            )
         }

         generateStyle(props){ 
            this.properties = {}

            let generatedStyle = Object.keys(props)
               .filter(key => typeof propertyMap[key] !== 'undefined')
               .map(key => {
                  if(typeof propertyMap[key] == 'function') {
                    return propertyMap[key](props[key])
                  }
                  return styleSheet[key]
               })
            
            console.log(generatedStyle)
            
            this.style = [
               styleSheet.default,
               generatedStyle,
               props.style
            ]
         }
      }
   }
}