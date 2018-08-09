import React from 'react'
import {
   ActivityIndicator,
   Image,
   StyleSheet,
   Text,
   View
} from 'react-native'
import {
   If,
   List
} from '../../../../../common/components'
import { connect } from 'react-redux'
import { getUsers } from '../../actions/get-users'

const mapActionToProps = {
   getUsers
}
const mapStateToProps = store => ({
   owner: store.misc.owner || {},
   status: store.misc.status.getUsers || {},
   users: store.misc.users || []
})
class InitialScreenPage extends React.Component {
   constructor (props) {
      super(props)
      this.state = {}
   }
   render () {
      const { owner, status, users } = this.props
      return (
         <View style={styles.container}>
            <View style = {[styles.header]}>
               <Text style = {styles.headerText}>Sample React Native Mobile App</Text>
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
      this.props.getUsers()
   }
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

export default connect(mapStateToProps, mapActionToProps)(InitialScreenPage)