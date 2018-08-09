import { all, call } from 'redux-saga/effects'
import { watchUsers } from './actions/get-users'

export { getUsers } from './actions/get-users'

export function* sagas() {
   yield all([
      call(watchUsers)
   ])
}
