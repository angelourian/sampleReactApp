import React from 'react'
import { Keyboard, InteractionManager } from 'react-native'
import { StackNavigator, NavigationActions } from 'react-navigation'
// import theme from 'config/theme'
let TRANSITIONING = false

export default class Story extends React.Component {
   constructor(props) {
      super(props)
      this.getPages()
   }

   render() {
      const { ...props } = this.props
      const Navigator = this.navigator

      return (
         <Navigator
            ref = {this.registerNavigator}
            screenProps = {{
               ...props,
               navigator: () => this,
               pushScene: this.pushScene,
               popScene: this.popScene,
               resetScene: this.resetScene
            }}
         />
      )
   }

   componentDidMount() {
      this.setupRouting()
   }

   componentWillUnmount() {
      if (this.props.id) { Story.removeNavigator(this.props.id) }
   }

   registerNavigator = (nav) => {
      this._navigator = nav

      if (this.props.id) { Story.registerNavigator(this.props.id, this) }
   }

   getPages() {
      const { ...props } = this.props

      const scenes = React.Children
         .map(props.children, e => e)
         .reduce((value, e) => ({
            ...value,
            [e.props.route]: {
               screen: this.createScene(e.type, e.props)
            }
         }), {})


      this.navigator = StackNavigator(scenes, {
         headerMode: 'none',
         cardStyle: {
            // backgroundColor: theme.primary
         },
         //  transitionConfig: () => ({
         //     containerStyle: {
         //     }
         //   }),
         initialRouteName: props.initialScene,
         ...(props.pageProps || {})
      })
   }

   setupRouting() {
      const defaultAction = this.navigator.router.getStateForAction

      this.navigator.router.getStateForAction = (action, state) => {
         if (action.type === 'Navigation/INIT') return defaultAction(action, state)
         if (action.type === 'Navigation/RESET') {
            Keyboard.dismiss()
            return defaultAction(action, state)
         }
         if (action.bypassChecking) return defaultAction(action, state)

         if (TRANSITIONING) return false
         Keyboard.dismiss()
         // this will block all navigation dispatches when a page is transitioning
         this.handleInteraction()

         return defaultAction(action, state)
      }
   }

   handleInteraction() {
      TRANSITIONING = true
      InteractionManager.runAfterInteractions(() => { TRANSITIONING = false })
   }

   createScene(Component, componentProps) {
      // const { ...props } = this.props

      return class extends React.Component {
         render() {
            const { screenProps, ...props } = this.props
            const { params } = this.props.navigation.state || { }

            return (
               <Component
                  {...screenProps}
                  {...props}
                  {...componentProps}
                  {...params}
               />
            )
         }
      }
   }

   /**
    * Go to the selected scene
    */
   pushScene = (scene, params = {}, bypassChecking = false) => {
      this._navigator.dispatch(NavigationActions.navigate({
         routeName: scene,
         key: params.key || scene,
         params,
         bypassChecking
      }))
   }

   /**
    * Go back to the previous screens
   */
   popScene = (route) => {
      this._navigator.dispatch(NavigationActions.back({ key: route }))
   }

   /**
    * Reset the screen
    */
   resetScene = (scene, params, index = 0) => {
      this._navigator.dispatch(NavigationActions.reset({
         index,
         actions: [
            NavigationActions.navigate({
               routeName: scene,
               params
            })
         ]
      }))
   }

   /**
    * Static methods
    */

   /**
    * List of navigators saved
    */
   static navigators = {}

   /**
    * register navigator
    * @param  key       - navigator key or id
    * @param  navigator - navigator element to be saved
    */
   static registerNavigator(key, navigator) {
      Story.navigators = {
         ...Story.navigators,
         [key]: navigator
      }
   }

   /**
    * get registered navigator
    * @param  key - navigator key
    * @return navigator element, false if not
    */
   static getNavigator(key) {
      return Story.navigators[key] || false
   }

   /**
    * Removes a navigator using key
    * @param  key - navigator key
    */
   static removeNavigator(key) {
      Story.navigators = {
         ...Story.navigators,
         [key]: undefined
      }
   }
}

