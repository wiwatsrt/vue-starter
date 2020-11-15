import firebase from '@/plugins/firebase'
import store from '@/store'

export default (): Promise<void> => {
  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        store.dispatch('auth/autoSignIn', user)
      }
      resolve()
    })
  })
}
