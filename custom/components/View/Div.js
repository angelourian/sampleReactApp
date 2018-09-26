import React from 'react'
import View  from './View'

export default class DivContainer extends React.Component{
   render(){
      return (
         <View container {...this.props}>
            { this.props.children }
         </View>
      )
   }
}