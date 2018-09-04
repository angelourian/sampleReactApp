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
import { getUsers, getTheUsers } from '../../actions/get-users'
import { bindActionCreators } from 'redux'

import { GoogleSignin } from 'react-native-google-signin'

const mapActionToProps = {
   getUsers
}
const mapActionToProps2 = dispatch => bindActionCreators({
   getTheUsers
}, dispatch)

const mapStateToProps = store => ({
   owner: store.misc.owner || {},
   status: store.misc.status.getUsers || {},
   users: store.misc.users || []
})
class InitialScreenPage extends React.Component {
   constructor (props) {
      super(props)
      console.log('constructor')
      this.state = {}
   }
   render () {
      console.log('render')
      const { owner, status, users } = this.props
      return (
         <View style={styles.container}>
            <View style = {[styles.header]}>
               <Text style = {styles.headerText}>Sample React Native Mobile App</Text>
               <TouchableOpacity
                  onPress = {() => this.googleSignin()}
               >
                  <Text>Google Signin</Text>
               </TouchableOpacity>
            </View>
            <View style = {styles.contentContainer}>
               <If value = {status.processing}>
                  <ActivityIndicator size="large" color="#0000ff" />
               </If>
               <If value = {status.fail}>
                  <Text>Unable fetching of users!</Text>
               </If>
               <If value = {status.end && users.length === 0}>
                  <Text>No Users found!</Text>
               </If>
               {
                  (
                     users &&
                     typeof users === 'object'
                  ) &&
                     <View
                        style = {{ width: '100%' }}
                     >
                        <List
                           items={users}
                        >
                           {
                              (data, index) => {
                                 return(
                                    <View
                                       key= {index}
                                       style = {{
                                          paddingVertical: 10,
                                          width: '100%',
                                          alignItems: 'center'
                                       }}
                                    >
                                       <Image
                                          source = {{uri: data.avatar}}
                                          style = {styles.contentImage}
                                       />
                                       <Text key = {index} style ={styles.contentText}>{data.name}</Text>
                                    </View>
                                 )
                              }
                           }
                        </List>
                     </View>
               }
            </View>
            <View style ={styles.footer}>
               {
                  owner &&
                     <Text style={styles.italicFont}>{`Owner: ${owner}`}</Text>
               }
            </View>
         </View>
      )
   }
   componentDidMount() {
      console.log('componentDidMount')
      // this.props.getUsers()
      this.props.getTheUsers()
   }

   googleSignin() {
      console.log('Google Signin')
      GoogleSignin.hasPlayServices({ autoResolve: true })
         .then(success=> {
            if (success) {
               GoogleSignin.configure({
                  webClientId: '773889054044-gq8lq98sqq4kai697ir3r18k59nvm5mm.apps.googleusercontent.com', // only for web
               })
               .then(success=> {
                  if (success) {
                     GoogleSignin.signIn()
                     .then(user => {
                        console.log('user')
                        console.log(user)
                        alert(user.name)
                     })
                     .catch(error => {
                        console.log('error')
                        console.log(error)
                        alert(error)
                     })
                  }
               })
            }
         })
       
   }

//    static  getDerivedStateFromProps(props,state) {
//       console.log('getDerivedStateFromProps')
//    }

//    getSnapshotBeforeUpdate(prevProps, prevState) {
//       console.log('getSnapshotBeforeUpdate')
//    }

//    componentDidUpdate() {
//       console.log('componentDidUpdate')
//    }

}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
   },
   contentImage: {
      borderRadius: 50,
      height: 100,
      marginBottom: 5,
      width: 100
   },
   contentText: {
      fontSize: 16,
      fontWeight: 'bold'
   },
   flex: {
      flex: 1
   },
   italicFont: {
      fontStyle: 'italic'
   },
   header: {
      backgroundColor: 'gray',
      width: '100%',
      elevation : 10,
      height: 60,
      padding: 10
   },
   headerText: {
      fontSize: 20,
      color: 'white',
      alignSelf: 'center'
   },
   footer: {
      backgroundColor: 'gray',
      width: '100%',
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center'
   }
})

export default connect(mapStateToProps, mapActionToProps2)(InitialScreenPage)