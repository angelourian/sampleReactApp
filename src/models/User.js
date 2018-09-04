const Realm = require ('realm')

const UserSchema = {
   name: 'User',
   primaryKey: 'id',
   properties: {
      id: 'int',
      firstName: 'string?',
      lastName: 'string?',
      name: 'string?',
      avatar: 'string?'
   }
}

export default class User extends Realm.Object {
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
         const { data } = response 
         if (data) {
            return data.map(data => {
               const userDetails = {
                  id: data.id,
                  firstName: data.first_name || '',
                  lastName: data.last_name || '',
                  name: `${data.first_name || ''} ${data.last_name || ''}`,
                  avatar: data.avatar || ''
               }
               this.save(userDetails)
               return userDetails
            })
         }
      })
      .catch(error => {
         console.log('USER ERROR')
         return this.getAllUsers()
      })

      const data = response

      // throw {
      //    message: 'No users found!'
      // }
      return data
   }

   static getAllUsers() {
      return realm.objects('User')
   }

   static load() {
      return realm.objects(UserSchema.name)
   }

   static save = (data) => {
      console.log('realm po')
      console.log(data)
      realm.write(() => {
         realm.create('User', {
            ...data
         }, true)
      })
   }
   static schema = () => UserSchema
}