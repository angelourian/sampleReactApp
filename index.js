import './reactotron'
import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/store'
import App from './App'

const AppAndProvider = () => (
   <Provider store = {store}>
      <App />
   </Provider>
)
// #endregion
AppRegistry.registerComponent('sampleApp', () => AppAndProvider)
