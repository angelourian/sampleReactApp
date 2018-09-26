import React from 'react'
import { View } from 'react-native'

import ViewInitialStyle    from './view.style'
import ViewProperty from './view.property'
import { StyledComponent } from '../../decorators'

class CustomView extends React.Component {
   render(){
      const {
         ...props
      } = this.props
      
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

export default StyledComponent(ViewInitialStyle, ViewProperty)(CustomView)