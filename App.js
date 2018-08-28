/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import { Platform, UIManager } from 'react-native'
import { Story } from './common/components'
import InitialScreenPage from './src/app/misc/scenes/InitialScreen/InitialScreenPage'

if (Platform.OS === 'android') {
   UIManager.setLayoutAnimationEnabledExperimental &&
   UIManager.setLayoutAnimationEnabledExperimental(true)
}

class App extends Component {
   render() {
      return (
         <Story id = "root" initialScene = "InitialScreen">
            <InitialScreenPage route = "InitialScreen" />
         </Story>
      )
   }
}

export default App
//connect(mapStateToProps, mapActionToProps)
