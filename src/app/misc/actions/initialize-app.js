import { Story } from '../../../../common/components'
import { SET_APP_OWNER } from '../../../redux/misc/types'
import openRealm from '../../../realm'

// redux-thunk sample
export function initializeApp() {
   return async (dispatch, getState) => {
      try {
         console.log('initializeapp')
         openRealm()
         dispatch({
            type: SET_APP_OWNER,
            payload: 'Angelo Urian'
         })
         Story.getNavigator('root').resetScene('InitialScreen')
      } catch (e) {
         console.log('error')
         console.log(e.message)
      }
   }
}