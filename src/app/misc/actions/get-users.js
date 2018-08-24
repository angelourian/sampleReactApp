import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SET_USERS } from '../../../redux/misc/types'
import { compose } from 'redux'
import { createStatusActionCreator } from '../../../shared/utils/saga'
const GET_USERS = 'misc/users/get'

export const getUsers = (data) => ({
   type: GET_USERS,
   payload: data || []
})

const setUsers = (data) => ({
   type: SET_USERS,
   payload: data
})

class Users {
   static async getUsers() {
      const response = await fetch('https://reqres.in/api/users',{
         method: 'GET'
      })
      .then(response => response.text())
      .then(text => {
         try {
            return JSON.parse(text);
         } catch (error) {
            throw {
               message: 'Unable to process request',
               code: 1,
               text
            }
         }
      })
      .then(response => {
         console.log(response)
         return response
      })
      const { data } = response
      if (data) {
         return data.map(data => ({
            id: data.id,
            firstName: data.first_name || '',
            lastName: data.last_name || '',
            name: `${data.first_name || ''} ${data.last_name || ''}`,
            avatar: data.avatar || ''
         }))
      }

      throw {
         message: 'No users found!'
      }

      return data
   }
}

function* _getUsers() {
   const status = createStatusActionCreator('getUsers')
   try {
      yield put(status.process())
      const response = yield Users.getUsers()
      yield put(setUsers(response))
      yield put(status.end())
   } catch (error) {
      yield put(status.fail(error.message))
   }
}

export function* watchUsers() {
   // yield takeLatest(GET_USERS, _getUsers)
   yield takeLatest(GET_USERS, function* doASync() {
      yield _getUsers()
   })
}

// redux-thunk sample
export function getTheUsers() {
   return async (dispatch, getState) => {
      const status = createStatusActionCreator('getUsers')
      try {
         dispatch(status.process())
         const response = await Users.getUsers()
         dispatch ({
            type: SET_USERS,
            payload: response || []
         })
         dispatch(status.end())
      } catch (e) {
         console.log('error')
         console(e.message)
         dispatch(status.fail(e.message))
      }
   }
}
