import { SET_STATUS } from '../../redux/misc/types'

/**
 * Creates an action creator for status updating
 */
export function createStatusActionCreator(key) {
   return {
      set(status) {
         return {
            key,
            type: SET_STATUS,
            payload: status
         }
      },

      update(status) {
         return {
            key,
            type: SET_STATUS,
            update: true,
            payload: status
         }
      },

      process(status) {
         return this.set({
            processing: true,
            ...status
         })
      },

      success(status) {
         return this.set({
            success: true,
            ...status
         })
      },

      fail(error) {
         return this.set({
            fail: true,
            error
         })
      },

      end() {
         return {
            key,
            type: SET_STATUS,
            payload: undefined
         }
      },
   }
}

/**
 * Creates action creator
 */
export function createActionCreator(type) {
   return payload => ({
      type,
      payload
   })
}
