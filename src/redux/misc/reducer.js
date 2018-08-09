import * as types from './types'

const initialState = {
   owner: 'MARK ANGELO URIAN',
   status: {},
   users: []
}

export default (state = initialState, action) => {
   switch (action.type) {
      case types.SET_USERS:
         const { payload : userList } = action
         return {
            ...state,
            users: userList
         }
      case types.SET_APP_OWNER:
         const { payload : {} } = action
         return {
            ...state,
            owner: state.misc.owner
         }
      case types.SET_STATUS:
         const { update, key, payload = {} } = action
         return {
            ...state,
            status: {
               ...state.status,
               [key]: {
                  ...(update ? state.status[key] || {} : {}),
                  ...payload
               }
            }
         }
      default:
         return state
   }
}