//import firebase from 'firebase'
import 'firebase/firestore'
import firebases from 'firebase/app'

var firebaseConfig = {
	apiKey: 'AIzaSyCsWwvD7No56c33HkmTWsT7u2W8062JafM',
	authDomain: 'paginas-amarillas-niquia.firebaseapp.com',
	projectId: 'paginas-amarillas-niquia',
	storageBucket: 'paginas-amarillas-niquia.appspot.com',
	messagingSenderId: '794027110038',
	appId: '1:794027110038:web:c82ff1e261b7d173701cb7',
}
// Initialize Firebase

const fb = firebases.initializeApp(firebaseConfig)

export const db = fb.firestore()
