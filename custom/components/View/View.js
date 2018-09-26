import React from 'react'
import { View } from 'react-native'

import ViewStyle    from './view.style'
import ViewProperty from './view.property'
import  StyledComponent from '../../decorators/styled-component'

class CustomView extends React.Component {
   render(){
      const {
         ...props
      } = this.props
      console.log('Custom View')
      console.log(Object.keys(this.props))
      return (
         <View 
            ref = {this.props.element}
            {...props}
         >
            { this.props.children } 
         </View>
      )
   }
}

export default StyledComponent(ViewStyle, ViewProperty)(CustomView)