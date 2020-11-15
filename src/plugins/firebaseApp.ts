import { FirebaseConfig } from '@/types'
import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = <FirebaseConfig>{
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
