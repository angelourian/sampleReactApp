/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import { Platform, UIManager } from 'react-native'
import { Story } from './custom/components'

import SplashScreenPage from './src/app/misc/scenes/SplashScreen/SplashScreenPage'
import InitialScreenPage from './src/app/misc/scenes/InitialScreen/InitialScreenPage'
import TestingScreenPage from './src/app/misc/scenes/TestingScreen/TestingScreenPage'

if (Platform.OS === 'android') {
   UIManager.setLayoutAnimationEnabledExperimental &&
   UIManager.setLayoutAnimationEnabledExperimental(true)
}

class App extends Component {
   render() {
      return (
         <Story id = "root" initialScene = "TestingScreen">
            <SplashScreenPage route ="SplashScreen" />
            <InitialScreenPage route = "InitialScreen" />
            <TestingScreenPage route = "TestingScreen" />
         </Story>
      )
   }
}

export default App
//connect(mapStateToProps, mapActionToProps)
