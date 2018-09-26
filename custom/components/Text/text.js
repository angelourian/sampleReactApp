import React from 'react'
import { Text as RawText } from 'react-native'
import StyledComponent from 'custom/decorators/styled-component' 

import TextProperty from './text.property'
import TextInitialStyle    from './text.style'
import theme from 'theme'

class CustomText extends React.Component{
   render(){
      return (
         <RawText
            allowFontScaling = {false} 
            {...this.props}
         >
            { this.props.children }
         </RawText>
      )
   }   
}

export default StyledComponent(
    TextInitialStyle,
    TextProperty,
    {
       backgroundColor : 'transparent',
    //    color           : theme.fontColor,
    //    fontFamily      : theme.fontFamily, 
    //    fontSize        : theme.textMd
    }
)(CustomText)