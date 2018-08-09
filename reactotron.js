import Reactotron from 'reactotron-react-native'
// import { reactotronRedux } from 'reactotron-redux'
Reactotron
   .configure({
      // host: '<IP ADDRESS>',
      port: 9090
   }) // controls connection & communication settings
   // .use(reactotronRedux())
   .useReactNative() // add all built-in react native plugins
   .connect()

console.log = Reactotron.log
Reactotron.clear() // clears the reactotron every live reload
