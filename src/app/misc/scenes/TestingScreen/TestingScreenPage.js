import React from 'react'
import {
   View, Text, TouchableOpacity
} from 'react-native'

import {
   TextInput, CustomText
} from 'custom/components'

export default class TestingScreenPage extends React.Component {
   constructor(props) {
      super(props)
      this.validate = this.validate.bind(this)
   }
   render() {
      return(
         <View
            style = {{
               flex: 1,
               padding: 25
            }}
         >
            <Text>Testing Screen Page</Text>
            <CustomText
               color = "red"
            >
               MASURIAN
            </CustomText>
            {/* <TextInput
               input = {i => this._textInput = i}
            />
            <TouchableOpacity
               onPress = {this.validate}
            >
               <Text>A</Text>
            </TouchableOpacity> */}
         </View>
      )
   }

   validate(values) {
      console.log('clicked')
      console.log(this._textInput.value)
      // console.log(values)
   }

}