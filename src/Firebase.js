import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCzII57lX7n9Gx3o3kTN6TXidmdhW6s6ZE',
  authDomain: 'yamx-note-app.firebaseapp.com',
  projectId: 'yamx-note-app',
  storageBucket: 'yamx-note-app.appspot.com',
  messagingSenderId: '91880048758',
  appId: '1:91880048758:web:b03d545c006f8bd135f757',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
