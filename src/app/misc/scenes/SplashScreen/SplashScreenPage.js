import React from 'react'
import {
   ActivityIndicator,
   Image,
   StyleSheet,
   Text,
   TouchableOpacity,
   View
} from 'react-native'
import {
   If,
   List
} from '../../../../../common/components'
import { connect } from 'react-redux'
import { initializeApp } from '../../actions/initialize-app'
import { bindActionCreators } from 'redux'


const mapActionToProps = dispatch => bindActionCreators({
   initializeApp
}, dispatch)

class SplashScreen extends React.Component {
   constructor (props) {
      super(props)
      this.state = {}
   }
   render () {
      console.log('SplashScreen')
      return (
         <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
         </View>
      )
   }
   componentDidMount() {
      // console.log('componentDidMount')
      setTimeout(() => {
         this.props.initializeApp()
      }, 3000)
   }

   
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'gray'
   }
})

export default connect(false, mapActionToProps)(SplashScreen)