import Realm from 'realm'
import UserModel from './models/User'

export default function openRealm() {
   const UserSchema = UserModel.schema()

   return Realm.open({
      schema: [
         UserSchema
      ],
      deleteRealmIfMigrationNeeded: true
   })
      .then((instance) => {
         global.realm = instance
         global.write = (fn) => {
            if (instance.isInTransaction) {
               fn()
            } else {
               instance.write(() => {
                  fn()
               })
            }
         }
      })
}
