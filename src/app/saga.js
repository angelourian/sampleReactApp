import { all, call } from 'redux-saga/effects'
import { sagas as miscSaga } from './misc/misc'

export default function* appSagas() {
   try {
      yield all([
         call(miscSaga)
      ])
   } catch (error) {
      alert(error.message)
   }
}
