import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyD0aSatshLrS0LrfjiaYA-_FhUwu1gLO6A',
    authDomain: 'slack-clone-f49e3.firebaseapp.com',
    databaseURL: 'https://slack-clone-f49e3.firebaseio.com',
    projectId: 'slack-clone-f49e3',
    storageBucket: 'slack-clone-f49e3.appspot.com',
    messagingSenderId: '787255799005',
    appId: '1:787255799005:web:b14b9baf741b4dcd163f34',
    measurementId: 'G-SE0SG1PLLP',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
