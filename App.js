/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import { Story } from './common/components'
import InitialScreenPage from './src/app/misc/scenes/InitialScreen/InitialScreenPage'

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
